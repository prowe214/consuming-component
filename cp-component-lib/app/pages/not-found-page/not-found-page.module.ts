import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotFoundPageComponent } from './not-found-page.component';
import { notFoundPageRouting as NotFoundPageRouting } from './not-found-page.routing';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  exports: [
    NotFoundPageComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    NotFoundPageRouting
  ]

})
export class NotFoundPageModule { }
