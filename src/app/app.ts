import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { Footer } from './core/layouts/components/footer/footer';
import { Signin } from './core/layouts/components/signin/signin';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ApplicationMenu } from './core/layouts/components/application-menu/application-menu';
import { ApplicationTreeView } from './core/layouts/components/application-tree-view/application-tree-view';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, Footer, Signin, MatMenuModule,ApplicationMenu, ApplicationTreeView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  protected readonly title = signal('MonacosUsWeb');


ngOnInit() {

    

}

}
