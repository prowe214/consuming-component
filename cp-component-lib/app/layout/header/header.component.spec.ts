/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, click } from '../../../testing/index.spec';

import { HeaderComponent } from './header.component';

let component: HeaderComponent;
let expectedEvent: MouseEvent;
let fixture: ComponentFixture<HeaderComponent>;

describe('HeaderComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    let mouseEvent: MouseEvent;
    component.menuToggleEvent.subscribe((event: MouseEvent) => mouseEvent = event);

    component.toggleMenu(mouseEvent);
    expect(mouseEvent).toBe(expectedEvent);
  });
});
