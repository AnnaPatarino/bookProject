import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnterPage } from './enter.page';
import { HomePageRoutingModule } from './enter-routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule, HomePageRoutingModule],
  declarations: [EnterPage],
  exports: [EnterPage]
})
export class EnterPageModule {}
