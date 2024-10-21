import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionEightPageRoutingModule } from './question-eight-routing.module';

import { QuestionEightPage } from './question-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionEightPageRoutingModule
  ],
  declarations: [QuestionEightPage]
})
export class QuestionEightPageModule {}
