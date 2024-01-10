import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPage } from './landing.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports: [RouterModule],
  
})
export class LandingPageRoutingModule {}
