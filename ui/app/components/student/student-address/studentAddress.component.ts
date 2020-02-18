import { Component } from "@angular/core";
import { UserDataService } from "ui/app/service/user/UserDataService";
import { observable } from 'rxjs';

@Component({
    selector: 'student-address',
    templateUrl: './studentAddress.component.html',
    styleUrls: ['./studentAddress.component.css' ]
})
export class StudentAddressComponent {
    constructor(public UserDataService:UserDataService)
    {

    }

}