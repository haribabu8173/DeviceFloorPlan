import { Component } from "@angular/core";
import { UserDataService,userdata } from "ui/app/service/user/UserDataService";
import { observable } from 'rxjs';

@Component({
    selector: 'student-view',
    templateUrl: './profileDisplay.component.html',
    styleUrls: ['./profileDisplay.component.css' ]
})
export class ProfileDisplayComponent {
    constructor(public UserDataService:UserDataService)
    {
    
    }
userdata;
ngOnInit() {
    this.UserDataService.userDetails(this.UserDataService.email).subscribe((obser:userdata)=>{console.log(obser);
        if (obser.email != null) {
            this.userdata=obser;
        }
      }); 

}
}
