import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Book, DataService } from '../services/data.service';
import { bookCounterService } from '../services/bookCounter.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  private platform = inject(Platform);
  @Input() book?: Book;
  @Input() selectedBook = new EventEmitter<number>();
  @ViewChild('check', {read: ElementRef}) check: ElementRef;
  count = 0;

  constructor(private readonly serviceBook: DataService,
              private bookCounter: bookCounterService){}
  isIos() {
    return this.platform.is('ios')
  }

counter(event: CustomEvent){
  if(event.detail.checked === true){
    this.bookCounter.incrementCounter();
  }else if(event.detail.checked === false){
    this.bookCounter.decrementCounter();
  }
  
}

  delete(id: number){
    this.serviceBook.delete(id);
  }


//controllo id per non duplicarsi
}
