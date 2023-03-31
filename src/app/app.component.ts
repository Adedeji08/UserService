/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/03/2023 - 10:48:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { UsersService } from './Services/users.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, UsersService]
})
export class AppComponent {
  title = 'userservice';
  constructor(private userService: UserService, private userServices: UsersService){
      
  }

  users: {name: string, status: string}[] = [];

ngOnInit() {
    this.users = this.userService.users;
}
}
