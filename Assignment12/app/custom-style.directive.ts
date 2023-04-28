import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef) 
  {
    this.ele.nativeElement.style.backgroundColor='yellow';
    this.ele.nativeElement.style.fontWeight="bold" 
  }

}
