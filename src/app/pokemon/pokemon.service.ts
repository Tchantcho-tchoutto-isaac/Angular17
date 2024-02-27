import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  
  getPokemon():Pokemon[]{
    return POKEMONS;
  }

  getPokemonByid(pokemonId:number):Pokemon|undefined{
    return POKEMONS.find(pokemon=>pokemon.id==pokemonId)
  }

  getPokemonTypeList():string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
