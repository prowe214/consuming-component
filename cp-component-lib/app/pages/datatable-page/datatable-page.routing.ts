import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatatablePageComponent } from './datatable-page.component';

const datatablePageRoutes: Routes = [
  {
    component: DatatablePageComponent,
    path: ''
  }
];

export const datatablePageRouting: ModuleWithProviders = RouterModule.forChild(datatablePageRoutes);
