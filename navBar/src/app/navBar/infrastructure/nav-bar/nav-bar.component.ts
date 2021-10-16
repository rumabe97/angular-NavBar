import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INavbarConfig } from '../../domain/INavbarConfig';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() config: INavbarConfig;
  @Output() route = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}
