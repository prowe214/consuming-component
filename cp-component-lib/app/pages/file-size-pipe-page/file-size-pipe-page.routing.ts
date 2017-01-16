import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileSizePipePageComponent } from './file-size-pipe-page.component';

const fileSizePipeRoutes: Routes = [
  {
    component: FileSizePipePageComponent,
    path: ''
  }
];

export const fileSizePipePageRouting: ModuleWithProviders = RouterModule.forChild(fileSizePipeRoutes);
