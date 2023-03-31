

/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/03/2023 - 10:40:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/03/2023
    * - Author          : 
    * - Modification    : 
**/

import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    constructor(private Logger: LoggerService){

    }
    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'Steve', status: 'active'}
    ]

    AddnewUser(name: string, status: string){
        this.users.push({name: name, status: status});
        this.Logger.LogMessage(name,status)
    }
}