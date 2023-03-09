import { Book } from '../../../interfaces/book.model';
import { Component, OnInit } from '@angular/core';

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
      surname: 'Name Surname 1998',
      category: 'Category:General',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      overview: 'details/money-power.html',
    },
    {
      title: 'My First Love',
      src: 'assets/img/my-first-love.jpg',
      surname: 'Name Surname 2000',
      category: 'Category:General',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      overview: 'details/my-first-love.html',
    },
    {
      title: 'My Little Life',
      src: 'assets/img/my-little-life.jpg',
      category: 'Category:General',
      surname: ' Name Surname 2005',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      overview: 'details/my-litle-life.html',
    },
    {
      title: 'The Lost Trip',
      src: 'assets/img/the-lost-trip.jpg',
      surname: 'Name Surname : 2008',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      category: 'Category:History',
      overview: 'details/the-lost-trip.html',
    },
    {
      title: 'Dark',
      src: 'assets/img/dark.jpg',
      surname: 'Name Surname : 2010',
      category: 'Category:Fantasy',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      overview: 'details/dark.html',
    },
    {
      title: 'Find Me',
      src: 'assets/img/find-me.jpg',
      surname: 'Name Surname : 2021',
      category: 'Category:History',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.',
      overview: 'details/find-me .html',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
