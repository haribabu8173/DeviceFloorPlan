import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserDataService {

  constructor(private httpClient:HttpClient) { }
  public userdata;
  public email;
    userDetails(userid){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.httpClient.get("http://localhost:4300/api/userdata/"+userid, httpOptions);
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
export interface userdata{
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

