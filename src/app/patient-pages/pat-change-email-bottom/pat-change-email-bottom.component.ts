import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-pat-change-email-bottom',
  templateUrl: './pat-change-email-bottom.component.html',
  styleUrls: ['./pat-change-email-bottom.component.scss']
})
export class PatChangeEmailBottomComponent implements OnInit {
  emailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,  private auth: AuthService,
    private _bottomSheetRef: MatBottomSheetRef<PatChangeEmailBottomComponent>,
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
    this.auth.changePatEmail(temp).subscribe(
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
