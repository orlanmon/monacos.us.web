import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Authservice } from './core/auth/services/authservice';
import { Menuservice } from './core/services/menuservice/menuservice';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => {
        
      var authService = inject(Authservice);
      //var menuService = inject(Menuservice);
        
        // Initial Guest User Access
        authService.initialize().subscribe( result => {
            ;
        } );

    })

  ]
};
