/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PdfExportService } from './pdf-export.service';
import { RandomService } from './../../../app/core/utility/random.service';

describe('PdfExportService', () => {
  let random: RandomService;
  let service: PdfExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PdfExportService,
        RandomService
      ]
    });
  });

  let getColumnDefs = (objArray) => {
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
  };

  random = new RandomService();
  service = new PdfExportService();

  const data = random.getRandomDataGrid();
  let columnDefs = getColumnDefs(data);

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  describe('buildHeaderDef()', () => {

    const headerDefs = service.buildHeaderDef(columnDefs);
    const relevantKeys = ['alignment', 'style', 'text'];
    const hasOnlyRelevantKeys = () => {
        for (let i = 0; i < headerDefs.length; i++) {
          const headerKeys = Object.keys(headerDefs[i]);
          for (let j = 0; j < headerKeys.length; j++) {
            if (headerKeys[j] !== relevantKeys[j]) {
              return false;
            }
          }
        }
        return true;
      };

    it('should map header property of objects to text property of header', () => {
      const textMatchesHeader = (() => {
        for (let i = 0; i < headerDefs.length; i++) {
          if (headerDefs[i].text !== columnDefs[i].header) {
            return false;
          }
        }
        return true;
      })();

      expect(textMatchesHeader).toBe(true);
    });

    it('should set style property as "tableHeader"', () => {
      const stylePropsSet = (() => {
        for (let i = 0; i < headerDefs.length; i++) {
          if (headerDefs[i].style !== 'tableHeader') {
            return false;
          }
        }
        return true;
      })();

      expect(stylePropsSet).toBe(true);
    });

    it('should remove all irrelevant properties', () => {
      const onlyRelevantKeys = hasOnlyRelevantKeys();

      expect(onlyRelevantKeys).toBe(true);
    });

    it('should not reset alignment if there is a styleClass property', () => {
      const newHeaderDefs = service.buildHeaderDef(columnDefs, 'right');

      const expected = 'Test styleClass Property';
      const actual = newHeaderDefs[0].alignment;

      expect(actual).toBe(expected);
    });

    it('should set alignment if there is no styleClass property', () => {
      columnDefs[0].styleClass = null;
      const newHeaderDefs = service.buildHeaderDef(columnDefs, 'right');

      const expected = 'right';
      const actual = newHeaderDefs[0].alignment;

      expect(actual).toBe(expected);
    });
  });

  describe('buildDataDef()', () => {

    it('should not add or remove any objects', () => {
      const dataDef = service.buildDataDef(data, columnDefs);

      expect(dataDef.length).toBe(data.length);
    });

    it('should align right if data is number', () => {
      columnDefs[0].type = 'number';
      const dataDef = service.buildDataDef(data, columnDefs);
      const alignNumbersToRight = (() => {
        for (let i = 0; i < dataDef.length; i++) {
          if (dataDef[i][0].alignment !== 'right') {
            console.log('THE CULPRIT:', dataDef[i][0].alignment);
            return false;
          }
        }
        return true;
      })();

      expect(alignNumbersToRight).toBe(true);
    });
  });

  describe('buildDocDefinition()', () => {
    it('should successfully return an object', () => {
      expect(typeof service.buildDocDefinition(data, columnDefs, 'Test Title'))
        .toBe('object');
    });
  });

  describe('generatePdf()', () => {
    it('should execute', () => {
      const pdfGenerated = service.generatePdf(data, columnDefs, 'Test Title');

      expect(pdfGenerated).toBe(true);
    });
  });
});
