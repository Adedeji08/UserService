/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/03/2023 - 20:58:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/03/2023
    * - Author          : 
    * - Modification    : 
**/

import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{

    LogMessage(name: string, status: string){
        console.log('A new user with username "'+name+'" with status '+status+' has been added.')
    }
}