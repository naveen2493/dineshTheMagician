import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaddysTrickPage } from './maddys-trick.page';

const routes: Routes = [
  {
    path: '',
    component: MaddysTrickPage
  },
  {
    path: 'second-selection',
    loadChildren: () => import('./second-selection/second-selection.module').then( m => m.SecondSelectionPageModule)
  },
  {
    path: 'first-selection',
    loadChildren: () => import('./first-selection/first-selection.module').then( m => m.FirstSelectionPageModule)
  },
  {
    path: 'third-selection',
    loadChildren: () => import('./third-selection/third-selection.module').then( m => m.ThirdSelectionPageModule)
  },
  {
    path: 'maddys-result',
    loadChildren: () => import('./maddys-result/maddys-result.module').then( m => m.MaddysResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadisTrickPageRoutingModule {}
