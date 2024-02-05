import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

export interface Book {
  title: string;
  author: string;
  description: string;
  publicationYear: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public books: Book[] = [
    {
      title: "The Dragon's Prophecy",
      author: 'Elena Nightshade',
      description: 'In a realm of magic and mystery, a young sorcerer must fulfill a prophecy to save the world from an ancient evil.',
      publicationYear: 2018,
      id: 0,
    },
    
    {
      title: 'Echoes of Elaria: Lost Kingdoms',
      author: 'Marcus Stormrider',
      description: 'Explore the forgotten realms of Elaria, where ancient kingdoms rise and fall, and a hero must uncover the secrets of a lost civilization.',
      publicationYear: 2021,
      id: 1,
    },
    
    {
      title: 'Whispers in the Woods',
      author: 'Isabella Moonshadow',
      description: 'A tale of forbidden magic and enchanted forests, where a young elf discovers a hidden power that could change the fate of her people.',
      publicationYear: 2015,
      id: 2,
    },
    
    {
      title: 'The Celestial War',
      author: 'Lucius Starlight',
      description: 'As the celestial beings clash in a war that spans dimensions, a mortal hero must navigate the chaos to prevent the end of all existence.',
      publicationYear: 2019,
      id: 3,
    },
    
    {
      title: "Sorcerer's Legacy",
      author: 'Aria Shadowbinder',
      description: 'In a world where magic is both a gift and a curse, a sorcerer must confront the shadows of her past to save the realm from impending doom.',
      publicationYear: 2016,
      id: 4,
    },
    {
      title: 'The Enchanted Crystal',
      author: 'Luna Silvermist',
      description: 'Follow the journey of a young adventurer who discovers a magical crystal with the power to reshape reality, but also attracts dark forces seeking its power.',
      publicationYear: 2020,
      id: 5,
    },
    
    {
      title: 'Chronicles of the Eternal Realm',
      author: 'Darius Stormbringer',
      description: 'Embark on an epic quest through the Eternal Realm, where ancient prophecies unfold, and heroes rise to confront a looming cosmic threat.',
      publicationYear: 2017,
      id: 6,
    },
    
    {
      title: 'A Dance of Shadows',
      author: 'Serena Nightshade',
      description: 'In a city cloaked in shadows and intrigue, a rogue thief must navigate political conspiracies and dark magic to uncover a hidden truth.',
      publicationYear: 2022,
      id: 7,
    },
    
    {
      title: 'The Starlight Saga: Celestial Awakening',
      author: 'Ezra Starlight',
      description: 'As the stars align for a celestial awakening, a chosen hero must embrace their destiny to restore balance to a world torn apart by ancient conflicts.',
      publicationYear: 2014,
      id: 8,
    },
    
    {
      title: 'Mysteries of the Moonlit Grove',
      author: 'Aurora Moonshadow',
      description: 'Venture into the moonlit grove, where mystical creatures and forgotten secrets await a group of unlikely heroes on a quest to save their realm.',
      publicationYear: 2019,
      id: 9,
    }
  ];

  constructor() { }

  public getBooks(): Book[] {
    return this.books;
  }

  public getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id ===id);
  }

  public create(newBook: Book){
    this.books.push(newBook)

  }

  public update(updatedData: Book): void {
    const index = this.books.findIndex(item => item.id === updatedData.id);
  
    if (index !== -1) {
      this.books[index] = updatedData;
    }
  }
  
  public delete(id: number){
    this.books = this.books.filter(item => item.id !== id)
  }

  public getNewId(): number{
 
      const id: number = this.books.length;
      const newId: number = id + 1;
  
      return newId
  }
}
