import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, PaginatorModule } from 'primeng/primeng';

import { CplDatatableComponent } from './cpl-datatable.component';

import { CsvExportService } from './../../services/csv-export/csv-export.service';
import { PdfExportService } from './../../services/pdf-export/pdf-export.service';

@NgModule({
  declarations: [
    CplDatatableComponent
  ],
  exports: [
    CplDatatableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PaginatorModule
  ],
  providers: [
    PdfExportService,
    CsvExportService
  ]

})
export class CplDatatableModule { }
