import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'] // Correction de 'styleUrl' en 'styleUrls'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { } // Correction de 'PokemonService' en 'pokemonService'

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon); // Correction de 'this.pokemon = this.pokemon' en 'this.pokemon = pokemon'
    }
  }

  deletePokemon(pokemon:Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(()=>this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) { 
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

}

