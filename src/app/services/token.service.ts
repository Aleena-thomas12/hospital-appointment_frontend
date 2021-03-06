import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  handle(token: string) {
    this.set(token);
  }
  set(token) {
    localStorage.setItem("token", token);
  }
  get() {
    return localStorage.getItem("token");
  }
}
