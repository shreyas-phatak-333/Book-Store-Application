import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services';
import { Router, ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    public bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( res => {
      if (res.error) {
        Toast.fire({
          icon: 'error',
          title: res.error
        })   
      } 
      else {
        if(this.bookService.searchedBooks.length > 0) {
          this.bookService.books = this.bookService.searchedBooks;
        }
        else {
          this.bookService.books = res.books;
        }
      }
    });
  }

}
