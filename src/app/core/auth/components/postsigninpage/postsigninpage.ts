import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postsigninpage',
  imports: [],
  templateUrl: './postsigninpage.html',
  styleUrl: './postsigninpage.css',
})
export class Postsigninpage {

  public pageMessage? : string 
  private route : ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router) {


  }

  ngOnInit() {
    
      var opt : string | null;
    
      opt = this.route.snapshot.queryParamMap.get('opt');

      if ( opt === "in") {
      this.pageMessage = "Signed In";

       setTimeout(() => {
      this.router.navigate(['/home']);
      }, 3000);

    } 
    
      if ( opt === "x") {

      this.pageMessage = "Invalid Sign In";

      setTimeout(() => {
      this.router.navigate(['/signin']);
      }, 3000);

    }

    }
}
