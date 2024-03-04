import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouteInfoService } from 'src/app/service/route-info.service';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentRoute!: string;
  darkMode: boolean = false;

  constructor(private routeInfoService: RouteInfoService) { }

  ngOnInit(): void {
    this.currentRoute = this.routeInfoService.getCurrentRoute();
    const storedDarkMode = localStorage.getItem('darkMode');
    this.darkMode = storedDarkMode === 'false' ? false : Boolean(storedDarkMode);

    if (this.darkMode) {
      document.body.classList.add('dark');
      document.body.classList.add('bg-black');
    }

  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
    document.body.classList.toggle('bg-black');
    localStorage.setItem('darkMode', String(this.darkMode));
  }


}
