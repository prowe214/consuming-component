// Angular 2 imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Third Party Imports
import { TranslateModule } from 'ng2-translate/ng2-translate';
// Page level imports
import { HighlightDirectivePageComponent } from './highlight-directive-page.component';
import { highlightDirectivePageRouting as HighlightDirectivePageRouting } from './highlight-directive-page.routing';
// Library level imports
import { HighlightDirectiveModule } from './../../../lib/attribute-directives/highlight-directive/highlight.module';

import { HighlightJsService } from 'angular2-highlight-js';

@NgModule({
  declarations: [
    HighlightDirectivePageComponent,
  ],
  exports: [
    HighlightDirectivePageComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    HighlightDirectivePageRouting,
    HighlightDirectiveModule,
    TranslateModule
  ],
  providers: [
    HighlightJsService
  ]
})
export class HighlightDirectivePageModule { }
