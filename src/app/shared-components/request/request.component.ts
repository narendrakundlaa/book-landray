import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestBooksForm: FormGroup;

  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.requestBooksForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      bookId: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
    const barrowID = localStorage.getItem('BookID');
    const userId = localStorage.getItem("userId");
    this.requestBooksForm.patchValue({
      userId: userId,
      bookId: barrowID
    });

  }
  requestBook() {
    console.log(this.requestBooksForm.value);
    this.bookService.requestBook(this.requestBooksForm.value).subscribe((data: any) => {
      if (data.statusCode == 201) {
        // alert(data.message);
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = ` ${data.message} `;
      }
      (err: any) => console.log(err);
      console.log(data);
    }
      // () => this.router.navigate(['list']),

    );
  }
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['list'])
  }

}
