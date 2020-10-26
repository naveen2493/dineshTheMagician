import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdSelectionPage } from './third-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdSelectionPageRoutingModule {}
