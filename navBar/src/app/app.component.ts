import { Component, OnInit } from '@angular/core';
import { INavbarConfig } from './navBar/domain/INavbarConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'navBar';
  config: INavbarConfig;

  ngOnInit(): void {
    this.config={
      userPosition:'up',
      items:[],
      user:null,
      logo:'',
      logoName:'Staffit'
    }
  }

  changeRoute(route:any){
    console.log('change to -->')
  }
}
