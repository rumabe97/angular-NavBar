import { Component } from '@angular/core';
import { INavbarConfig } from './navBar/domain/INavbarConfig';
import { config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navBar';
  config: INavbarConfig = { ...config };


  changeRoute(route: any) {
    console.log('change to -->')
  }
}
