import { Component, OnInit } from '@angular/core';
import { products } from './proudcts';

@Component({
  selector: 'app-grid-detail-template',
  templateUrl: './grid-detail-template.component.html',
  styleUrls: ['./grid-detail-template.component.css']
})
export class GridDetailTemplateComponent implements OnInit {

  public gridView: any[] = products;
  variavel=[
    {
      bla1: true,
      bla2: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
