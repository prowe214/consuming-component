/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { By } from '@angular/platform-browser';

import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { createTranslateLoader } from './../../app.module';
import { RouterLinkStubDirective } from './../../../testing/index.spec';

import { SidebarComponent } from './sidebar.component';

let component: SidebarComponent;
let expectedEvent: MouseEvent;
let fixture: ComponentFixture<SidebarComponent>;
let links: RouterLinkStubDirective[];
let linkDes: DebugElement[];

describe('SidebarComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        RouterLinkStubDirective
      ],
      imports: [
        HttpModule,
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateLoader,
        TranslateParser
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    let mouseEvent: MouseEvent;
    component.menuToggleEvent.subscribe((event: MouseEvent) => mouseEvent = event);

    component.toggleMenuEvent(mouseEvent);
    expect(mouseEvent).toBe(expectedEvent);
  });

  it('should toggle the menu active flag from false to true', () => {
    let expectedValue = true;

    component.toggleMenu();
    expect(component.mobileMenuActive).toBe(expectedValue);
  });

  xit('can get the two RouterLinks from template', () => {
    expect(links.length).toBe(2, 'should have 2 links');
  });

  xit('can get the setup routerlinks from template', () => {
    expect(links[0].linkParams).toBe('/setup', '1st link should go to setup page');
  });

  xit('can get the highlight routerlinks from template', () => {
    expect(links[1].linkParams).toBe('/highlightDirective', '1st link should go to highlight directive page');
  });

  xit('can click setup link in template', () => {
    const setupLinkDe = linkDes[0];
    const setupLink = links[0];

    expect(setupLink.navigatedTo).toBeNull('link should not have navigated yet');

    setupLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(setupLink.navigatedTo).toBe('/setup');
  });

  xit('can click highlight directive link in template', () => {
    const highlightDirectiveLinkDe = linkDes[1];
    const highlightDirectiveLink = links[1];

    expect(highlightDirectiveLink.navigatedTo).toBeNull('link should not have navigated yet');

    highlightDirectiveLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(highlightDirectiveLink.navigatedTo).toBe('/highlightDirective');
  });
});
