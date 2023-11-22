import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  BaseUrl: string = environment.BASE_URL;
  AddUrl:string = environment.ADDIONATIONAL_URL;
  SiteUrl:string = this.BaseUrl+this.AddUrl;

  constructor(private http: HttpClient) { }

    registerService(url: string, registerData:any){
      return this.http.post(this.SiteUrl + url, registerData)
    }

    loginService(url:string,loginData:any){
      return this.http.post(this.SiteUrl + url, loginData)
    }

}
