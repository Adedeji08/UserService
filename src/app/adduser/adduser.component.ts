/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/03/2023 - 11:40:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent {
  username: string = '';
  status: string = 'active';

constructor(private userService: UserService){

}
users: {name: string, status: string}[] = [];

ngOnInit(){
  this.users = this.userService.users;
}
AddUser(){
  this.userService.AddnewUser(this.username, this.status)
  // console.log(this.userService.users)
}
}
