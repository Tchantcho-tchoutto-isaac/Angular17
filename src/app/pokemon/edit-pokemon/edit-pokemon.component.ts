import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent implements OnInit  {
  pokemon:Pokemon|undefined;

  constructor (private route:ActivatedRoute, private pokemonservice:PokemonService){

  }
  ngOnInit(){
    const pokemonId:string|null=this.route.snapshot.paramMap.get('id')
    if(pokemonId){
      this.pokemon=this.pokemonservice.getPokemonByid(+pokemonId);
    }
    else{
      this.pokemon=undefined;
    }
  }

}