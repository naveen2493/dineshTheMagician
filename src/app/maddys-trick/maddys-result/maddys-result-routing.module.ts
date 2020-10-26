import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaddysResultPage } from './maddys-result.page';

const routes: Routes = [
  {
    path: '',
    component: MaddysResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaddysResultPageRoutingModule {}
