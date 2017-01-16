import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Third Party Imports
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { SetupPageComponent } from './setup-page.component';
import { setupPageRouting as SetupPageRouting } from './setup-page.routing';

import { RandomService } from './../../core/utility/random.service';

@NgModule({
  declarations: [
    SetupPageComponent
  ],
  exports: [
    SetupPageComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    SetupPageRouting,
    TranslateModule
  ],
  providers: [
    RandomService
  ]

})
export class SetupPageModule { }
