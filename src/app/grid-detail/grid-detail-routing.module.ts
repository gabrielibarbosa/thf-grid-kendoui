import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridDetailTemplateComponent } from './grid-detail-template/grid-detail-template.component';

const routes: Routes = [  { path: '', component: GridDetailTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridDetailRoutingModule { }
