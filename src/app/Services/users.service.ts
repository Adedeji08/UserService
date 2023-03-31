

/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/03/2023 - 10:28:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { EventEmitter } from "@angular/core"
export class UsersService{
    users = [
        {name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/john.jpeg'},
        {name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/mark.jpeg'},
        {name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 35, avatar: 'assets/avatar/merry.jpeg'},
        {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'assets/avatar/steve.jpeg'}
    ]

    OnShowDetailsClicked = new EventEmitter<{name: string, job: string, country: string, gender: string, age: number, avatar: string}>()
    ShowUserDetails(user: {name: string, job: string, country: string, age: number, gender: string, avatar: string}){
        this.OnShowDetailsClicked.emit(user)
    }
}