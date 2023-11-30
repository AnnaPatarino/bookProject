import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleColor]'
})
export class TitleColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red'
 }

}
