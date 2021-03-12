import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils/utils.service';
import { map } from "rxjs/operators";
import { AppSettingsService } from '../AppSettings/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url:any
  constructor(private httpClient: HttpClient,private utils:UtilsService,private appSettings: AppSettingsService) {

    this.url=utils.getApiPath()
    
   }
   onLogin(loginData){
      return this.httpClient
      .post<any>(this.url + "login", loginData).pipe(map(res => {
        return res
      })
      );
  }
  changeEmail(data){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .post<any>(this.url + "change-email", data, { headers }).pipe(map(res => {
      return res
    })
    );
}
}
