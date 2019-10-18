import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any;

  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    const userId = localStorage.getItem("userId");
    this.bookService.viewHistory(userId).subscribe((data: any) => {
      console.log(data);
      this.history = data.bookDetails;

    },
      (err: HttpErrorResponse) => {
        if (err.error.statusCode == 404) {
          // alert(err.error.message);
          this.alertType = 'danger';
          this.displayAlert = true;
          this.alertMessage = ` ${err.error.message} Please close tab and go to home`;

        }
        console.log(err)
      })
  }
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['list']);
  }

}
