import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaddysResultPageRoutingModule } from './maddys-result-routing.module';

import { MaddysResultPage } from './maddys-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaddysResultPageRoutingModule
  ],
  declarations: [MaddysResultPage]
})
export class MaddysResultPageModule {}
