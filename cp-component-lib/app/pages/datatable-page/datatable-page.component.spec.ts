/* tslint:disable:no-unused-variable */
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';

import { createTranslateLoader } from './../../app.module';
import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { RandomService } from './../../core/utility/random.service';
import { FakeReportService } from './../../core/fake-services/fake-report.service';

import { DatatablePageComponent } from './datatable-page.component';

import { CplDatatableModule } from './../../../lib/components/cpl-datatable/cpl-datatable.module';
import { CplFileSizePipe } from './../../../lib/pipes/file-size/file-size.pipe';

describe('DatatablePageComponent', () => {
  let component: DatatablePageComponent;
  let fixture: ComponentFixture<DatatablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatatablePageComponent
      ],
      imports: [
        CplDatatableModule,
        HttpModule,
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateLoader,
        TranslateParser,
        RandomService,
        FakeReportService,
        DatePipe,
        CplFileSizePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
