/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';

import { createTranslateLoader } from './../../app.module';
import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { RandomService } from './../../core/utility/random.service';
import { FileSizePipePageComponent } from './file-size-pipe-page.component';

describe('FileSizePipePageComponent', () => {
  let component: FileSizePipePageComponent;
  let fixture: ComponentFixture<FileSizePipePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileSizePipePageComponent
      ],
      imports: [
        HttpModule,
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateLoader,
        TranslateParser,
        RandomService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizePipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
