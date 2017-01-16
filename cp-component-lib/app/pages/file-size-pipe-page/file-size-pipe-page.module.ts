import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Third Party Imports
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { FileSizePipePageComponent } from './file-size-pipe-page.component';
import { fileSizePipePageRouting as FileSizePipePageRouting } from './file-size-pipe-page.routing';

import { RandomService } from './../../core/utility/random.service';

@NgModule({
  declarations: [
    FileSizePipePageComponent
  ],
  exports: [
    FileSizePipePageComponent
  ],
  imports: [
    CommonModule,
    FileSizePipePageRouting,
    TranslateModule
  ],
  providers: [
    RandomService
  ]

})
export class FileSizePipePageModule { }
