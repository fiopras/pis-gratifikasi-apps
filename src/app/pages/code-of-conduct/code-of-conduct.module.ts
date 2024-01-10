import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeOfConductPageRoutingModule } from './code-of-conduct-routing.module';

import { CodeOfConductPage } from './code-of-conduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CodeOfConductPageRoutingModule
  ],
  declarations: [CodeOfConductPage]
})
export class CodeOfConductPageModule {}
