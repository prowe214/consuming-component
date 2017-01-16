import { TranslateModule } from 'ng2-translate/ng2-translate';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvServicePageComponent } from './csv-service-page.component';
import { csvServicePageRouting } from './csv-service-page.routing';

@NgModule({
  declarations: [
    CsvServicePageComponent
  ],
  exports: [
    CsvServicePageComponent
  ],
  imports: [
    CommonModule,
    csvServicePageRouting,
    TranslateModule
  ]

})
export class CsvServicePageModule { }
