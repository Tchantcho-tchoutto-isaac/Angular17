import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
   message: string='vous etes déconnecté.(pikachu/pikachu)'
   name:string;
   password:string;
   auth:AuthService;

   constructor(
    private authservice:AuthService,
    private router :Router){}
 ngOnInit(): void {
     this.auth=this.authservice;
 }
 setMessage(){
  if(this.auth.isLoggedIn){
  this.message='vous etes connecté...';
  }else{
    this.message='Identifiant ou mot de passe incorrect.';
  }
 }

 login(){
  this.message='Tentative de connexion en cours ...';
  this.auth.Login(this.name,
   this.password).subscribe((isLoggedIn:boolean)=>{
    this.setMessage();
  if(isLoggedIn){
    this.router.navigate(['/pokemons']);
  } else {this.password='';
   this.router.navigate(['/login'])}})
 }

 logout(){
  this.auth.logout();
  this.setMessage();
 }
}
