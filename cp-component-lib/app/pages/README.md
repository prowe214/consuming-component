# Pages

This is the location where all pages/routes and their children will want to live.  Each page should be its own module, and have it's own router defined in the parent level folder.

## Purpose

These pages will effectively be the documentation for the components that are written in the lib folder.

## Workflow

1. Developer will create a new page component here via `ng g component pages/<name-of-page>`.
2. Create a `<name of page>.routing.ts`.
  * Create an array of routes for that page.
  * List the children and their component counterparts.
  * Export the array to be imported into the `<name of page>.module.ts`.
  * Example:
  ```javascript
    import { ModuleWithProviders }   from '@angular/core';
    import { Routes, RouterModule }  from '@angular/router';

    import { PageNotFoundComponent } from './page-not-found.component';




    const pageNotFoundRoutes: Routes = [
      {
        path: '',
        component: PageNotFoundComponent
      }
    ];

    export const pageNotFoundRouting: ModuleWithProviders = RouterModule.forChild(pageNotFoundRoutes);

  ```
3. Create a `<name of page>.module.ts`.
  * Add the `NgModule` Decorator
  * Export the `<name-of-page>` component
  * Declare the `<name-of-page>` component
  * Import the `<name-of-page>`routing
  * Import the stateless component module from `lib`
  * Example
  ```javascript
  import { NgModule }            from '@angular/core';
  import { CommonModule }        from '@angular/common';
  import { FormsModule }         from '@angular/forms';

  import { DemoDirectiveModule } from './../../lib/demo-directive/demo-directive.module';

  import { NameOfPageComponent }  from './name-of-page.component';

  import { nameOfPageRouting as NameOfPageRouting }  from './name-of-page.routing';



  @NgModule({
    imports: [
      CommonModule,
      SharedDemoDirectiveModule,
      NameOfPageRouting
    ],
    declarations: [
      NameOfPageComponent
    ],
    exports: [
      NameOfPageComponent,
      CommonModule,
      FormsModule
    ]
  })
  export class NameOfPageModule { }

  ```

4. Add the new page route to `app.routing.ts`.
