import { Injectable } from '@angular/core';

export interface Book {
  [x: string]: any;
  title: string;
  author: string;
  description: string;
  publicationYear: number;
  id: number;
  read: boolean;
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
      id: 4,
      read: false
    },
    
    {
      title: 'Echoes of Elaria: Lost Kingdoms',
      author: 'Marcus Stormrider',
      description: 'Explore the forgotten realms of Elaria, where ancient kingdoms rise and fall, and a hero must uncover the secrets of a lost civilization.',
      publicationYear: 2021,
      id: 5,
      read: true
    },
    
    {
      title: 'Whispers in the Woods',
      author: 'Isabella Moonshadow',
      description: 'A tale of forbidden magic and enchanted forests, where a young elf discovers a hidden power that could change the fate of her people.',
      publicationYear: 2015,
      id: 6,
      read: true
    },
    
    {
      title: 'The Celestial War',
      author: 'Lucius Starlight',
      description: 'As the celestial beings clash in a war that spans dimensions, a mortal hero must navigate the chaos to prevent the end of all existence.',
      publicationYear: 2019,
      id: 7,
      read: false
    },
    
    {
      title: "Sorcerer's Legacy",
      author: 'Aria Shadowbinder',
      description: 'In a world where magic is both a gift and a curse, a sorcerer must confront the shadows of her past to save the realm from impending doom.',
      publicationYear: 2016,
      id: 8,
      read: true
    },
    {
      title: 'The Enchanted Crystal',
      author: 'Luna Silvermist',
      description: 'Follow the journey of a young adventurer who discovers a magical crystal with the power to reshape reality, but also attracts dark forces seeking its power.',
      publicationYear: 2020,
      id: 9,
      read: false
    },
    
    {
      title: 'Chronicles of the Eternal Realm',
      author: 'Darius Stormbringer',
      description: 'Embark on an epic quest through the Eternal Realm, where ancient prophecies unfold, and heroes rise to confront a looming cosmic threat.',
      publicationYear: 2017,
      id: 10,
      read: true
    },
    
    {
      title: 'A Dance of Shadows',
      author: 'Serena Nightshade',
      description: 'In a city cloaked in shadows and intrigue, a rogue thief must navigate political conspiracies and dark magic to uncover a hidden truth.',
      publicationYear: 2022,
      id: 11,
      read: false
    },
    
    {
      title: 'The Starlight Saga: Celestial Awakening',
      author: 'Ezra Starlight',
      description: 'As the stars align for a celestial awakening, a chosen hero must embrace their destiny to restore balance to a world torn apart by ancient conflicts.',
      publicationYear: 2014,
      id: 12,
      read: true
    },
    
    {
      title: 'Mysteries of the Moonlit Grove',
      author: 'Aurora Moonshadow',
      description: 'Venture into the moonlit grove, where mystical creatures and forgotten secrets await a group of unlikely heroes on a quest to save their realm.',
      publicationYear: 2019,
      id: 13,
      read: true
    }
    
    // ... aggiungi altri libri secondo necessità
    
    
  ];

  constructor() { }

  public getBooks(): Book[] {
    return this.books;
  }

  public getBookById(id: number): Book {
    return this.books[id];
  }
}
