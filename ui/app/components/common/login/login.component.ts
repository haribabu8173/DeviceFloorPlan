import { Component , Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField} from '@angular/material';
import { UserSignupService, User } from "ui/app/service/user/UserSignupService";
import { Router } from "@angular/router";
import { UserDataService } from "ui/app/service/user/UserDataService";
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css']
})
export class Login {

  constructor(public route:Router,
    public dialogRef: MatDialogRef<Login>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    public UserSignupService:UserSignupService,
    public UserDataService:UserDataService,) {}
    userDetails:login;
    Message:string; 
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(user) {
    this.userDetails = {email:user.target[0].value,
                      password:user.target[1].value,
                      }
    let self = this;
     this.UserSignupService.userLogin(this.userDetails).subscribe((obser:Obser)=>{console.log(obser);
      this.route.navigate(['student']);
      if(obser.user.email==self.userDetails.email && obser.pwdcheck){
      this.UserSignupService.LoginStatus=true;
      this.UserSignupService.LoginData=obser.user;
      this.UserDataService.email=obser.user.email;
      this.dialogRef.close(); 
      
    }else 
    this.Message="Username or password Mismatch";
      
    });

    }

}
export interface login{
  email:string;
  password:string;
}

export interface Obser{
  pwdcheck:boolean;
  user:User;
}