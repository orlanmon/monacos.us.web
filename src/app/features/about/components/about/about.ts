import { Component } from '@angular/core';
import { RouterLink, RouterModule} from "@angular/router";
import { AnalyticsService } from '../../../../core/services/analyticsservice/analytics-service';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

constructor(private analyticsService: AnalyticsService) {


}

 ngOnInit() {
      this.analyticsService.trackEvent("About Me Page", "About Me Page Accessed", "About Me Page Accessed" );

  }


}
