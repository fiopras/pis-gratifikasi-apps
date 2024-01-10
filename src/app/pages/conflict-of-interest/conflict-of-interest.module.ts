import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConflictOfInterestPageRoutingModule } from './conflict-of-interest-routing.module';

import { ConflictOfInterestPage } from './conflict-of-interest.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConflictOfInterestPageRoutingModule,
  ],
  declarations: [ConflictOfInterestPage]
})
export class ConflictOfInterestPageModule {}
