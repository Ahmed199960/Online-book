import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../../shared/books.service';
import { booksModel } from 'src/app/shared/books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() book: booksModel;
  constructor(
    private bkService:BooksService,
    private router:Router
    ){ }

  ngOnInit() {
  }
  onSelected(){
    this.bkService.selectedBook.emit(this.book);
  }
  toShopping(){
    this.router.navigate(['/shopping'])
  }
}
