import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent   {

formNewBook: FormGroup | undefined;

  constructor(private readonly _bookService : DataService) {
    this._setForm()
   }

  // ngOnInit() {
  
  //   }
  
  private _setForm(): void {
    const newId = this._bookService
    this.formNewBook = new FormGroup({
      title: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      description: new FormControl(""),
      publicationYear: new FormControl(""),
      id: new FormControl(newId, Validators.required)
});
  }
}
