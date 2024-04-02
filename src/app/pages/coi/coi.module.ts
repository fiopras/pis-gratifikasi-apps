import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoiPageRoutingModule } from './coi-routing.module';

import { CoiPage } from './coi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoiPageRoutingModule
  ],
  declarations: [CoiPage]
})
export class CoiPageModule {}
