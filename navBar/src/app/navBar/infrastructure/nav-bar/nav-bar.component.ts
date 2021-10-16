import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { INavbarConfig } from '../../domain/INavbarConfig';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  @Input() config: INavbarConfig;
  @Output() route = new EventEmitter<any>();

  notComplete: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter(item: any) {
    item.tooltip = true;
  }

  mouseLeave(item: any) {
    item.tooltip = false;
  }
}
