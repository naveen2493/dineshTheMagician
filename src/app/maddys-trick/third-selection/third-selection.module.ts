import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdSelectionPageRoutingModule } from './third-selection-routing.module';

import { ThirdSelectionPage } from './third-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdSelectionPageRoutingModule
  ],
  declarations: [ThirdSelectionPage]
})
export class ThirdSelectionPageModule {}
