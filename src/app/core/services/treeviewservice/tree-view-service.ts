import { Authservice } from '../../auth/services/authservice';
import { signal } from '@angular/core';
import { LoggedInUser } from '../../auth/interfaces/loggedinuser';
import { effect, Injectable } from '@angular/core';
import { Httpservice } from '../../services/httpservice/httpservice';
import { environment } from '../../../../environments/environment';
import { TreeViewItem } from '../../interfaces/treeviewitem';
import { ResponseResult } from '../../interfaces/responseresult';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeViewService {
  
  private loggedInUser? : LoggedInUser;

  public treeViewItems : TreeViewItem[] = [];
    
  private signalTreeViewItems = signal<TreeViewItem[]>(this.treeViewItems);
  
  public SignalTreeViewItems = this.signalTreeViewItems.asReadonly();
  


 public constructor(private httpService : Httpservice, private authService: Authservice) {
    
    
    effect(() => {

      
      this.loggedInUser = this.authService.SignalLoggedInUser();


      this.refreshApplicationTreeView(this.loggedInUser);


    })
  }

  // Refresh Tree View after receiving a Logged In User Event 
    private refreshApplicationTreeView(loggedInUser: LoggedInUser) {
  
        if ( loggedInUser.userName !== '' ) {
  
        
        this.getApplicationTreeView(2).subscribe( result => {
  
          if( result == true ) {
  
               // Raise Signal Event TreeView Items Update
                this.signalTreeViewItems.set(this.treeViewItems);
  
  
          } else {
  
              console.log("Failed to refresh application treeview.");
  
          }
  
        })
  
      }
  
    }
  
  
    public getApplicationTreeView (navigationTypeID : number) : Observable<boolean> {
  
    
    const result = this.buildNavigationMenu(navigationTypeID).pipe( map((response:ResponseResult<TreeViewItem[]>) => {
  
              if(response.statusCode == 200 ) {
  
              if( response.data) { 

                this.treeViewItems = response.data;
  
                localStorage.setItem('application_tree_view', JSON.stringify(this.treeViewItems));
  
                  return true;
  
              } else {
                  console.log("Failed to build application treeview.");
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
  
    
    private buildNavigationMenu(navigationTypeID : number) : Observable<ResponseResult<TreeViewItem[]>> {
    
  
          this.httpService.setBaseURL(environment.apiUrl);
          
          const result = this.httpService.get_response<TreeViewItem[]>(`Navigation/BuildTreeView/${navigationTypeID}`, this.loggedInUser?.token );
    
          return result;
    
      }


  

}
