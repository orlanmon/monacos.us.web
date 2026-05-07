import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Menuservice } from '../../../services/menuservice/menuservice';
import { MenuItem } from '../../../interfaces/menuitem';
import { effect, signal } from '@angular/core';
import { ApplicationMenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-application-menu',
  imports: [MatToolbarModule, MatMenuModule, ApplicationMenuItem, RouterLink],
  templateUrl: './application-menu.html',
  styleUrl: './application-menu.css',
})
export class ApplicationMenu {

  public menuItems? : MenuItem[];
  public buildMenu: boolean = false;



 constructor(private menuService : Menuservice) {

   
    
  effect(() => {
      
    
    this.menuItems = this.menuService.SignalMenuItems();

    if( this.menuItems != undefined && this.menuItems.length > 0  )
      
        this.refreshMenu();

    })


 }

 ngOnInit() {


 }


 private refreshMenu() {

    this.buildMenu = true;



 }

}
