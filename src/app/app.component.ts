import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  PokemonList = ['bulbizarre','salamèche','carapuce'];

  ngOnInit(): void {
      console.table(this.PokemonList);
      this.selectpokemon('salameche');
  }

   selectpokemon(pokemonName:string){
    console.log(`Vous avez cliqué sur le Pokémon ${pokemonName}`);
  }
}
