import { Component} from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  PokemonList:Pokemon[]=POKEMONS;
 
}
