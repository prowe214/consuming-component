import { CplDatatableComponent } from './../../../cp-component-lib/lib/components/cpl-datatable/cpl-datatable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const buttonPageRoutes: Routes = [
  {
    component: CplDatatableComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(buttonPageRoutes)
  ]
})

export class CpButtonRoutingModule {}
