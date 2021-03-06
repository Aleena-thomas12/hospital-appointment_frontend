import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppSettingsService } from '../AppSettings/app-settings.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
 url:any
  constructor(private httpClient: HttpClient,private utils:UtilsService,private appSettings:AppSettingsService) {
    this.url=utils.getApiPath()
   }
   getHomeData(){
    const headers = this.appSettings.getHttpClientHeaders();
      return this.httpClient
      .get<any>(this.url + "home_data", { headers }).pipe(map(res => {
        return res  
      })
      );
  }
}
