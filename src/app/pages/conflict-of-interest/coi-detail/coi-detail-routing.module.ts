import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiDetailPage } from './coi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiDetailPageRoutingModule {}
