import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimPageRoutingModule } from './fim-routing.module';

import { FimPage } from './fim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimPageRoutingModule
  ],
  declarations: [FimPage]
})
export class FimPageModule {}
