import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { DatatablePageComponent } from './datatable-page.component';
import { datatablePageRouting as DatatablePageRouting } from './datatable-page.routing';

import { RandomService } from './../../core/utility/random.service';

import { CplDatatableModule } from './../../../lib/components/cpl-datatable/cpl-datatable.module';

@NgModule({
  declarations: [
    DatatablePageComponent
  ],
  exports: [
    DatatablePageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DatatablePageRouting,
    CplDatatableModule
  ],
  providers: [
    RandomService
  ]
})
export class DatatablePageModule { }
