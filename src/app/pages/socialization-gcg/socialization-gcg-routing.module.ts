import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocializationGcgPage } from './socialization-gcg.page';

const routes: Routes = [
  {
    path: '',
    component: SocializationGcgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocializationGcgPageRoutingModule {}
