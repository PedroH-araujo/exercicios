import { HeaderService } from './header.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private headerervice: HeaderService) {}

  get title(): string {
    return this.headerervice.headerData.title
  }
  
  get icon(): string {
    return this.headerervice.headerData.icon
  }
  
  get routeUrl(): string {
    return this.headerervice.headerData.title
  }
}
