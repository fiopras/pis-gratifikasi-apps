import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionTenPage } from './question-ten.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionTenPageRoutingModule {}
