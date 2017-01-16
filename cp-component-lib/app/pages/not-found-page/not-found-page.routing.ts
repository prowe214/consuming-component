import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';

const notFoundPageRoutes: Routes = [
  {
    component: NotFoundPageComponent,
    path: ''
  }
];

export const notFoundPageRouting: ModuleWithProviders = RouterModule.forChild(notFoundPageRoutes);
