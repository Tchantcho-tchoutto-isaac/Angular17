import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounce, debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent  implements OnInit{
 seachTerms=new Subject<string>();
 pokemons$:Observable<Pokemon[]>; 

  constructor(private router:Router, private pokemonService:PokemonService){}


  ngOnInit(): void {
    this.pokemons$=this.seachTerms.pipe(
      //{..."a","ab"..."abz"."ab"...."abc"....}
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((term)=>this.pokemonService.searchPokemonList(term))

    )
     
  }
  search(term: string){

  }
   goToDetail(pokemon: Pokemon){

    const link =['/pokemon',pokemon.id];
    this.router.navigate(link);
   }
}