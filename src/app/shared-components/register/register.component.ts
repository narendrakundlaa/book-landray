import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Resitration } from 'src/app/models/registration.model';

//import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  reg: Resitration;
  // userName: String;
  // email: String;
  // password: String;
  // phone: String;
  // adharId: String;
  // addresss: String;
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }
  baseUrl: string = 'http://10.117.189.102:7770';
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      adharId: ['', [Validators.required]],
      addresss: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    const reqObj = {
      "userName": this.registerForm.value.userName,
      "email": this.registerForm.value.email,
      "password": this.registerForm.value.password,
      "phone": this.registerForm.value.phone,
      "adarId": this.registerForm.value.adharId,
      "address": this.registerForm.value.addresss,
    };

    console.log("Going", reqObj);
    this.http.post('http://13.233.140.75:7770/library/users/registration', reqObj).subscribe((response: any) => {
      if (response) {
        console.log(response);
        if (response.statusCode == 201) {
          // alert(this.registerForm.value.userName + ' Registerd success');

          this.alertType = 'success';
          this.displayAlert = true;
          this.alertMessage = ` ${this.registerForm.value.userName} Registration Successfull`;

        } else {
          this.alertType = 'warning';
          this.displayAlert = true;
          this.alertMessage = ` ${response.message} `;
        }
        this.data = response;
        // alert(response['message'])
        this.reg.userName = this.data.userName;
        this.reg.email = this.data.email;
        this.reg.password = this.data.password;
        this.reg.phone = this.data.phone;
        this.reg.adharId = this.data.adharId;
        this.router.navigate(['/list']);
      }

      console.log(this.registerForm);


    }, (err) => {
      console.log("rerror", err)
      // alert(err.message);
    });
  }
  closeAlert() {
    this.displayAlert = false;
    this.router.navigate(['login']);
  }
}
