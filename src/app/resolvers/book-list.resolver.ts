import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,  ActivatedRouteSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { BookService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class BookListResolver implements Resolve<Observable<any>> {

  constructor(
    public bookService: BookService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.bookService.getBookList().pipe(
      map(res => res),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ books: [], error: message });
      }),
    )
  }
}
