import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private apiPath: string;
  private apiPath_user: string;
  private s3url: string;

  constructor() { 
     this.apiPath = "http://127.0.0.1:8000/api/admin-panel/";
     this.apiPath_user = "http://127.0.0.1:8000/api/patient-user/";
    // this.apiPath = " https://api.chaloexam.in/api/cpanel/";
  }
  public getApiPath() {
    return this.apiPath;
  }
  public getUSerApiPath() {
    return this.apiPath_user;
  }
  
}
