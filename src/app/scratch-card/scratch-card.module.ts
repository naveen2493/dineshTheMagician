import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScratchCardPageRoutingModule } from './scratch-card-routing.module';

import { ScratchCardPage } from './scratch-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScratchCardPageRoutingModule
  ],
  declarations: [ScratchCardPage]
})
export class ScratchCardPageModule {}
