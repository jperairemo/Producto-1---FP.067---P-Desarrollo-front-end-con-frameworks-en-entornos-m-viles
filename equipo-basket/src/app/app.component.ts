import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYERS } from './data/players';
import { Player } from './models/player.model';

import { PlayersComponent } from './components/players/players.component';
import { DetailComponent }  from './components/detail/detail.component';
import { MediaComponent }   from './components/media/media.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayersComponent, DetailComponent, MediaComponent, SafeUrlPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[] = PLAYERS;
  selectedPlayer: Player | null = this.players[0] ?? null;

  onSelect(p: Player) {
    this.selectedPlayer = p;
  }
}
