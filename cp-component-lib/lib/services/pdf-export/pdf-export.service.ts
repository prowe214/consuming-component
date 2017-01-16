import { CplDataTableColumnDefs } from './../../components/cpl-datatable/models';
import { Injectable } from '@angular/core';
import 'pdfmake-client/pdfmake/build/pdfmake';
import 'pdfmake-client/pdfmake/build/vfs_fonts';

@Injectable()
export class PdfExportService {

  generatePdf(records: any[], columnDefs: CplDataTableColumnDefs[], title: string) {
    let docDefinition = this.buildDocDefinition(records, columnDefs, title);
    pdfMake.createPdf(docDefinition).open();
    return true;
  }

  buildDocDefinition(records: any[], columnDefs: CplDataTableColumnDefs[], title: string) {
    let FIELDS = this.buildHeaderDef(columnDefs);
    let DATA = this.buildDataDef(records, columnDefs);

    DATA.unshift(FIELDS);

    const result = {
      'content': [
        {
          'alignment': 'justify',
          'columns': [
            {
              'alignment': 'left',
              'style': 'headerStyle',
              'text': `${title}`,
            }
          ]
        },
        {
          'layout': 'lightHorizontalLines',
          'style': 'tableStyle',
          'table': {
            'body': DATA,
            'headerRows': 1,
            'widths': FIELDS.map(() => '*'),
          }
        }
      ],
      'defaultStyle': {
        'fontSize': 11
      },
      'header': null,
      'pageOrientation': 'landscape',
      'pageSize': 'LETTER',
      'styles': {
        'defaultStyle': {
          'alignment': 'center',
          'bold': true,
          'columnGap': 20,
          'fontSize': 8,
        },
        'footerStyle': {
          'alignment': 'center',
          'bold': true,
          'fontSize': 8,
        },
        'headerStyle': {
          'alignment': 'center',
          'bold': true,
          'fontSize': 14,
          'margin': [0, 5, 0, 0]
        },
        'tableHeader': {
          'bold': true,
          'fontSize': 10,
        },
        'tableStyle': {
          'bold': true,
          'fontSize': 8,
          'margin': [0, 0, 0, 0]
        },

      },

    };

    return result;
  }

  buildHeaderDef(columnDefs: CplDataTableColumnDefs[], alignment?: string) {
    // Iterate through each field's keys
    // Return the value of each key
    return columnDefs.map(field => {
      return { alignment: field.styleClass || alignment, style: 'tableHeader', text: field.header };
    });
  }

  buildDataDef(records: any[], columnDefs: CplDataTableColumnDefs[]) {
    // Iterate through each record's keys
    // Return the value of each key
    let results: any[] = [];
    const keys = columnDefs.map(col => col.field);

    for (let i = 0; i < records.length; i++) {
      let cellData = [];
      for (let j = 0; j < keys.length; j++) {
        const currentProperty = keys[j];
        const currentValue = records[i][currentProperty];
        if (columnDefs[j].type === 'number') {
          let text = currentValue.toString();
          cellData.push({ alignment: 'right', text: text });
        } else {
          cellData.push(currentValue);
        }
      }
      results.push(cellData);
    }
    return results;
  }

}
