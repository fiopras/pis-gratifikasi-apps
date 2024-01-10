import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoiDetailPageRoutingModule } from './coi-detail-routing.module';

import { CoiDetailPage } from './coi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CoiDetailPageRoutingModule
  ],
  declarations: [CoiDetailPage]
})
export class CoiDetailPageModule {}
