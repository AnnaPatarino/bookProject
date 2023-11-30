import { Component, EventEmitter, Input, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';


import { DataService, Book } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getBooks(): Book[] {
    return this.data.getBooks();
  }

}
