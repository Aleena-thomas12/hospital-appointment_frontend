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
   cancelAppointment(temp){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .post<any>(this.url + "cancel-appointment",temp, { headers }).pipe(map(res => {
      return res  
    })
    );
   }
   getAppointment(id){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .get<any>(this.url + "get_appointment?app_id="+id, { headers }).pipe(map(res => {
      return res  
    })
    );
   }
   getTimeSlots(date,doct_id){
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
    .get<any>(this.url + "get_timeslots?doct_id="+doct_id+"&date="+date, { headers }).pipe(map(res => {
      return res  
    })
    );
   }
}
