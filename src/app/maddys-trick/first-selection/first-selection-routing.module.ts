import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstSelectionPage } from './first-selection.page';

const routes: Routes = [
  {
    path: '',
    component: FirstSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstSelectionPageRoutingModule {}
