import { FakeReportService } from './../../core/fake-services/fake-report.service';
import { RandomService } from './../../core/utility/random.service';
import { Component, OnInit } from '@angular/core';

import { PdfExportService } from './../../../lib/services/pdf-export/pdf-export.service';

@Component({
  providers: [
    FakeReportService,
    PdfExportService,
    RandomService
    ],
  selector: 'cpl-pdf-service-page',
  styleUrls: ['./pdf-service-page.component.less'],
  templateUrl: './pdf-service-page.component.html'
})
export class PdfServicePageComponent implements OnInit {

  private data = this.getData();
  private columnDefs = this.getColumnDefs(this.data);

  constructor(private generate: FakeReportService,
    private random: RandomService,
    private pdfExport: PdfExportService) { }

  ngOnInit() {
  }

  getData() {
    return this.random.getRandomDataGrid();
  }

  getColumnDefs(objArray: any[]) {
    const keys = Object.keys(objArray[0]);
    let result = [];
    for (let i = 0; i < keys.length; i++) {
      result.push({
        field: keys[i],
        header: 'Test header Property',
        styleClass: 'Test styleClass Property',
        type: 'Test Type'
        }
      );
    }
    return result;
  }

  exportToPdf() {
    this.pdfExport.generatePdf(this.data, this.columnDefs, 'Test Title');
  }

}
