import { BookService } from './../../services/book.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Book } from 'src/app/model/interfaces/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;
  @Input() categories!: Category;
  @Output() deleteBook = new EventEmitter();
  @Output() softDelete = new EventEmitter();

  constructor(private BookService: BookService) {}

  onDelete() {
    this.deleteBook.emit();
  }

  SoftDelete() {
    this.softDelete.emit();
  }
}
