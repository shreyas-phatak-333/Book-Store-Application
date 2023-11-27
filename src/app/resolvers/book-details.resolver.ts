import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,  ActivatedRouteSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { BookService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsResolver implements Resolve<any> {

  constructor(
    public bookService: BookService,
    private router : Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.bookService.getBookList().pipe(
      map(
        res => res.find((book: any) => book.id === id)
      ),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ books: [], error: message });
      }),
    )
  }
}
