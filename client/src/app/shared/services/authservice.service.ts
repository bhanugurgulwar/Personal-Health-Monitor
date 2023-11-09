import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  SiteUrl: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

    registerService(url: string, registerData:any){
      return this.http.post(this.SiteUrl + url, registerData)

      
    }

}
