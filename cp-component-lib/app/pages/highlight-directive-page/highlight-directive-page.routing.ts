import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighlightDirectivePageComponent } from './highlight-directive-page.component';

const highlightDirectivePageRoutes: Routes = [
  {
    component: HighlightDirectivePageComponent,
    path: ''
  }
];

export const highlightDirectivePageRouting: ModuleWithProviders = RouterModule.forChild(highlightDirectivePageRoutes);
