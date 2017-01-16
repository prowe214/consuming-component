import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cpl-sidebar',
  styleUrls: ['./sidebar.component.less'],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  activeMenuId: string;
  mobileMenuActive: boolean = false;

  @Output() menuToggleEvent = new EventEmitter<MouseEvent>();

  toggleMenuEvent($event: MouseEvent) {
    this.menuToggleEvent.emit($event);
  }

  toggleMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
