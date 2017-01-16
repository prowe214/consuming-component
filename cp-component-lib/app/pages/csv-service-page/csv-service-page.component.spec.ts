import { CplFileSizePipe } from './../../../lib/pipes/file-size/file-size.pipe';
import { DatePipe } from '@angular/common';
import { RandomService } from './../../core/utility/random.service';
import { FakeReportService } from './../../core/fake-services/fake-report.service';
import { TranslateService, TranslateModule, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CsvServicePageComponent } from './csv-service-page.component';

describe('CsvServicePageComponent', () => {
  let component: CsvServicePageComponent;
  let fixture: ComponentFixture<CsvServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvServicePageComponent ],
      imports: [
        TranslateModule
      ],
      providers: [
        CplFileSizePipe,
        DatePipe,
        FakeReportService,
        RandomService,
        TranslateLoader,
        TranslateParser,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
