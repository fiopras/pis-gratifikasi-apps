import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GratificationPage } from './gratification.page';

const routes: Routes = [
  {
    path: '',
    component: GratificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GratificationPageRoutingModule {}
