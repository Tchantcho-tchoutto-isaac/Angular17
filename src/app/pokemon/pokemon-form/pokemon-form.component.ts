import { Component, OnInit, input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import {Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {
@Input() Pokemon:Pokemon;
type:string[];

  constructor(private pokemonservice:PokemonService,private router :Router){

  }

  ngOnInit() {
    this.type=this.pokemonservice.getPokemonTypeList();
      
  }
 hasType(type:string):boolean{
  return this.Pokemon.types.includes(type);
 }
selectType($event:Event,type:string){
const ischeked:boolean =($event.target as HTMLInputElement).checked  
if (ischeked) {
  this.Pokemon.types.push(type);
  
}else{
  const index=this.Pokemon.types.indexOf(type);
  this.Pokemon.types.splice(index,1);
}

}
onsubmit(){
 console.log('submit form');
 this.router.navigate(['/pokemon',this.Pokemon.id])
}
}
