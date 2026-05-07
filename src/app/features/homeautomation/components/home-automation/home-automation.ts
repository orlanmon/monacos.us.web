import { Component } from '@angular/core';
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';

@Component({
  selector: 'app-home-automation',
  imports: [],
  templateUrl: './home-automation.html',
  styleUrl: './home-automation.css',
})
export class HomeAutomation {

  constructor(private analyticsService: AnalyticsService) {

  }

  ngOnInit() {
      this.analyticsService.trackEvent("Home Automation Control Page", "Home Automaton Control Page Accessed", "Home Automaton Control Page Accessed" );

  }


}
