import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  searchText: any;

  allBooks: any;

  constructor(
    public bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe({
      next:( res => {
        this.allBooks = res;
      })
    });
    console.log(window.location.href);
  }

  filterBooks(event: any) {
    this.searchText = event.value;
    this.bookService.searchedBooks = [];
    this.allBooks.forEach((book: any) => {
      if( book.title.toLowerCase().includes(this.searchText.toLowerCase()) || book.author.toLowerCase().includes(this.searchText.toLowerCase()) ) {
        this.bookService.searchedBooks.push(book);
      }
    });
  }

  searchBook() {
    this.router.navigate(["/"])
    this.bookService.books  = this.bookService.searchedBooks;
  }

}
