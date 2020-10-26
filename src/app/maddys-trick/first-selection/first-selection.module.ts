import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstSelectionPageRoutingModule } from './first-selection-routing.module';

import { FirstSelectionPage } from './first-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstSelectionPageRoutingModule
  ],
  declarations: [FirstSelectionPage]
})
export class FirstSelectionPageModule {}
