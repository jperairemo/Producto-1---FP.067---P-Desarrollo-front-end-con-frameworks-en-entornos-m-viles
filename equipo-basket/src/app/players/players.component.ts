import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from '../models/player.model';
import { PlayersFilterPipe } from '../players-filter.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayersFilterPipe],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @Input() players: Player[] = [];
  @Input() activeId?: number;
  @Output() selected = new EventEmitter<Player>();

  search = '';

  select(p: Player) {
    this.selected.emit(p);
  }
}
