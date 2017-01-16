import { CplDataTableConfig, CplLazyLoadEvent } from './models';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PdfExportService } from '../../services/pdf-export/pdf-export.service';
import { CsvExportService } from '../../services/csv-export/csv-export.service';

@Component({
  selector: 'cpl-datatable',
  styleUrls: ['./cpl-datatable.component.less'],
  templateUrl: './cpl-datatable.component.html'
})
export class CplDatatableComponent implements OnInit {

  @Input() config: CplDataTableConfig<any> = {
      dataResponse: {
        apiData: [],
        totalCount: 0
      },
      lazyLoaded: false,
      numRows: 0
    };
  @Output() rowDblClicked: EventEmitter<any> = new EventEmitter<string>();
  @Output() dataRequestedLazy: EventEmitter<CplLazyLoadEvent> = new EventEmitter<CplLazyLoadEvent>();

  private globalFilter: string = '';

  constructor(
    private pdfExportService: PdfExportService,
    private csvExportService: CsvExportService
  ) { }

  rowDblClickedEvent($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

  loadData($event) {
    $event.globalFilter = this.globalFilter;
    this.dataRequestedLazy.emit($event);
  }

  exportToPdf() {
    this.pdfExportService.generatePdf(this.getGridData(), this.config.fields, this.config.title);
  }

  exportToCsv() {
    this.csvExportService.downloadCsv(this.getGridData(), this.config.fields, this.config.title);
  }

  ngOnInit() {

  }

  private getGridData(): any[] {
    return this.config.dataResponse.apiData;
  }

}
