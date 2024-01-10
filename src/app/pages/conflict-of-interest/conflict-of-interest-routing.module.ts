import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConflictOfInterestPage } from './conflict-of-interest.page';

const routes: Routes = [
  {
    path: '',
    component: ConflictOfInterestPage
  },
  {
    path: 'coi-detail',
    loadChildren: () => import('./coi-detail/coi-detail.module').then( m => m.CoiDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConflictOfInterestPageRoutingModule {}
