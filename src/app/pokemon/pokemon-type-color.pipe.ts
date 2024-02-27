import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-1';
        break;
      case 'Vol':
        color = 'blue lighten-1';
        break;
      case 'Poisson':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      default:
        color = 'grey';
        break;
    }
    return color;
  }
}
