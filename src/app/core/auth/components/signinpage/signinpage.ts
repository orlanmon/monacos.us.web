import { Component } from '@angular/core';
import { Authservice } from '../../services/authservice';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


@Component({
  selector: 'app-signinpage',
  imports: [FormsModule],
  templateUrl: './signinpage.html',
  styleUrl: './signinpage.css',
  providers: []
})
export class Signinpage {

   private route : ActivatedRoute = inject(ActivatedRoute);

  public userName: string;
  public userPassword : string

  constructor(private authService: Authservice, private router: Router) {

    this.userName = "";
    this.userPassword = "";


  }

  onSubmit() {

     this.authService.login_user(this.userName, this.userPassword ).subscribe(

      result => { 
        


        if ( result == true) { 

            //this.router.navigate(['/postsignin'], { queryParams: { opt: 'in', page: 1 }});
            this.router.navigateByUrl("/postsignin?opt=in");


        } else {

          //this.router.navigate(['/postsignin'], { queryParams: { opt: 'x', page: 1 }});
          this.router.navigateByUrl("/postsignin?opt=x");
        }
      

      }


     )

  }

  ngOnInit() {

  
}


}
