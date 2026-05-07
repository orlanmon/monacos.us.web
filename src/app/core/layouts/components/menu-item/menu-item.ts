import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/menuitem';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class ApplicationMenuItem {

  @Input() menuItems? : MenuItem[] | null;
  

}
