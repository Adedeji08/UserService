/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/03/2023 - 11:02:45
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
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  
constructor(private userService: UsersService){}

users: {name: string, job: string, country: string, gender: string, age: number, avatar: string};

ngOnInit(): void { 
   this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, country: string, gender: string, age: number, avatar: string}) => {
    this.users = data;
   })
}

 
}
