/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/03/2023 - 11:44:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './Services/logger.service';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    AllusersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
