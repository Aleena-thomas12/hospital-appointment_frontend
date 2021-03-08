import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils/utils.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url:any
  constructor(private httpClient: HttpClient,private utils:UtilsService) {

    this.url=utils.getApiPath()
   }
   onLogin(loginData){
      return this.httpClient
      .post<any>(this.url + "login", loginData).pipe(map(res => {
        return res
      })
      );
  }
}
