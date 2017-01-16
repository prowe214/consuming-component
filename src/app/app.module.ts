import { CpButtonModule } from './cp-button/cp-button.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CpButtonComponent } from './cp-button/cp-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CpButtonComponent
  ],
  imports: [
    BrowserModule,
    CpButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
