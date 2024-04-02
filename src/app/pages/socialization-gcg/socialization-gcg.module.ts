import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocializationGcgPageRoutingModule } from './socialization-gcg-routing.module';

import { SocializationGcgPage } from './socialization-gcg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocializationGcgPageRoutingModule
  ],
  declarations: [SocializationGcgPage]
})
export class SocializationGcgPageModule {}
