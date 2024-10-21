import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionNinePage } from './question-nine.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionNinePageRoutingModule {}
