import { Component } from '@angular/core';
import { Authservice } from '../../../auth/services/authservice';
import { effect, signal } from '@angular/core';
import { LoggedInUser } from '../../../auth/interfaces/loggedinuser';
import { environment } from '../../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  imports: [RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
  providers: []
})
export class Signin {

    public signed_in? : boolean;
    
    //constructor(private authService : Authservice) {
    constructor(private authService: Authservice) {

    effect(() => {
      const loggedInUser = this.authService.SignalLoggedInUser();
      this.setSignedIn(loggedInUser);
    });
  }
  
  ngOnInit() {

    

  }


  private setSignedIn(loggedInUser:LoggedInUser) {

     if( loggedInUser.userName === ''  ) {


         this.signed_in = false;


     } else {


        if( loggedInUser.userName === environment.guestUserName ) {

          this.signed_in = false;

        } else {

          this.signed_in = true;

        }


     } 
  }

}
