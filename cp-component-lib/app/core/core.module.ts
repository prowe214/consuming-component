import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RandomService } from './utility/random.service';
import { FakeReportService } from './fake-services/fake-report.service';
import { CplFileSizePipe } from './../../lib/pipes/file-size/file-size.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FakeReportService,
    RandomService,
    DatePipe,
    CplFileSizePipe
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

 }
