// NG2 Imports
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
// Third Party Imports
import './rxjs-extensions';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
// App Level Imports
import { AppComponent } from './app.component';
import { appRouting as AppRouting } from './app.routing';
// Shell Imports
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// Misc Imports
import { CoreModule } from './core/core.module';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    TranslateModule.forRoot({
      deps: [Http],
      provide: TranslateLoader,
      useFactory: (createTranslateLoader)
    }),
    CoreModule.forRoot()
  ],
  providers: [
    Title
  ]

})
export class AppModule { }
