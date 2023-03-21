import { Book } from '../../../model/interfaces/book.model';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      title: 'Money power',
      src: 'assets/img/money.jpg',
      surname: 'Name Surname:1998',
      category: 'Category:' + Categories.general,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      overview: '/book/1',
    },
    {
      title: 'My First Love',
      src: 'assets/img/my-first-love.jpg',
      surname: 'Name Surname:2000',
      category: 'Category:' + Categories.general,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      overview: './book/2',
    },
    {
      title: 'My Little Life',
      src: 'assets/img/my-little-life.jpg',
      category: 'Category:' + Categories.general,
      surname: ' Name Surname:2005',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      overview: './book/3',
    },
    {
      title: 'The Lost Trip',
      src: 'assets/img/the-lost-trip.jpg',
      surname: 'Name Surname:2008',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      category: 'Category:' + Categories.history,
      overview: './book/4',
    },
    {
      title: 'Dark',
      src: 'assets/img/dark.jpg',
      surname: 'Name Surname:2010',
      category: 'Category:' + Categories.fantasy,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      overview: './book/5',
    },
    {
      title: 'Find Me',
      src: 'assets/img/find-me.jpg',
      surname: 'Name Surname:2021',
      category: 'Category:' + Categories.fantasy,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
      overview: './book/6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
