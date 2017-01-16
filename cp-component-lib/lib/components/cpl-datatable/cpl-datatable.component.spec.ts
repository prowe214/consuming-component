/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, PaginatorModule } from 'primeng/primeng';

import { CplDatatableComponent } from './cpl-datatable.component';

import { CsvExportService } from './../../services/csv-export/csv-export.service';
import { PdfExportService } from './../../services/pdf-export/pdf-export.service';

describe('CplDatatableComponent', () => {
  let component: CplDatatableComponent;
  let fixture: ComponentFixture<CplDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CplDatatableComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        PaginatorModule
      ],
      providers: [
        PdfExportService,
        CsvExportService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CplDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
