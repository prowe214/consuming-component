import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupPageComponent } from './setup-page.component';

const setupRoutes: Routes = [
  {
    component: SetupPageComponent,
    path: ''
  }
];

export const setupPageRouting: ModuleWithProviders = RouterModule.forChild(setupRoutes);
