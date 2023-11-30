import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookComponent } from './book.component';
import { TitleColorDirective } from '../directive/title-color.directive';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [BookComponent, TitleColorDirective],
  exports: [BookComponent]
})
export class BookComponentModule {}
