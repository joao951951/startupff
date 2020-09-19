import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimPage } from './fim.page';

const routes: Routes = [
  {
    path: '',
    component: FimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimPageRoutingModule {}
