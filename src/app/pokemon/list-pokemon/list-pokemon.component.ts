import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
POKEMONS
Pokemon
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  PokemonList:Pokemon[];
  constructor(private router :Router,private PokemonService:PokemonService){

  }
    ngOnInit(): void {
        this.PokemonList=this.PokemonService.getPokemon();
    }
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
