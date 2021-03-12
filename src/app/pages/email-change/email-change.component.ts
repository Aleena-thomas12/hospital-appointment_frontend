import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.scss']
})
export class EmailChangeComponent implements OnInit {

  emailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,  private auth: AuthService,
    private _bottomSheetRef: MatBottomSheetRef<EmailChangeComponent>,
    private snackBar: MatSnackBar) { }

 
  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      new_email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }
  get emailData() {
    return this.emailForm.controls;
  }
  saveChanges(temp){
    console.log(temp)
    this.auth.changeEmail(temp).subscribe(
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
      this.presentToast("Email address updated succesfully!")
      this._bottomSheetRef.dismiss()
    }
      
 
  }
  handleError(err) {
    let re=err.error
    this.presentToast(re.message)
  }

}
