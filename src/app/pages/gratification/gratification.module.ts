import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GratificationPageRoutingModule } from './gratification-routing.module';

import { GratificationPage } from './gratification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GratificationPageRoutingModule
  ],
  declarations: [GratificationPage]
})
export class GratificationPageModule {}
