import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppSettingsService } from '../AppSettings/app-settings.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorServicesService {
  url: any
  constructor(private httpClient: HttpClient, private utils: UtilsService, private appSettings: AppSettingsService) {
    this.url = utils.getApiPath()
  }

  getAllDoctors() {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "get_all_doctors", { headers }).pipe(map(res => {
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
  updateDoctorDetails(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "update_doctor_info", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  getDoctorAppointments(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .get<any>(this.url + "doct_appointments?doct_id=" + data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  changeAvailability(data) {

    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "update_availability", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  addSlot(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "add-slot", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
  deleteSlot(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "delete-slot", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }

  arrangeSlots(data) {
    const headers = this.appSettings.getHttpClientHeaders();
    return this.httpClient
      .post<any>(this.url + "arrange-slot", data, { headers }).pipe(map(res => {
        return res
      })
      );
  }
}
