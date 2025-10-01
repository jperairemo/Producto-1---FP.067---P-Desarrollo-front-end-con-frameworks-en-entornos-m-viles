// src/app/media/media.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html'
})
export class MediaComponent {
  private _player: Player | null = null;

  @Input() set player(value: Player | null) {
    // Si cambia de jugador, paramos la reproducción anterior
    if (this._player?.id !== value?.id) {
      this.stop();
    }
    this._player = value;
  }
  get player(): Player | null {
    return this._player;
  }

  playing = false;
  playUrlSafe: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  toggle() {
    if (!this.player?.videoUrl) return;

    if (this.playing) {
      this.stop();
      return;
    }

    const url = this.buildPlayableUrl(this.player.videoUrl);
    this.playUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.playing = true;
  }

  stop() {
    this.playing = false;
    this.playUrlSafe = null; // quitar iframe = detener
  }

  // Normaliza a /embed/, usa dominio nocookie y añade autoplay
  private buildPlayableUrl(url: string): string {
    let u = url.trim();

    try {
      const parsed = new URL(u);
      if (parsed.hostname.includes('youtu.be')) {
        const id = parsed.pathname.replace('/', '');
        u = `https://www.youtube.com/embed/${id}`;
      } else if (parsed.hostname.includes('youtube.com') && parsed.searchParams.get('v')) {
        const id = parsed.searchParams.get('v') ?? '';
        u = `https://www.youtube.com/embed/${id}`;
      }
    } catch {
      // si no parsea, seguimos con lo que venga (por si ya es /embed/)
    }

    u = u.replace('https://www.youtube.com/', 'https://www.youtube-nocookie.com/');
    const sep = u.includes('?') ? '&' : '?';
    return `${u}${sep}autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;
  }
}
