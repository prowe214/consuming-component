import { CplDataTableColumnDefs } from './../../components/cpl-datatable/models';
import { Injectable } from '@angular/core';

export interface CplCsvExportBase {
  field: string;
  header: string;
}

@Injectable()
export class CsvExportService {

  // Download CSV
  downloadCsv(data: any[], columnDefs: CplDataTableColumnDefs[], filename: string) {
    let csvData = this.generateCsv(data, columnDefs);
    let a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename + '.csv';
    // If you will any error in a.download then dont worry about this.
    a.click();
    return true;
  }
  // convert Json to CSV data
  generateCsv(data: any[], columnDefs: CplCsvExportBase[]) {
    const arr = this.parseObjectsToArrays(data);
    return this.parseArrayToCsv(arr, columnDefs);
  }

  parseObjectsToArrays(data: any[]) {
    const keys = Object.keys(data[0]);
    let grid = [];
    data.forEach(record => {
      let row = [];
      keys.forEach(key => {
        row.push(record[key].toString());
      });
      grid.push(row);
    });

    return grid;
  }

  parseArrayToCsv(arr: any[], columnDefs: CplDataTableColumnDefs[]) {
    let str = '';
    let row = '';

    for (let i = 0; i < columnDefs.length; i++) {
      // Now convert each value to string and comma-seprated
      row += columnDefs[i].header + ',';
    }
    row = row.slice(0, -1);
    // append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < arr.length; i++) {
      let line = '';
      for (let index = 0; index < columnDefs.length; index++) {
        if (line !== '') {
           line += ',';
        }
        line += '"' + arr[i][index] + '"';

      }
      str += line + '\r\n';
    }

    return str;

  }
}
