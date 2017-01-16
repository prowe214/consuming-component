import { Component, OnInit, ViewChild } from '@angular/core';

import { FakeReportService, CplExampleData } from './../../core/fake-services/fake-report.service';

import { CplDataTableConfig, CplDatatableComponent } from './../../../lib/components/cpl-datatable';

@Component({
  selector: 'cpl-datatable-page',
  styleUrls: ['./datatable-page.component.less'],
  templateUrl: './datatable-page.component.html'
})
export class DatatablePageComponent implements OnInit {

  config: CplDataTableConfig<CplExampleData>;

  @ViewChild(CplDatatableComponent)
  private gridComponent: CplDatatableComponent;

  constructor(private reportDataService: FakeReportService) { }

  ngOnInit(): void {
    this.config = this.buildReportConfig();
    this.requestServiceData();
  }

  requestServiceData() {
    this.reportDataService.getData().then((data) => {
      Object.assign(this.config.dataResponse, data);
    });
  }

  exportToPdf(): void {
    this.gridComponent.exportToPdf();
  }

  exportToCsv(): void {
    this.gridComponent.exportToCsv();
  }

  private buildReportConfig(): CplDataTableConfig<CplExampleData> {
    return {
      dataResponse: {
        apiData: [],
        totalCount: 0
      },
      fields: [
        {
          field: 'date',
          header: 'Date',
          styleClass: 'dateColumn',
          type: 'date',
        },
        {
          field: 'name',
          header: 'Name',
          styleClass: '',
          type: 'string'
        },
        {
          field: 'assetId',
          header: 'ID',
          styleClass: 'right',
          type: 'number'
        },
        {
          field: 'transferSize',
          header: 'Size',
          styleClass: 'right',
          type: 'number'
        },
      ],
      lazyLoaded: false,
      numRows: 10,
      summary: 'This is the Test-Report summary',
      title: 'Test Report'
    };
  }

}
