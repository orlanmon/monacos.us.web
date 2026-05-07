import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Viewer from 'viewerjs';
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';

@Component({
  selector: 'app-about-web-site',
  imports: [],
  templateUrl: './about-web-site.html',
  styleUrl: './about-web-site.css',
})
export class AboutWebSite implements AfterViewInit {

 @ViewChild('application_design_image') imageElement!: ElementRef;

  constructor(private analyticsService: AnalyticsService) {
      
  
  }


  ngOnInit() {
      this.analyticsService.trackEvent("About Web Site Page", "About Web Site Page Accessed", "About Web Site Page Accessed" );

  }



ngAfterViewInit() {
    
    if ( this.imageElement) {

    const viewer = new Viewer(this.imageElement.nativeElement, {
      inline: false, // Set to true for embedded view
      viewed() {
        viewer.zoomTo(.75);
      },
    });

  }

  }


}
