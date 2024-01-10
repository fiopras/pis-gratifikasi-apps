import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GratifikasiPage } from './gratifikasi.page';

const routes: Routes = [
  {
    path: '',
    component: GratifikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GratifikasiPageRoutingModule {}
