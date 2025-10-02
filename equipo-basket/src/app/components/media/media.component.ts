// src/app/media/media.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
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
    const key = url.trim(); // 'video1' | 'video2' | 'video3' o una ruta ya armada

    // Si ya te llega una URL completa o una ruta a assets, úsala tal cual
    if (/^https?:\/\//i.test(key) || key.startsWith('assets/')) {
      return key;
    }

    // Si te llega 'video1'/'video2'/'video3', construimos la ruta en assets
    return `assets/videos/${key}.mp4`;
  }
}
