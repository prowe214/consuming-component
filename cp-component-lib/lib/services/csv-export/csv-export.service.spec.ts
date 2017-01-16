import { RandomService } from './../../../app/core/utility/random.service';

import { TestBed } from '@angular/core/testing';
import { CsvExportService, CplCsvExportBase } from './csv-export.service';

describe('CsvExportService', () => {
  let random: RandomService = new RandomService();
  let service: CsvExportService = new CsvExportService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CsvExportService,
        RandomService
      ]
    });
  });

  const data = random.getRandomDataGrid(2, 4);
  const keys = Object.keys(data[0]);
  const getColumnDefs = () => {
    let defs: CplCsvExportBase[] = [];
    for (let i = 0; i < keys.length; i++) {
      defs.push({
        field: keys[i],
        header: 'Test header Property' // would be obj.header
      });
    }
    return defs;
  };
  const columnDefs = getColumnDefs();

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  describe('generateCsv()', () => {
    // should take an array of objects and return a comma-separated string
    it('should return a string', () => {
      const result = service.generateCsv(data, columnDefs);

      expect(typeof result).toBe('string');
    });

    it('should return only relevant data', () => {
      data[1].badProperty = 'this is a bad property';
      const result = service.generateCsv(data, columnDefs);
      const includesBadProperty = result.includes('bad');

      expect(includesBadProperty).toBe(false);
    });
  });

  describe('downloadCsv', () => {
    it('should execute', () => {
      let csvDownloadExecuted = service.downloadCsv(data, columnDefs, 'Test Filename');

      expect(csvDownloadExecuted)
        .toBe(true);
    });
  });
});
