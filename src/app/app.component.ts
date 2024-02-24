import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  PokemonList:Pokemon[]=POKEMONS;
  pokemonselectted:Pokemon|undefined;
  

  ngOnInit(): void {
      console.table(this.PokemonList);

  }

   selectpokemon(PokemonId:string){

    const pokemon:Pokemon|undefined=this.PokemonList.find(pokemon=>pokemon.id==+pokemon)
    if(pokemon){
      console.log(`Vous avez cliqué sur le Pokémon ${pokemon.name}`)
      this.pokemonselectted=pokemon
    }
    else{
      console.log(`vous avez demandé un pokemon qui n'existe pas .`)
      this.pokemonselectted=pokemon;
      
    }
    ;
  }
}
