import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookItemsComponent } from './books/book-items/book-items.component';
import { ItemEditComponent } from './books/book-items/item-edit/item-edit.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { Routes, RouterModule } from '@angular/router';

const appRouter: Routes =[
  {path:'', component: BooksComponent},
  {path:'shopping', component: ShoppingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookItemsComponent,
    ItemEditComponent,
    BookDetailsComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
