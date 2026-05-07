import { effect, Injectable } from '@angular/core';
import { Httpservice } from '../../services/httpservice/httpservice';
import { environment } from '../../../../environments/environment';
import { ResponseResult } from '../../interfaces/responseresult';
import { Observable, Subject, map } from 'rxjs';
import { MenuItem } from '../../interfaces/menuitem';
import { Authservice } from '../../auth/services/authservice';
import { signal } from '@angular/core';
import { LoggedInUser } from '../../auth/interfaces/loggedinuser';


@Injectable({
  providedIn: 'root',
})
export class Menuservice {


  public menuItems : MenuItem[] = [];

  private loggedInUser? : LoggedInUser;

  
  private signalMenuItems = signal<MenuItem[]>(this.menuItems);

  public SignalMenuItems = this.signalMenuItems.asReadonly();


  public constructor(private httpService : Httpservice, private authService: Authservice) {
    
    
    effect(() => {
      this.loggedInUser = this.authService.SignalLoggedInUser();
      this.refreshApplicationNavigationMenu(this.loggedInUser);
    })
  }


  // Refresh Menu after receiving a Logged In User Event 
  private refreshApplicationNavigationMenu(loggedInUser: LoggedInUser) {

      if ( loggedInUser.userName !== '' ) {

      
      this.getApplicationNavigationMenu(1, loggedInUser.userID).subscribe( result => {

        if( result == true ) {

             // Event Menu Item Update
              this.signalMenuItems.set(this.menuItems);


        } else {

            console.log("Failed to refresh application menu.");

        }

      })

    }

  }



  public getApplicationNavigationMenu (navigationTypeID : number, userID: number) : Observable<boolean> {

  
  const result = this.buildNavigationMenu(navigationTypeID, userID).pipe( map((response:ResponseResult<MenuItem[]>) => {

            if(response.statusCode == 200 ) {

            if( response.data) { 
              this.menuItems = response.data;

              localStorage.setItem('application_menu', JSON.stringify(this.menuItems));

                return true;

            } else {
                console.log("Failed to build application menu.");
                 return false;
            }

          } else {

              console.log("Error Occured with HTTTP Status Code: #%d", response.statusCode);

               return false;
          };

          return false;

        } ));
    
        return result;

  }

  
  private buildNavigationMenu(navigationTypeID : number, userID: number) : Observable<ResponseResult<MenuItem[]>> {
  

        this.httpService.setBaseURL(environment.apiUrl);
        

        const result = this.httpService.get_response<MenuItem[]>(`Navigation/BuildNavigationMenu/${navigationTypeID}/${userID}`, this.loggedInUser?.token );
  

        return result;
  
    }

    public getNavigationMenu() : MenuItem[] {

    
    var menuItems : MenuItem[];

    menuItems = JSON.parse( localStorage.getItem('application_menu') || '{}' );

    return menuItems;

  }


}


