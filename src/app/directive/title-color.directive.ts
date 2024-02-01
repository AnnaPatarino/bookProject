import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonCheckbox } from '@ionic/angular';

export interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}

@Directive({
  selector: '[appTitleColor]'
})

export class TitleColorDirective {


  
  constructor(private el: ElementRef) { }

}
