import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondSelectionPageRoutingModule } from './second-selection-routing.module';

import { SecondSelectionPage } from './second-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondSelectionPageRoutingModule
  ],
  declarations: [SecondSelectionPage]
})
export class SecondSelectionPageModule {}
