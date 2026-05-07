import { Component } from '@angular/core';
import { Highlight } from '../../../../core/directives/highlight';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Viewer from 'viewerjs';
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit  {
 
  @ViewChild('application_design_image') imageElement!: ElementRef;

  constructor(private analyticsService: AnalyticsService) {
      
  
  }

  ngOnInit() {
      this.analyticsService.trackEvent("Home Page", "Home Page Accessed", "Home Page Accessed" );

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
