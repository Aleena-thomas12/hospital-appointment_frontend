import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get loginCredentials() {
    return this.loginForm.controls;
  }
  onLogin(loginData) {
    console.log("Logined")
    this.router.navigate(['sidemenu'])

    // if (!this.loginCredentials.email.errors && !this.loginCredentials.password.errors) {
      //////Write Api Here
      // this.spinner.show();
      // this.api.login(loginData).subscribe(
      //   data => this.handleResponseData(data, LOGIN),
      //   error => this.handleError(error)
      // );
  }
}
