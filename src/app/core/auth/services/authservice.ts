import { Injectable } from '@angular/core';
import { Httpservice } from '../../services/httpservice/httpservice';
import { LoggedInUser } from '../interfaces/loggedinuser';
import { environment } from '../../../../environments/environment';
import { UserLogin } from '../interfaces/userlogin';
import { ResponseResult } from '../../interfaces/responseresult';
import { Observable, Subject, map } from 'rxjs';
import { signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Authservice {

  // LoggedIn User Event 
  private loggedInUser: LoggedInUser = { userID: 0, userRoles: [], userName: '', token: '' };

  private signalLoggedInUser = signal<LoggedInUser>(this.loggedInUser);

  public constructor(private httpService: Httpservice) {


  }

  public SignalLoggedInUser = this.signalLoggedInUser.asReadonly();


  public login_user(userName: string, userPassword: string): Observable<boolean> {

    /*
    this.login( userName, userPassword).subscribe( result => {

       if(result.statusCode == 200 ) {

         if( result.data) { 
           loggedInUser = result.data;

           localStorage.setItem('loggedinuser', JSON.stringify(loggedInUser));

           // If User Logged In Isn't Guest Then Send an Event Out
           if( loggedInUser.userName != environment.guestUserName) {

               this.userLoggedIn = true;

               // Emit Logged in Event
               this.eventLoggedIn.next(true);

           }

           

         } else {

             console.log("Login Failed for User");

         }

       } else {

           console.log("Error Occured with HTTTP Status Code: #%d", result.statusCode);
           
       };

   } );
   */


    const result = this.login(userName, userPassword).pipe(map((response: ResponseResult<LoggedInUser>) => {

      if (response.statusCode == 200) {

        if (response.data) {

          this.loggedInUser = response.data;

          localStorage.setItem('logged_in_user', JSON.stringify(this.loggedInUser));

          // Emit Logged in Event
          //this.eventLoggedIn.next(true);

          // Event LoggedInUser Update
          this.signalLoggedInUser.set(this.loggedInUser);

          return true;

        } else {
          console.log("Login Failed for User");
          return false;
        }

      } else {

        console.log("Error Occured with HTTTP Status Code: #%d", response.statusCode);

        return false;
      };

      return false;

    }));

    return result;
  }



  private login(userName: string, userPassword: string): Observable<ResponseResult<LoggedInUser>> {

    var userLoginRequest: UserLogin = { userName: userName, password: userPassword };

    this.httpService.setBaseURL(environment.apiUrl);

    const result = this.httpService.post_response<LoggedInUser>("Authorize/Login", userLoginRequest, undefined);

    return result;

  }

  // Log In guestuser
  public initialize(): Observable<boolean> {

    const result = this.login(environment.guestUserName, environment.guestUserPassword).pipe(map((response: ResponseResult<LoggedInUser>) => {

      if (response.statusCode == 200) {

        if (response.data) {

          this.loggedInUser = response.data;

          localStorage.setItem('logged_in_user', JSON.stringify(this.loggedInUser));

          // Event LoggedInUser Update
          this.signalLoggedInUser.set(this.loggedInUser);

          return true;


        } else {

          console.log("Login Failed for Guest User");

          return false;
        }

      } else {

        console.log("Error Occured with HTTTP Status Code: #%d", response.statusCode);

        return false;
      };


    }));


    return result;
  }

  public logout_user(): Observable<boolean> {


    // Clear Storage Revert to Guest User
    localStorage.removeItem('logged_in_user');


    // If You Log out of a non guest user then login back in as guest
    /*
    this.login( environment.guestUserName, environment.guestUserPassword).subscribe( result => {

          if(result.statusCode == 200 ) {

            if( result.data) { 
              this.loggedInUser = result.data;

              localStorage.setItem('logged_in_user', JSON.stringify(this.loggedInUser));

              // Event LoggedInUser Update
              this.signalLoggedInUser.set(this.loggedInUser);

            } else {

                console.log("Login Failed for Guest User");

            }

          } else {

              console.log("Error Occured with HTTTP Status Code: #%d", result.statusCode);

          };

      }  );
    */


    const result = this.login(environment.guestUserName, environment.guestUserPassword).pipe(map((response: ResponseResult<LoggedInUser>) => {

      if (response.statusCode == 200) {

        if (response.data) {
          this.loggedInUser = response.data;

          localStorage.setItem('logged_in_user', JSON.stringify(this.loggedInUser));

          // Event LoggedInUser Update
          this.signalLoggedInUser.set(this.loggedInUser);

          return true;

        } else {

          console.log("Login Failed for Guest User");

          return false;
        }

      } else {

        console.log("Error Occured with HTTTP Status Code: #%d", response.statusCode);

        return false;

      };

    }));

    return result;

  }


  // Angular localstorage vs sessionstorage
  // https://www.google.com/search?q=angular+auth+service+to+maintain+logged+in+user

  public getLoggedInUser(): LoggedInUser {

    var loggedInUser: LoggedInUser;

    loggedInUser = JSON.parse(localStorage.getItem('logged_in_user') || '{}');

    return loggedInUser;

  }


}
