import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player.model';

@Pipe({
  name: 'playersFilter',
  standalone: true, // permite importarlo directo en 'imports' de componentes standalone
})
export class PlayersFilterPipe implements PipeTransform {
  transform(players: Player[] | null | undefined, term: string = '', position: string = ''): Player[] {
    if (!players) return [];

    // Normalizamos
    const t = (term ?? '').trim().toLowerCase();
    const p = (position ?? '').trim().toLowerCase();

    return players.filter(pl => {
      const name = `${pl.firstName} ${pl.lastName}`.toLowerCase();
      const pos  = (pl.position || '').toLowerCase();

      // 1) Filtro por texto: nombre, apellidos, posición o edad
      const okTerm =
        !t ||
        name.includes(t) ||
        pos.includes(t) ||
        String(pl.age).includes(t);

      // 2) Filtro por posición (dropdown)
      const okPos = !p || pos === p;

      return okTerm && okPos;
    });
  }
}
