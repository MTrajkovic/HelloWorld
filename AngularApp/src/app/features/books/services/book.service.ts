import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { books } from 'src/app/fake-data/books-fake';
import { Book } from 'src/app/model/interfaces/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  softDelete(book: Book) {
    throw new Error('Method not implemented.');
  }
  getAllActiveBooks() {
    throw new Error('Method not implemented.');
  }
  delete(book: Book) {
    throw new Error('Method not implemented.');
  }
  private books: Book[] = books;
  constructor() {}

  getAll(): Observable<Book[]> {
    return of(this.books);
  }

  getById(id: number): Observable<Book | undefined> {
    const book = of(this.books).pipe(
      map((books) => books.find((book) => book.id === id))
    );
    return book;
  }
}
