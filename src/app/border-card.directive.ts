import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) { }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
 setBorder(color:string){
  this.el.nativeElement.style.border=`solid 4x ${color}`;
 }  

}
