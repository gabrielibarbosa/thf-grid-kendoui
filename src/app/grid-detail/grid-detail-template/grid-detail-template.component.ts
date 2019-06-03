import { Component, OnInit } from '@angular/core';
import { products } from './proudcts';
import { GroupDescriptor, DataResult, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid-detail-template',
  templateUrl: './grid-detail-template.component.html',
  styleUrls: ['./grid-detail-template.component.css']
})
export class GridDetailTemplateComponent implements OnInit {

  public groups: GroupDescriptor[] = [{ field: 'Category.CategoryName' }];
  public gridView: DataResult;
  
  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadProducts();
}
private loadProducts(): void {
  this.gridView = process(products, { group: this.groups });
}
  variavel=[
    {
      bla1: true,
      bla2: false
    }
  ]

  constructor() { }

  ngOnInit() {
    this.loadProducts();
  }

}
