import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-password-change-bottom',
  templateUrl: './password-change-bottom.component.html',
  styleUrls: ['./password-change-bottom.component.scss']
})
export class PasswordChangeBottomComponent implements OnInit {

  passwordForm: FormGroup;
  constructor(private formBuilder: FormBuilder,  private auth: AuthService,
    private _bottomSheetRef: MatBottomSheetRef<PasswordChangeBottomComponent>,
    private snackBar: MatSnackBar) { }

 
    ngOnInit(): void {
      this.passwordForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]],
        password: ['', Validators.required],
        new_password: ['', Validators.required]
      });
    }
    get passData() {
      return this.passwordForm.controls;
    }
    saveChanges(temp){
      console.log(temp)
      this.auth.chnagePass(temp).subscribe(
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
        this._bottomSheetRef.dismiss()
      }
        
   
    }
    handleError(err) {
      let re=err.error
      this.presentToast(re.message)
    }

}
