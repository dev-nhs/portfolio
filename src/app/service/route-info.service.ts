import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteInfoService {

  constructor(private router: Router) { }

  getCurrentRoute(): string {
    return this.router.url.split('/')[1];
  }
  
}
