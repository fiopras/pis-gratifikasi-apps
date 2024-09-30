import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocPageRoutingModule } from './coc-routing.module';

import { CocPage } from './coc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CocPageRoutingModule
  ],
  declarations: [CocPage]
})
export class CocPageModule {}
