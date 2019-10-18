import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/book.service';
import { BooksList } from 'src/app/models/listBooks.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId: any;
  isLogin: boolean = false;
  currentEmail: any;
  constructor(private http: HttpClient, private bookService: BookService, private router: Router) { }
  books: BooksList[];
  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.bookService.loginStautus.subscribe(data => {
      // alert('login stauts' + data)
      this.isLogin = data;
    })
    this.currentEmail = localStorage.getItem('currentEmail');
  }
  logout() {
    // alert('Hello Logout');
    this.isLogin = false;
    localStorage.removeItem('userId');
    this.router.navigate(['/list']);
    localStorage.clear();
  }
  login() {
    // alert('Hello Login');
    this.router.navigate(['/login']);
  }

}
