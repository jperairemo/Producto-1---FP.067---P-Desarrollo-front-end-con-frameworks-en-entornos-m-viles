import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() player: Player | null = null;

  // 👉 nuevo: evento para cerrar el detalle
  @Output() closed = new EventEmitter<void>();

  // Fallback de avatar
  defaultAvatar = 'avatars/default.png';
  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = this.defaultAvatar;
  }

  // 👉 nuevo: método que dispara el cierre
  close() {
    this.closed.emit();
  }
}
