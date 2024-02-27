import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';
POKEMONS
Pokemon
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {
  PokemonList:Pokemon[]=POKEMONS;
  constructor(private router :Router){

  }
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
