import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GratifikasiPageRoutingModule } from './gratifikasi-routing.module';

import { GratifikasiPage } from './gratifikasi.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    GratifikasiPageRoutingModule
  ],
  declarations: [GratifikasiPage]
})
export class GratifikasiPageModule {}
