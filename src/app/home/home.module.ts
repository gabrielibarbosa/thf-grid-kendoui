import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ThfModule } from '@totvs/thf-ui';
import { ThfKendoModule } from '@totvs/thf-kendo';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ThfModule,
    ThfKendoModule,
  ]
})
export class HomeModule { }
