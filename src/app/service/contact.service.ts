import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendEmail(data: any) {
    return this.http.post<JSON>(environment.apiUrl + '/sendemail', data);
  }

}
