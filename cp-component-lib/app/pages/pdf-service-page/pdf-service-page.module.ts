import { TranslateModule } from 'ng2-translate/ng2-translate';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pdfServicePageRouting as PdfServicePageRouting } from './pdf-service-page.routing';
import { PdfServicePageComponent } from './pdf-service-page.component';

import { PdfExportService } from './../../../lib/services/pdf-export/pdf-export.service';

@NgModule({
  declarations: [
    PdfServicePageComponent
  ],
  exports: [
    PdfServicePageComponent
  ],
  imports: [
    CommonModule,
    PdfServicePageRouting,
    TranslateModule
  ],
  providers: [
    PdfExportService
  ]
})
export class PdfServicePageModule { }
