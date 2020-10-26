import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadisTrickPageRoutingModule } from './maddys-trick-routing.module';

import { MaddysTrickPage } from './maddys-trick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadisTrickPageRoutingModule
  ],
  declarations: [MaddysTrickPage]
})
export class MadisTrickPageModule {}
