import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Book, DataService } from '../services/data.service';

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

  constructor(private readonly serviceBook: DataService){}
  isIos() {
    return this.platform.is('ios')
  }
  delete(id: number){
    this.serviceBook.delete(id);
  }
}
