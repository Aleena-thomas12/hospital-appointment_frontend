import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
helper:any
  constructor(public router: Router) {
    this.helper = new JwtHelperService();
   }

   canActivate(): boolean {
    if(!this.isAuthenticated()){
      return true;
    }
    else{
      let url=localStorage.getItem('url')
      this.router.navigate([url])
      return false;
    }
  
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.helper.isTokenExpired(token);
  }
}
