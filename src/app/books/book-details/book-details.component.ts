import { Component, OnInit, Input } from '@angular/core';
import { booksModel } from 'src/app/shared/books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book:booksModel;

  constructor() { }

  ngOnInit() {
  }

}
