import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-pass-bottom-sheet',
  templateUrl: './forgot-pass-bottom-sheet.component.html',
  styleUrls: ['./forgot-pass-bottom-sheet.component.scss']
})
export class ForgotPassBottomSheetComponent implements OnInit {
  state:number=0;
  passwordForm: FormGroup;
  message:any="Fetching Details..."
  constructor(private formBuilder: FormBuilder,  private auth: AuthService,
    private _bottomSheetRef: MatBottomSheetRef<ForgotPassBottomSheetComponent>,
    private snackBar: MatSnackBar) { }

 
    ngOnInit(): void {
      this.passwordForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]]
      });
    }
    get passData() {
      return this.passwordForm.controls;
    }
    saveChanges(temp){
      this.state=2;
      console.log(temp)
      this.auth.passResetLink(temp).subscribe(
        data => this.handleResponseData(data),
        error => this.handleError(error)
      );
  
    }
    presentToast(msg) {
      this.snackBar.open(msg, '', {
        duration: 4000
      });
    }
    handleResponseData(data) {
      this.presentToast("Password Reset Link Sent Succesfully!")
      if(data.status)
      {
        this.presentToast("Password Reset Link Sent Succesfully!")
        this._bottomSheetRef.dismiss()
      }
        
   
    }
    handleError(err) {
      
      let re=err.error
      this.presentToast(re.message)
      this._bottomSheetRef.dismiss()
      // this.message=re.message;
    }
}
