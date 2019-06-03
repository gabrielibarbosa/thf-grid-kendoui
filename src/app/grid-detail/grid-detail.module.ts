import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridDetailRoutingModule } from './grid-detail-routing.module';
import { GridDetailTemplateComponent } from './grid-detail-template/grid-detail-template.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ThfModule } from '@totvs/thf-ui';
import { ThfKendoModule } from '@totvs/thf-kendo';

@NgModule({
  declarations: [GridDetailTemplateComponent],
  imports: [ 
    CommonModule,
    GridDetailRoutingModule,
    GridModule,
    ThfModule,
    ThfKendoModule
  ]
})
export class GridDetailModule { }
