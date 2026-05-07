import { Component } from '@angular/core';
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';

@Component({
  selector: 'app-home-automation-viewer',
  imports: [],
  templateUrl: './home-automation-viewer.html',
  styleUrl: './home-automation-viewer.css',
})
export class HomeAutomationViewer {

  constructor(private analyticsService: AnalyticsService) {


  }

   ngOnInit() {
      this.analyticsService.trackEvent("Home Automation View Page", "Home Automaton View Page Accessed", "Home Automaton View Page Accessed" );

  }
}
