import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { BookService } from 'src/app/book.service';
import { BorrowBooks } from 'src/app/models/borrow.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrow',
  templateUrl: './barrow.component.html',
  styleUrls: ['./barrow.component.css']
})
export class BarrowComponent implements OnInit {
  barrowBooksForm: FormGroup;
  books: BorrowBooks;
  data: any;

  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.barrowBooksForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      bookId: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
    const getBarrowID = localStorage.getItem('BookID');
    const getUserId = localStorage.getItem("userId");
    this.barrowBooksForm.patchValue({
      userId: getUserId,
      bookId: getBarrowID
    });
  }
  barrowBook() {
    this.bookService.barrowBook(this.barrowBooksForm.value).subscribe((data: any) => {
      if (data.statusCode == 201) {
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = `Thanks..!  ${data.message} `;
      }
      (err: any) => console.log(err);
      console.log(data);
    });
  }

  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['list']);
  }

}
