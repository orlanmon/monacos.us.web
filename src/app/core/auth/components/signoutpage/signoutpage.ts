import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../services/authservice';



@Component({
  selector: 'app-signoutpage',
  imports: [],
  templateUrl: './signoutpage.html',
  styleUrl: './signoutpage.css',
})
export class Signoutpage {

  constructor(private router: Router, private authService: Authservice) {

  }

  /*
  if( result == true ) {

        setTimeout(() => {
        this.router.navigate(['/home']);
        }, 3000);
      }
*/


  



  ngOnInit() {

   this.authService.logout_user().subscribe( result => { 
    
       if( result == true ) {

        setTimeout(() => {
        this.router.navigate(['/home']);
        }, 3000);
      }
      

  });

  };



}
