import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'cpl-root',
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(SidebarComponent)
  public sidebarComponent: SidebarComponent;

  constructor(private titleService: Title,
              private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-US');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en-US');
    translate.get('appTitle').subscribe(
      (res: string) => this.titleService.setTitle(res)
    );
  }

  toggleMenu(e) {
    this.sidebarComponent.toggleMenu();
  }

}
