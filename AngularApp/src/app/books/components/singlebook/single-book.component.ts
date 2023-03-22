import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss'],
})
export class SinglebookComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}
  ngOnInit(): void {
    let bookId = this.activatedRouter.snapshot.paramMap.get('bookId');
    console.log(bookId);
  }
}
