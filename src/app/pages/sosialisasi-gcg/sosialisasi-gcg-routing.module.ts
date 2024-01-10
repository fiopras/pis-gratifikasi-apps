import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosialisasiGcgPage } from './sosialisasi-gcg.page';
import { VideoCoiComponent } from './video-coi/video-coi.component';
import { VideoSosialisasiGcgComponent } from './video-sosialisasi-gcg/video-sosialisasi-gcg.component';
import { VideoGratifikasiComponent } from './video-gratifikasi/video-gratifikasi.component';
import { VideoCocComponent } from './video-coc/video-coc.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: SosialisasiGcgPage
  },
  {
    path: 'video-coi',
    component: VideoCoiComponent
  },
  {
    path: 'video-sosialisasi-gcg',
    component: VideoSosialisasiGcgComponent
  },
  {
    path: 'video-gratifikasi',
    component: VideoGratifikasiComponent
  },
  {
    path: 'video-coc',
    component: VideoCocComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SosialisasiGcgPageRoutingModule {}
