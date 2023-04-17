import { Book } from '../../../../model/interfaces/book.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';
import { Subject, takeUntil } from 'rxjs';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  unsubscirebe$: Subject<void> = new Subject<void>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  unsubscribeAll() {
    this.unsubscirebe$.next();
    this.unsubscirebe$.complete();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  private getAllBooks() {
    this.bookService
      .getAll()
      .pipe(takeUntil(this.unsubscirebe$))
      .subscribe((data: Book[]) => (this.books = data));
  }
}
