import { CanActivateFn } from '@angular/router';
import { Authservice } from '../../../core/auth/services/authservice';
import { inject } from '@angular/core';
import { LoggedInUser } from '../../../core/auth/interfaces/loggedinuser';
import { Router } from '@angular/router';

// Functional Guard
export const homeautomationguardGuard: CanActivateFn = (route, state) => {

     const authService : Authservice = inject(Authservice);
     const router : Router = inject(Router);


     const loggedInUser : LoggedInUser = authService.getLoggedInUser();

     // Check If Role 2 Is Assigned for Home Automation Access
     if( loggedInUser.userRoles.includes(2) ) {

       return true;

     } else {

      return router.parseUrl('/signin');

     }

};
