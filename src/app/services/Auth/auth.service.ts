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
  onLogout(){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .get<any>(this.url + "logout", { headers }).pipe(map(res => {
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
chnagePass(data){
  const headers = this.appSettings.getHttpClientHeaders();
  return this.httpClient
  .post<any>(this.url + "change-pass", data, { headers }).pipe(map(res => {
    return res
  })
  );
}
passResetLink(data){
  return this.httpClient
      .post<any>(this.url + "pass-reset-link", data).pipe(map(res => {
        return res
      })
      );
}
changeToNewPass(data){
  return this.httpClient
      .post<any>(this.url + "pass-reset-complete", data).pipe(map(res => {
        return res
      })
      );
}
signUp(data){
  return this.httpClient
  .post<any>(this.url + "sign-up", data).pipe(map(res => {
    return res
  })
  );
}
changePatEmail(data){
  const headers = this.appSettings.getHttpClientHeaders();
  return this.httpClient
  .post<any>(this.url + "change-pat-email", data, { headers }).pipe(map(res => {
    return res
  })
  );
}
}
