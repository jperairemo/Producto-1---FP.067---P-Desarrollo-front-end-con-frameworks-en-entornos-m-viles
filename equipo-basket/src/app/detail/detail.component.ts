import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'] 
})
export class DetailComponent {
  @Input() player: Player | null = null;

  // Fallback de avatar (ajusta la ruta si usas /public/avatars/)
  defaultAvatar = 'avatars/default.png';
  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = this.defaultAvatar;
  }
}
