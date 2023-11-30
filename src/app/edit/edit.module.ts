import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [EditComponent],
  exports: [EditComponent]
})
export class EditComponentModule {}
