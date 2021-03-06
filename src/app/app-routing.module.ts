import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'grid-detail', loadChildren: './grid-detail/grid-detail.module#GridDetailModule' },
  { path: 'grid-filter', loadChildren: './grid-filter/grid-filter.module#GridFilterModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
