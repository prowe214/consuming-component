import { CpButtonRoutingModule } from './cp-button-routing.module';
import { CplDatatableModule } from './../../../cp-component-lib/lib/components/cpl-datatable/cpl-datatable.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    CpButtonRoutingModule,
    CplDatatableModule
  ]
})
export class DatatablePageModule { }
