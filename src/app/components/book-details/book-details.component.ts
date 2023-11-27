import { Component, OnInit } from '@angular/core';
import { BookService, CartService } from 'src/app/services';
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
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  
  /* book is used to store single book data */
  book: any;

  constructor(
    public bookService: BookService,
    private cartService: CartService,
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
        this.book = res.book;
      }
    });
  }

  /** function to add books to cart */
  addToCart() {
    this.cartService.cartItems.push(this.book);
    Toast.fire({
      icon: 'success',
      title: "book has been added to your cart"
    })   
  }

  resetSearchFilter() {
    this.bookService.searchedBooks = [];
  }

}
