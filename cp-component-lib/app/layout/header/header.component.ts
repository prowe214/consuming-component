import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cpl-header',
  styleUrls: ['./header.component.less'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() menuToggleEvent = new EventEmitter<MouseEvent>();

  ngOnInit() {
  }

  toggleMenu($event: MouseEvent) {
    this.menuToggleEvent.emit($event);
  }

}
