import { Component } from "@angular/core";
import { TutorilaService } from "ui/app/service/tutorial/tutorialservice";
import { observable } from 'rxjs';

import { UserSignupService, User } from "ui/app/service/user/UserSignupService";
import { UserDataService } from "ui/app/service/user/UserDataService";
@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css' ]
})
export class StudentComponent {
    constructor(public UserSignupService:UserSignupService,public UserDataService:UserDataService)
    {

    }
    ngOnInit() {
        this.UserDataService.userDetails(this.UserSignupService.LoginData.email).subscribe((obser:userdata)=>{console.log(obser);
            if (obser.email != null) {
                this.UserDataService.userdata=obser;
            }
          });        
    }


}
interface personalobject{
    Name:String,
    LanguagesKnown:String,
    MobileNo:Number,
    Gender:String,
    Address:address
}
interface address{
    address1:String,
    address2:String,
    city:String,
    state:String,
    pin:Number
}
interface userdata{
    email: String,
    ProfileSum: String,
    Personal: personalobject,
    Education: Array<education>,
    Project :  Array<project>,
    Skills:    Array<skill>,
}
interface education{
        Board: String,
        Institution:String,
        Univercity: String,
        YearOfPassing:Number,
        Percentage: Number
    }
interface project{
        Name: String,
        Discription: String,
            Duration:  String,
            Responsebilites: String,
            Domain: String
}
interface skill{
    name: String,
    exp: Number
}
