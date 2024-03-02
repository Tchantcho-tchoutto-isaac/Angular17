import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';



@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent  implements OnInit {
  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute,private router:Router,private PokemonService:PokemonService){}
  
  
  ngOnInit() { // Ajout de la méthode ngOnInit

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.PokemonService.getPokemonById(+pokemonId).subscribe(pokemon=>this.pokemon=this.pokemon)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons'])
  }


  goToEditPokemon(Pokemon:Pokemon){
    this.router.navigate(['edit/pokemon',Pokemon.id]);
  }
}
