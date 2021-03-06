import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private tokServ:TokenService) { }
  getHttpClientHeaders(){

    const token = this.tokServ.get()
    const headers =  new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", "Bearer "+token );
    
    console.log(headers,"Tokem")
    return headers;
  }
}
