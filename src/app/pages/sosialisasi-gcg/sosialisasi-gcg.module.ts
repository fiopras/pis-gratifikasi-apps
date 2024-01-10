import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosialisasiGcgPageRoutingModule } from './sosialisasi-gcg-routing.module';

import { SosialisasiGcgPage } from './sosialisasi-gcg.page';
import { VideoCoiComponent } from './video-coi/video-coi.component';
import { VideoSosialisasiGcgComponent } from './video-sosialisasi-gcg/video-sosialisasi-gcg.component';
import { VideoGratifikasiComponent } from './video-gratifikasi/video-gratifikasi.component';
import { VideoCocComponent } from './video-coc/video-coc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosialisasiGcgPageRoutingModule
  ],
  declarations: [
    SosialisasiGcgPage, 
    VideoCoiComponent, 
    VideoSosialisasiGcgComponent, 
    VideoGratifikasiComponent,
    VideoCocComponent
  ]
})
export class SosialisasiGcgPageModule {}
