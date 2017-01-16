import { TranslateLoader, TranslateParser, TranslateService, TranslateModule } from 'ng2-translate/ng2-translate';
import { CplFileSizePipe } from './../../../lib/pipes/file-size/file-size.pipe';
import { DatePipe } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfServicePageComponent } from './pdf-service-page.component';
import { PdfExportService } from './../../../lib/services/pdf-export/pdf-export.service';

describe('PdfServicePageComponent', () => {
  let component: PdfServicePageComponent;
  let fixture: ComponentFixture<PdfServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PdfServicePageComponent
      ],
      imports: [TranslateModule],
      providers: [
        CplFileSizePipe,
        DatePipe,
        PdfExportService,
        TranslateLoader,
        TranslateParser,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
