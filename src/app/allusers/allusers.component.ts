/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/03/2023 - 10:43:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  constructor( private userServices: UsersService){}
  users: {name: string, job: string, country: string, age: number, gender: string, avatar: string}[] = [];

  ngOnInit(): void {
     this.users = this.userServices.users;
  }

  ShowDetails(user: {name: string, job: string, country: string, gender: string, age: number, avatar: string}){
  }

}
