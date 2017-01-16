import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/setup'
  },
  {
    loadChildren: 'app/pages/setup-page/setup-page.module#SetupPageModule',
    path: 'setup'
  },
  {
    loadChildren: 'app/pages/datatable-page/datatable-page.module#DatatablePageModule',
    path: 'datatable'
  },
  {
    loadChildren: 'app/pages/csv-service-page/csv-service-page.module#CsvServicePageModule',
    path: 'csvservice'
  },
  {
    loadChildren: 'app/pages/pdf-service-page/pdf-service-page.module#PdfServicePageModule',
    path: 'pdfservice'
  },
  {
    loadChildren: 'app/pages/highlight-directive-page/highlight-directive-page.module#HighlightDirectivePageModule',
    path: 'highlightDirective'
  },
  {
    loadChildren: 'app/pages/file-size-pipe-page/file-size-pipe-page.module#FileSizePipePageModule',
    path: 'filesizepipe'
  },
  {
    loadChildren: 'app/pages/not-found-page/not-found-page.module#NotFoundPageModule',
    path: '**'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
