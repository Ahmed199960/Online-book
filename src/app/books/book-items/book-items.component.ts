import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { booksModel } from '../../shared/books.model';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {

  constructor(private bkService:BooksService) { }
  booksItem: booksModel[];
  ngOnInit() {
    this.booksItem = this.bkService.getBppks();
  }

}
