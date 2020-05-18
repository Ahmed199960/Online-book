import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { booksModel } from '../shared/books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit {
  booksItem: booksModel[];
  selectedBook:booksModel;


  constructor(
    private bkService:BooksService,
    private router: Router
    ){ }

  ngOnInit() {
    this.bkService.selectedBook.subscribe(
      (book:booksModel) =>{
        this.selectedBook = book;
      }
    )
  }
}
