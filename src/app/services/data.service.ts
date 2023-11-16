import { Injectable } from '@angular/core';

export interface Message {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      title: 'The Sword of Destiny',
      author: 'Andrzej Sapkowski',
      genre: 'Fantasy',
      publicationYear: 1992,
      id: 1,
      read: true
    },
    
    {
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      publicationYear: 1954,
      id: 2,
      read: false
    },
    
    {
      title: 'A Game of Thrones',
      author: 'George R.R. Martin',
      genre: 'Fantasy',
      publicationYear: 1996,
      id: 3,
      read: true
    }
    
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
