import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-password-reset-link',
  templateUrl: './password-reset-link.component.html',
  styleUrls: ['./password-reset-link.component.scss']
})
export class PasswordResetLinkComponent implements OnInit {
  passwordForm: FormGroup;
  token:any;
  id:any
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,  private auth: AuthService,
    private snackBar: MatSnackBar) { 

      this.route.queryParams.subscribe(params => { this.token = params.token;this.id=params.user })
    }

 
    ngOnInit(): void {
      this.passwordForm = this.formBuilder.group({
        user_id: [Number(this.id), Validators.required],
        token: [this.token, Validators.required],
        password: ['', Validators.required],
      });
    }
    get passData() {
      return this.passwordForm.controls;
    }
    saveChanges(temp){
      console.log(temp)
      this.auth.changeToNewPass(temp).subscribe(
        data => this.handleResponseData(data),
        error => this.handleError(error)
      );
  
    }
    presentToast(msg) {
      this.snackBar.open(msg, '', {
        duration: 3000
      });
    }
    handleResponseData(data) {
      if(data.status)
      {
        this.presentToast("Password updated succesfully!")
      }
        
   
    }
    handleError(err) {
      let re=err.error
      this.presentToast(re.message)
    }

}
