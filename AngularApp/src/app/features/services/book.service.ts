import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../app/model/interfaces/book.model';
import { environment } from 'src/environments/environment';
import { Categories } from '../../../app/model/enum/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClientService: HttpClient) {}

  getAll(): Observable<Book> {
    return this.httpClientService.get<Book>(
      `${environment.baseApiUrl}books`
    );
  }

  getById(bookId: Book): Observable<Book> {
    return this.httpClientService.get<Book>(
      `${environment.baseApiUrl}books/${bookId.id}`
    );
  }

  getCategories(): Observable<Categories> {
    return this.httpClientService.get<Categories>(
      `${environment.baseApiUrl}categories`
    );
  }
}
