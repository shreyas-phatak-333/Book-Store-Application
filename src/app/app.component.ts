import { Component } from '@angular/core';
import { CartService, BookService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-books';

  constructor(
    public cartService: CartService,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
  }

  resetSearchFilter() {
    this.bookService.searchedBooks = [];
  }
}
