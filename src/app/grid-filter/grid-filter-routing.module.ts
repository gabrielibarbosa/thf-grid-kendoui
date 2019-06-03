import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridFilterComponent } from './grid-filter.component';

const routes: Routes = [  { path: '', component: GridFilterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridFilterRoutingModule { }
