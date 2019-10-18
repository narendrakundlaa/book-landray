import { Component, OnInit } from '@angular/core';
import { BooksList } from 'src/app/models/listBooks.model';
import { BookService } from 'src/app/book.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;
  constructor(private http: HttpClient, private bookService: BookService, private router: Router) { }
  searchText: string;
  books: BooksList[];
  ngOnInit() {
  }
  // getBookList(searchTextparm: string){
  //   console.log(searchTextparm);
  // }

  getBookList() {


    if (this.searchText.length > 3) {
      this.bookService.searchBooks(this.searchText).subscribe((books: any) => {
        this.books = books.bookResponse;
        console.log(books);
      }, // HttpErrorResponse 
        (err: HttpErrorResponse) => {
          if (err) {
            this.alertType = 'warning';
            this.displayAlert = true;
            this.alertMessage = ` ${err.error.message} `;
          }
          console.log(err)
        });

    }
    // this.bookService.searchBooks(this.searchText).subscribe((books: any) => {
    //   this.books = books.bookResponse;
    //   console.log(books);
    // })

  }
  bookID(id: any) {
    console.log(localStorage.getItem("userId"));
    localStorage.setItem('BookID', id);
  }
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['list']);

  }
}
