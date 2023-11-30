import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book, DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent  implements OnInit {

  formBook: FormGroup | undefined;
  book : Book | undefined;
  id: number | undefined

  constructor(
    private readonly _data: DataService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location) {
      

   }
  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.book = this._data.getBookById(this.id);
      this._setForm();
    });
  }

  private _setForm(): void {
    this.formBook = new FormGroup({
      title: new FormControl(this.book!.title),
      author: new FormControl(this.book!.author),
      description: new FormControl(this.book!.description),
      publicationYear: new FormControl(this.book!.publicationYear),
      id: new FormControl(this.book!.id)

    })}

    submitForm(){
      if (this.formBook?.valid){
        const updatedBook: Book = this.formBook.value
        this._data.update(updatedBook)
        this._location.back();
      }
  }

}

