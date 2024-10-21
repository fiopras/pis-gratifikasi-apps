import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionTenPageRoutingModule } from './question-ten-routing.module';

import { QuestionTenPage } from './question-ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuestionTenPageRoutingModule
  ],
  declarations: [QuestionTenPage]
})
export class QuestionTenPageModule {}
