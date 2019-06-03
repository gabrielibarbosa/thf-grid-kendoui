import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridFilterComponent } from './grid-filter.component';
import { GridFilterRoutingModule } from './grid-filter-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [GridFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    GridModule,
    GridFilterRoutingModule
  ]
})
export class GridFilterModule { }
