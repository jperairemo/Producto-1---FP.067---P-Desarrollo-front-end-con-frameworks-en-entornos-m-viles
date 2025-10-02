import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player.model';

@Pipe({
  name: 'playersFilter',
  standalone: true
})
export class PlayersFilterPipe implements PipeTransform {
  transform(players: Player[], term: string): Player[] {
    if (!players || !term) return players;
    const t = term.toLowerCase().trim();

    return players.filter(p => {
      const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
      const pos = (p.position || '').toLowerCase();
      const ageStr = String(p.age);
      return fullName.includes(t) || pos.includes(t) || ageStr.includes(t);
    });
  }
}
