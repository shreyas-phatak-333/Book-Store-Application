import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any = [];
  searchedBooks : any = [];

  constructor(
    private http: HttpClient,
  ) { }

  getBookList() {
    return this.http.get<Array<any>>('assets/data/books.JSON');
  }
} 
