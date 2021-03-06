import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token.service';
const LOGIN = 12;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  error_info:any={message:"",state:false}
  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private tokenservice: TokenService,
    private router: Router) { }

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
    console.log("Logined", loginData)


    if (!this.loginCredentials.email.errors && !this.loginCredentials.password.errors) {
      this.auth.onLogin(loginData).subscribe(
        data => this.handleResponseData(data, LOGIN),
        error => this.handleError(error)
      );
    }
  }

  handleResponseData(data, type) {
    console.log(data)
    if(data.token)
    {this.tokenservice.handle(data.token);
      this.router.navigate(['sidemenu'])
    }
  }
  handleError(err) {
    let re=err.error;
    this.error_info.message=re.error?re.error:"We experienced some problem Try again later.";
    this.error_info.state=!re.status;
  }

}
