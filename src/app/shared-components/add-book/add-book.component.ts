import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBooksForm: FormGroup;
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.addBooksForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  get f() { return this.addBooksForm.controls; }

  addBook() {
    console.log(this.addBooksForm.value);
    this.bookService.addBook(this.addBooksForm.value).subscribe((addBooked) => {
      if (addBooked) {
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = `Thanks for donate ${this.addBooksForm.controls.bookName.value} `;
      }
    },
      (err: any) => console.log(err)
    );

  }
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['list']);
  }

}
