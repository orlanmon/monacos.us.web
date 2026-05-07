import { Component } from '@angular/core';
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  constructor(private analyticsService: AnalyticsService) {

  }

  ngOnInit() {


    this.analyticsService.trackEvent("Contact Page", "Contact Page Accessed", "Contact Page Accessed" );

  
}


}
