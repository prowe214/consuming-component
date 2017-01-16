import { CplDatatableComponent } from './../../../cp-component-lib/lib/components/cpl-datatable/cpl-datatable.component';
import { CplDatatableModule } from './../../../cp-component-lib/lib/components/cpl-datatable/cpl-datatable.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  exports: [
    CplDatatableComponent
  ],
  imports: [
    CommonModule,
    CplDatatableModule
  ]
})
export class CpButtonModule { }
