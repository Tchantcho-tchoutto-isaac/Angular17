import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';



@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent  implements OnInit {
  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute,private router:Router){}
  
  
  ngOnInit() { // Ajout de la méthode ngOnInit
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons'])
  }
}
