import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NursesService } from 'src/app/services/Nurses/nurses.service';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
const SAVE_INFO=111;
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  patForm: FormGroup;
  departments: any
  id:any
  patData:any
  constructor(private formBuilder: FormBuilder,private router: Router, private ns: NursesService,
     private snackBar: MatSnackBar,private pat: PatientsService,private route:ActivatedRoute) {
     
  }

  ngOnInit(): void {
    this.patForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      address: ['', Validators.required],
      blood: [1, Validators.required],
      age: [1, Validators.required]

    });
  }
  get doctorData() {
    return this.patForm.controls;
  }

 saveChanges(temp){
  temp.id=Number(this.id);
  console.log(temp)
  this.pat.editPatInfo(temp).subscribe(
    data => this.handleResponseData(data, SAVE_INFO),
    error => this.handleError(error)
  );
 }
  presentToast(msg) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
  handleResponseData(recieved_data, toggle) {
if (toggle == SAVE_INFO) {
     this.presentToast(recieved_data.message)
     this.patForm.reset();
     setTimeout(()=>{ this.router.navigate(['/sidemenu/view-patients']) }, 1000)
     
     }

  }
  handleError(error) {
    console.log(error)
  }

}
