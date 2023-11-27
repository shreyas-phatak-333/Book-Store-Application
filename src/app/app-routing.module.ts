import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent, BookDetailsComponent, CartComponent } from './components';
import { BookListResolver, BookDetailsResolver } from './resolvers';

const routes: Routes = [
  {
    path: '', 
    component: BookListComponent,
    resolve: {
      books: BookListResolver
    }
  },
  {
     path: 'book-details/:id', 
     component: BookDetailsComponent,
     resolve: {
      book: BookDetailsResolver
    }
  },
  { 
    path: 'cart', 
    component: CartComponent
  },
  { 
    path: '**', 
    redirectTo: ''// or page not found component can be created
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
