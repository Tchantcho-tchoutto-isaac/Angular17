import { Component, OnInit, input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {
@Input() Pokemon:Pokemon;
type:string[];

  constructor(private pokemonservice:PokemonService){

  }

  ngOnInit() {
    this.type=this.pokemonservice.getPokemonTypeList();
      
  }
 hasType(type:string):boolean{
  return this.Pokemon.types.includes(type);
 }
selectType(){

}
onsubmit(){

}
}
