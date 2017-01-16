import { FakeReportService } from './../../core/fake-services/fake-report.service';
import { RandomService } from './../../core/utility/random.service';
import { CsvExportService } from './../../../lib/services/csv-export/csv-export.service';
import { Component, OnInit } from '@angular/core';

@Component({
  providers: [CsvExportService],
  selector: 'cpl-csv-service-page',
  styleUrls: ['./csv-service-page.component.less'],
  templateUrl: './csv-service-page.component.html'
})
export class CsvServicePageComponent implements OnInit {

  private data = this.getData();
  private columnDefs = this.getColumnDefs(this.data);

  constructor(private generate: FakeReportService,
    private random: RandomService,
    private csvExport: CsvExportService) { }

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

  exportToCsv() {
    this.csvExport.downloadCsv(this.data, this.columnDefs, 'Test Title');
  }

}
