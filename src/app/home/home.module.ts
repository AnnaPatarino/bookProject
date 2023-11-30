import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BookComponentModule } from '../book/book.module';
import { EditComponentModule } from '../edit/edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookComponentModule,
    EditComponentModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
