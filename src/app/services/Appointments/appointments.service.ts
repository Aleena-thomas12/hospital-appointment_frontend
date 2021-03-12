import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppSettingsService } from '../AppSettings/app-settings.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  url:any
  constructor(private httpClient: HttpClient,private utils:UtilsService,private appSettings:AppSettingsService) {
    this.url=utils.getApiPath()
   }

   getallAppointments(){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .get<any>(this.url + "get_all_appointments", { headers }).pipe(map(res => {
      return res  
    })
    );
   }
   getPatientAppointments(id){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .get<any>(this.url + "get_patient_appointments?pat_id="+id, { headers }).pipe(map(res => {
      return res  
    })
    );
   }
}
