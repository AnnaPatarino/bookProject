import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitleColor]'
})
export class TitleColorDirective {

  constructor(private el: ElementRef) { }

 @HostListener('mouseenter') onEnter(){
  this.changeColor('red');
 }
//  @HostListener('mouseleave') onLeave(){
//   this.changeColor('white');
//  }

 changeColor(color: string){
  const checkbox = this.el.nativeElement.querySelector('ion-checkbox')
  const h1Element = this.el.nativeElement.querySelector('h2');
    
    if (checkbox.value === 'on') {
      h1Element.style.color = color;
    }
  }
}
