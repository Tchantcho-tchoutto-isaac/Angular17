import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent  implements OnInit{
 seachTerms=new Subject<string>();
 pokemons$:Observable<Pokemon[]>; 
  constructor(private router:Router){}
  ngOnInit(): void {
     
  }
  search(term: string){

  }
   goToDetail(pokemon: Pokemon){

    const link =['/pokemon',pokemon.id];
    this.router.navigate(link);
   }
}