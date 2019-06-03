import { Component, OnInit } from '@angular/core';
import { GroupDescriptor, DataResult, process, SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { products, sampleProducts } from '../grid-detail/grid-detail-template/proudcts';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.css']
})
export class GridFilterComponent implements OnInit {
  public state: State = {
    skip: 0,
    take: 5
  };
  public hiddenColumns: Array<string> = [];
  public multiple = false;
  public allowUnsort = true;
  public sort: Array<SortDescriptor> = [];

  public groups: Array<GroupDescriptor> = [{ field: 'Category.CategoryName' }];

  public gridView: DataResult;
  public columns: Array<string> = [
    'CompanyName', 'ContactName', 'ContactTitle'
  ];

  public ngOnInit(): void {
    this.loadProducts();
  }

  public groupChange(groups: Array<GroupDescriptor>): void {
    this.groups = groups;
    this.loadProducts();
  }

  public sortChange(sort: Array<SortDescriptor>): void {
    this.sort = sort;
    this.sortProducts();
  }

  private loadProducts(): void {
    this.gridView = process(products, { group: this.groups });
  }

  private sortProducts() {
    this.gridView = {
      data: orderBy(products, this.sort),
      total: products.length
    };
  }

  public hideColumn(field: string): void {
    this.hiddenColumns.push(field);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridView = process(sampleProducts, this.state);
}
}
