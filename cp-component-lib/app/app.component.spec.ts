/* tslint:disable:no-unused-variable */
import { Title, By } from '@angular/platform-browser';
import { getTestBed, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { createTranslateLoader } from './app.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

const mockBackendResponse = (connection: MockConnection, response: string) => {
  connection.mockRespond(new Response(new ResponseOptions({ body: response })));
};

describe('App: NgComponentLibrary', () => {
  let injector: Injector;
  let backend: MockBackend;
  let translate: TranslateService;
  let title: Title;
  let connection: MockConnection; // this will be set when a new connection is emitted from the backend.
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot({
          deps: [Http],
          provide: TranslateLoader,
          useFactory: (createTranslateLoader)
        })
      ],
      providers: [
        Title,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      appComponent = fixture.componentInstance;
    });

    injector = getTestBed();
    backend = injector.get(XHRBackend);
    translate = injector.get(TranslateService);
    title = injector.get(Title);
    // sets the connection when someone tries to access the backend with an xhr request
    backend.connections.subscribe((c: MockConnection) => connection = c);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();

  });

  afterEach(() => {
        injector = undefined;
        backend = undefined;
        translate = undefined;
        connection = undefined;
        title = undefined;
    });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be able to get translations', () => {
    translate.use('en');

    // this will request the translation from the backend because we use a static files loader for TranslateService
    translate.get('TEST').subscribe((res: string) => {
        expect(res).toEqual('This is a test');
    });

    // mock response after the xhr request, otherwise it will be undefined
    mockBackendResponse(connection, '{"TEST": "This is a test", "TEST2": "This is another test"}');

    // this will request the translation from downloaded translations without making a request to the backend
    translate.get('TEST2').subscribe((res: string) => {
        expect(res).toEqual('This is another test');
    });
  });

  it('should change title of application', async(() => {
    title.setTitle('TEST');
    fixture.detectChanges();

    expect(title.getTitle()).toEqual('TEST');

  }));

  it('should change title of application and use the string from the translation provider', async(() => {

    translate.use('en');
    // this will request the translation from the backend because we use a static files loader for TranslateService
    fixture = TestBed.createComponent(AppComponent);

    // mock response after the xhr request, otherwise it will be undefined
    mockBackendResponse(connection, '{"appTitle": "CrownPeak Component Library"}');

    expect(title.getTitle()).toEqual('CrownPeak Component Library');

  }));

  it('should toggle the menu', () => {

    let expectedEvent: Event;
    appComponent.toggleMenu(expectedEvent);

    expect(appComponent.sidebarComponent.mobileMenuActive).toEqual(true);

  });

});
