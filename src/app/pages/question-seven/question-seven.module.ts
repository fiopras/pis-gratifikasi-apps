import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionSevenPageRoutingModule } from './question-seven-routing.module';

import { QuestionSevenPage } from './question-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionSevenPageRoutingModule
  ],
  declarations: [QuestionSevenPage]
})
export class QuestionSevenPageModule {}
