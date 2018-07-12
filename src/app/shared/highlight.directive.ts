import { Directive } from '@angular/core';
import { OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor( private elementRef: ElementRef) { }
ngOnInit(){
  this.elementRef.nativeElement.style.background = 'lightblue';
  this.elementRef.nativeElement.style.color = 'blue';
  this.elementRef.nativeElement.style.cursor= 'pointer';
}
}
