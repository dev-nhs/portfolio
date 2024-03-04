import { Component } from '@angular/core';
import * as AOS from 'aos';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PORTFOLIO';

  ngAfterViewInit() {
    AOS.init();
    initFlowbite();

  }
}
