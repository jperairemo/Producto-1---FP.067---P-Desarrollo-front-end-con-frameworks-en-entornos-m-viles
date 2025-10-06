import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYERS } from './data/players';
import { Player } from './models/player.model';

import { PlayersComponent } from './components/players/players.component';
import { DetailComponent }  from './components/detail/detail.component';
import { MediaComponent }   from './components/media/media.component';
// (Opcional) SafeUrlPipe ya no es necesario si Media usa DomSanitizer
// import { SafeUrlPipe } from './pipes/safe-url.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayersComponent, DetailComponent, MediaComponent], // quité SafeUrlPipe
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[] = PLAYERS;
  selectedPlayer: Player | null = this.players[0] ?? null;

  onSelect(p: Player) {
    this.selectedPlayer = p;
  }

  // 👇 para cumplir la rúbrica: cerrar detalle y volver sin selección
  onCloseDetail() {
    this.selectedPlayer = null;
  }
}
