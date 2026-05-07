import { Component } from '@angular/core';
import { DatePipe} from "@angular/common";
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

   public currentDateTime: Date = new Date();
   private timerId: any;

ngOnInit() {
    this.timerId = setInterval(() => {
      this.currentDateTime = new Date(); // Update the time
    }, 5000); // Every 5 Seconds
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId); // Cleanup
    }
  }





}
