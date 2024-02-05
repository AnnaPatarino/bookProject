import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, ViewChild } from '@angular/core';
import { CheckboxChangeEventDetail, Platform } from '@ionic/angular';
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
  @ViewChild('title', {read: ElementRef}) title: ElementRef;
  @Input() selectedBook = new EventEmitter<number>();
  @ViewChild('check', {read: ElementRef}) check: ElementRef;
  count = 0;
  showBadgeRead = false;
  showbadgeReading = false;
  
  constructor(private readonly serviceBook: DataService,
              private bookCounter: bookCounterService){}
  isIos() {
    return this.platform.is('ios')
  }

counter(event: CustomEvent){
  if(event.detail.checked === true){
    this.bookCounter.incrementCounter();
    this.showBadgeRead = true;
    this.showbadgeReading = false;

  }else if(event.detail.checked === false){
    this.bookCounter.decrementCounter();
    this.showBadgeRead = false;
    if(this.showbadgeReading === true){
      this.bookCounter.decrementCounter();
    }

  }
}

changeColor(){
  if(this.title && this.title.nativeElement){
    this.showbadgeReading = true;
    this.showBadgeRead = false;
  }
}

// changeColor(): void {
//   console.log('funziona');
//   if (this.title && this.title.nativeElement) {
//     this.title.nativeElement.innerHTML = `
//         ${this.book.title}  <ion-badge class="dots" color="warning" slot="start">reading</ion-badge>
//      `;
//   }
// }

 delete(id: number){
    this.serviceBook.delete(id);
    this.bookCounter.decrementCounter();
  }

}
