import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]',    // Atribute Selector
  standalone: true
})
export class Highlight {

  @Input() highlightColor = "yellow";


  constructor(private elr : ElementRef) { 


  }



  @HostListener("mouseenter") onMouseEnter() {

      this.highlight(this.highlightColor);
      

  }

   @HostListener("mouseleave") onMouseLeave() {

    this.highlight('');
    
  }

  private highlight(color: string) {
    this.elr.nativeElement.style.backgroundColor = color;
  }


}
