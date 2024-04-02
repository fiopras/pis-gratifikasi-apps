import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoiPage } from './coi.page';

const routes: Routes = [
  {
    path: '',
    component: CoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoiPageRoutingModule {}
