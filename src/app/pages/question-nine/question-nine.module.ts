import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionNinePageRoutingModule } from './question-nine-routing.module';

import { QuestionNinePage } from './question-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionNinePageRoutingModule
  ],
  declarations: [QuestionNinePage]
})
export class QuestionNinePageModule {}
