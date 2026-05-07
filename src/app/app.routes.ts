import { Routes } from '@angular/router';
import { Home } from './features/home/components/home/home';
import { Contact } from './features/contact/components/contact/contact';
import { About } from './features/about/components/about/about';
import { AboutWebSite } from './features/about/components/about-web-site/about-web-site';
import { HomeAutomation } from './features/homeautomation/components/home-automation/home-automation';
import { HomeAutomationViewer } from './features/homeautomation/components/home-automation-viewer/home-automation-viewer';
import { Signoutpage } from './core/auth/components/signoutpage/signoutpage';
import { Signinpage } from './core/auth/components/signinpage/signinpage';
import { Postsigninpage } from './core/auth/components/postsigninpage/postsigninpage';
import { homeautomationguardGuard } from './features/homeautomation/guards/homeautomationguard-guard';


export const routes: Routes = [

{
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'aboutwebsite',
    component: AboutWebSite
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'homeautomationviewer',
    component: HomeAutomationViewer
  },
    {
    path: 'homeautomation',
    component: HomeAutomation,
    canActivate: [homeautomationguardGuard] 
  },
  {
    path: 'signin',
    component: Signinpage
  },
  {
    path: 'signout',
    component: Signoutpage
  },
  {
    path: 'postsignin',
    component: Postsigninpage
  }

];
