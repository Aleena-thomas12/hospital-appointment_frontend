import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppSettingsService } from '../AppSettings/app-settings.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  url: any
  constructor(private httpClient: HttpClient, private utils: UtilsService, private appSettings: AppSettingsService) {
    this.url = utils.getApiPath()
  }
  getAllPatients() {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get_all_pat", { headers }).pipe(map(res => {
        return res
      })
      );
  }
  getPatientBookings(id) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get_pat_app?pat_id="+id, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  getPatInfo(data){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get-pat-info?pat_id="+data,{ headers }).pipe(map(res => {
        return res
      })
      );
  }
  editPatInfo(data){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "edit-pat-info", data,{ headers }).pipe(map(res => {
        return res
      })
      );
  }
  deletPatInfo(temp){
    let data:any={id:temp}
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "delete-pat", data,{ headers }).pipe(map(res => {
        return res
      })
      );
  }
}
