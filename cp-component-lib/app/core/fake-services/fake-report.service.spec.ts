/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { FakeReportService } from './fake-report.service';
import { RandomService } from './../utility/random.service';

import { CplFileSizePipe } from './../../../lib/pipes/file-size/file-size.pipe';

describe('FakeReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FakeReportService,
        RandomService,
        DatePipe,
        CplFileSizePipe
      ]
    });
  });

  it('should ...', inject([FakeReportService], (service: FakeReportService) => {
    expect(service).toBeTruthy();
  }));
});
