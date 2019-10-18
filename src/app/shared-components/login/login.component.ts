import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {



  loginForm: FormGroup;
  loading = false;
  submitted = false;
  err = false;

  email: String;
  password: String;
  userId: number

  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient, private bookService: BookService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)]],
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.http
      .post('http://13.233.140.75:7770/library/users/login', this.loginForm.value)

      .subscribe((res: any) => {
        console.log(res['userId']);
        const keys = Object.keys(res);
        console.log(keys);
        console.log(res.status, res.message);
        // alert(res['message'])
        if (res.statusCode == 200) {
          this.router.navigate(['/history']);
          this.bookService.updateLoginStatus(true);
          localStorage.setItem('currentEmail', this.loginForm.controls.email.value);
        }
        localStorage.setItem("userId", res['userId']);


      }, (err: HttpErrorResponse) => {
        this.err = true;
        if (err) {
          // alert(err.error.message);
          this.alertType = 'danger';
          this.displayAlert = true;
          this.alertMessage = ` ${err.error.message} or incorrect  password`;
        }
        console.log("rerror", err)
        // alert(err.message);
      });
  }

  closeAlert() {
    this.displayAlert = false;
    this.loginForm.reset();

  }

}
