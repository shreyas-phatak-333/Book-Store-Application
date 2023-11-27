import { Component, OnInit } from '@angular/core';
import { CartService, BookService } from 'src/app/services';

import swal from 'sweetalert2';

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotalPrice!: number;

  constructor(
    private bookService: BookService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.calculateCartTotal();
  }

  removeItem(index: any) {
    this.cartService.cartItems.splice(index,1);  
    this.calculateCartTotal();
    Toast.fire({
      icon: 'success',
      title: "removed the book from the cart"
    }) 
  }

  checkout() {
    Toast.fire({
      icon: 'success',
      title: "Order has been place Successfully!!"
    });
    this.cartService.cartItems = [];
  }

  calculateCartTotal() {
    this.cartTotalPrice = 0;
    this.cartService.cartItems.forEach((item: any) => {
      this.cartTotalPrice += item.mrp;
    });
  }

  resetSearchFilter() {
    this.bookService.searchedBooks = [];
  }
}
