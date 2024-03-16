import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  
  CanActivate(){
    console.log('le guard a bien été appelé');
    return true;

  }
  
};
