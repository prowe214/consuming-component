import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsvServicePageComponent } from './csv-service-page.component';

const csvServicePageRoutes: Routes = [
  {
    component: CsvServicePageComponent,
    path: ''
  }
];

export const csvServicePageRouting: ModuleWithProviders = RouterModule.forChild(csvServicePageRoutes);
