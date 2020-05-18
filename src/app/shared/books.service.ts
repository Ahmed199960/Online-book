import { Injectable, EventEmitter } from '@angular/core';
import {booksModel} from '../shared/books.model'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  selectedBook = new EventEmitter<booksModel>();

  private books: booksModel[]= [
    new booksModel(
      'Antichristos',
      'Ahmed Khaled Mostafa',
      'https://4.bp.blogspot.com/-vU36Szi3I9s/WhAg5pGeVqI/AAAAAAAAAsY/V0b3wrFfMZEpmD5GRIV5C0UCLzQwZzhSwCLcBGAs/s1600/%25D8%25B1%25D9%2588%25D8%25A7%25D9%258A%25D8%25A9-%25D8%25A7%25D9%2586%25D8%25AA%25D9%258A%25D8%25AE%25D8%25B1%25D9%258A%25D8%25B3%25D8%25AA%25D9%2588%25D8%25B3-pdf.jpg',
      'We are finally alone  you and IFinally you are alone I became your possession  I own your eyes  every time you look at my words  and read my lines ...'),
      new booksModel(
        'Magnolia Table',
        'Joanna Gaines',
        'https://covers2.booksamillion.com/covers/bam/0/06/282/018/0062820184_b.jpg',
        'We are Following the launch of her #1 New York Times bestselling cookbook, Magnolia Table, and seeing her family’s own sacred dishes being served at other families’ tables across the country alone  you and IFinally you are alone I became your possession  I own your eyes  every time you look at my words  and read my lines ...'),
      new booksModel(
        'The Splendid and the Vile',
        'Erick Larson',
        'https://covers2.booksamillion.com/covers/bam/0/38/534/871/0385348711_b.jpg',
        'On Winston Churchills first day prime minister Hitler invaded Holland and Belgium Poland and Czechoslovakia had already fallenand the Dunkirk evacuation was just two'
      )
    ];
    getBppks(){
      return this.books.slice();
    }
  constructor() { }
}
