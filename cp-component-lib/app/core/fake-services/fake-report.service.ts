import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { RandomService } from '../../core/utility/random.service';
import { CplFileSizePipe } from './../../../lib/pipes/file-size/file-size.pipe';
import { CplLazyLoadEvent, CplDataTableConfig } from './../../../lib/components/cpl-datatable/models';

export interface CplExampleData {
  date?: Date | number | string;
  name?: string;
  assetId?: number;
  transferSize?: number | string;
}

export interface CplExampleApiRequest {
  currentPage: number;
  label: string;
  pageSize: number;
  searchTerm: string;
  sortOptions: {
    isAscending: boolean;
    sortOption: any;
  };
}

export interface CplExampleApiResponse {
  apiData: CplExampleData[];
  totalCount: number;
  currentPage?: number;
  pageSize?: number;
  searchTerm?: string;
  sortOptions: {
    isAscending: boolean;
    sortOption: any;
  };
}

@Injectable()
export class FakeReportService {

  // This is to model the API calls in V3 that return page size data with a total count
  private lotsOfData: CplExampleData[] = this.getRandomData();

  // This is to mimic the API calls in V3 that always return 50 results
  private setAmountOfData: CplExampleData[] = this.getRandomData2();

  constructor(private random: RandomService,
              private datePipe: DatePipe,
              private fileSizePipe: CplFileSizePipe) { }

  getData(): Promise<CplExampleApiResponse> {
    let filteredData = this.transformData(this.setAmountOfData);
    return Promise.resolve(
            this.buildReportData(filteredData, this.setAmountOfData.length)
    );
  }

  getLazyData(requestData: CplExampleApiRequest): Promise<CplExampleApiResponse> {
    // There would be a call to the API to populate this.setAmountOfData
    let transformedData = this.transformData(this.lotsOfData);

    //  The rest of this is here to mimic the server side api work
    //  basically we are just manipulating the array to pretend that the server is returning
    //  the correct amount of data

    const firstRow = (requestData.currentPage - 1) * requestData.pageSize;
    const numRowsToGet = requestData.pageSize;

    return Promise.resolve(
            this.buildReportData(transformedData.slice(firstRow, (firstRow + numRowsToGet)), this.lotsOfData.length)
      );
  }

  buildApiRequest(config: CplDataTableConfig<CplExampleData>, $event: CplLazyLoadEvent): CplExampleApiRequest {
    let apiRequest = {
      currentPage: 1,
      label: '',
      pageSize: config.numRows,
      searchTerm: '',
      sortOptions: {
        isAscending: true,
        sortOption: ''
      }
    };
    if ($event == null) {
      return apiRequest;
    }

    apiRequest.currentPage = ($event.first + $event.rows) / $event.rows;
    apiRequest.searchTerm = $event.globalFilter;

    return apiRequest;
  }

  getRandomData(): any {
    const numRows = this.random.getRandomInt(100, 200);
    return this.buildRandomData(numRows);
  }

  getRandomData2(): any {
    return this.buildRandomData(100);
  }

  transformData(data): CplExampleData[] {
    let transformedData = data.map( (row: CplExampleData) => {
      row.date = this.datePipe.transform(row.date, 'short');
      if (typeof row.transferSize === 'number') {
        row.transferSize = this.fileSizePipe.transform(row.transferSize, 0);
      } else if
      (typeof row.transferSize === 'string') {
        row.transferSize = this.fileSizePipe.transformString(row.transferSize, 0);
      }
      return row;
    });
    return transformedData;
  }

  buildRow() {
    let row = {
      assetId: this.random.getRandomInt(1, 1000000),
      date: this.random.getRandomDate(),
      name: this.random.getRandomName(),
      transferSize: this.random.getRandomInt(0, 10000000000000)
    };
    return row;
  }

  buildRandomData(numRows): CplExampleData[] {
    let data = [];
    for (let i = 1; i < numRows; i++) {
      data.push(this.buildRow());
    }
    return data;
  }

  // reportData.length != totalCount in the case of serverside paging
  private buildReportData(reportData: CplExampleData[], totalCount: number) {
    return {
        apiData: reportData,
        totalCount: totalCount
      };
  }

}
