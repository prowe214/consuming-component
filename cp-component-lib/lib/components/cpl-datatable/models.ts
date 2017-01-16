import { LazyLoadEvent } from 'primeng/primeng';

export interface CplDataTableConfig<T> {
  title?: string;
  summary?: string;
  lazyLoaded: boolean;
  numRows: number;
  fields?: CplDataTableColumnDefs[];
  dataResponse: CplLazyDataResponse<T>;
}

export interface CplLazyDataResponse<T> {
  apiData: T[];
  totalCount: number;
  currentPage?: number;
  pageSize?: number;
  searchTerm?: string;
  sortOptions?: CplSortOptions;
}

export interface CplLazyLoadEvent extends LazyLoadEvent {
  globalFilter: string;
}

export interface CplSortOptions {
  isAscending: boolean;
  sortOption: string;
}

export interface CplDataTableColumnDefs {
  // cellClass?: string;
  // cellFilter?: string;
  // cellTemplate?: string;
  // cellTooltip?: string;
  // colspan?: string;
  // editable?: boolean;
  // expander?: boolean;
  field: string;
  // filter?: boolean;
  // filterMatchMode?: string;
  header: string;
  // headerTooltip?: string;
  // hidden?: string;
  // maxWidth?: number;
  // minWidth?: number;
  // rowspan?: string;
  // selectionMode?: string;
  // sortable?: any;
  // sortFunction?: any;
  styleClass?: string;
  type?: CplTypeObject;
}

export interface CplTypeObject {
  date?: Date;
  number?: number;
  string?: string;
}

export type DateType = Date | number | string;
