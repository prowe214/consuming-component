import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfServicePageComponent } from './pdf-service-page.component';

const pdfServicePageRoutes: Routes = [
  {
    component: PdfServicePageComponent,
    path: ''
  }
];

export const pdfServicePageRouting: ModuleWithProviders = RouterModule.forChild(pdfServicePageRoutes);
