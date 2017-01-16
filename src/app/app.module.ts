import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CpButtonComponent } from './cp-button/cp-button.component';
// import { CpComponentLibraryModule } from 'ng-component-library';

@NgModule({
  declarations: [
    AppComponent,
    // CpComponentLibraryModule,
    CpButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
