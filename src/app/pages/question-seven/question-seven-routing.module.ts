import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionSevenPage } from './question-seven.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionSevenPageRoutingModule {}
