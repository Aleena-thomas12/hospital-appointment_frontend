import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppSettingsService } from '../AppSettings/app-settings.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class NursesService {
  url: any
  constructor(private httpClient: HttpClient, private utils: UtilsService, private appSettings: AppSettingsService) {
    this.url = utils.getApiPath()
  }
  getAllNurses() {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get_all_nurses", { headers }).pipe(map(res => {
        return res
      })
      );
  }
  getDoctorData(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get_doctor_info?doct_id=" + data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  changeAvailability(data) {

    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "nurse_update_availability", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  addNurse(data){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "add-nurse", data,{ headers }).pipe(map(res => {
        return res
      })
      );
  }
}
