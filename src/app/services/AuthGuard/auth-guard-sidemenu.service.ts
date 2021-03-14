import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardSidemenuService {

  constructor(public router: Router) { }

  canActivate(): boolean {
  let sidemenu=localStorage.getItem('url');
  if(sidemenu=='sidemenu') {
    this.router.navigate([sidemenu])
    return true;
  }
  else{
    return false;
  }
  
  }
}
