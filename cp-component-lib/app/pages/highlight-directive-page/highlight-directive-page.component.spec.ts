/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { createTranslateLoader } from './../../app.module';
import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { HighlightDirectivePageComponent } from './highlight-directive-page.component';
import { HighlightDirective } from './../../../lib/attribute-directives/highlight-directive/highlight.directive';
import { HighlightJsService } from 'angular2-highlight-js';

describe('HighlightDirectivePageComponent', () => {
  let component: HighlightDirectivePageComponent;
  let fixture: ComponentFixture<HighlightDirectivePageComponent>;
  let highlightService: HighlightJsService;
  let docEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightDirectivePageComponent,
        HighlightDirective
      ],
      imports: [
        HttpModule,
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateLoader,
        TranslateParser,
        HighlightJsService
      ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightDirectivePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addContent()', () => {

    it('should populate documentation content for example1', () => {
      component.addContent();
      expect(component.htmlContent.length).toBeGreaterThan(0);
    });

    it('should populate documentation content for example2', () => {
      component.addContent();
      expect(component.htmlContent2.length).toBeGreaterThan(0);
    });

    it('should populate documentation content for example3', () => {
      component.addContent();
      expect(component.htmlContent3.length).toBeGreaterThan(0);
    });
  });

  describe('highlightByService()', () => {

    beforeEach(() => {
      highlightService = fixture.debugElement.injector.get(HighlightJsService);
    });

    it('should provide syntax highlighting to documentation', () => {
      let sample = fixture.debugElement.query(By.css('pre.html'));
      component.highlightByService(sample.nativeElement);
      expect(sample.nativeElement.attributes.class.value).toContain('hljs');
    });
  });
});
