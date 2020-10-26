import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScratchCardPage } from './scratch-card.page';

const routes: Routes = [
  {
    path: '',
    component: ScratchCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScratchCardPageRoutingModule {}
