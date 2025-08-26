import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]',
  standalone: true
})
export class ColorsDirective {
  colors = [
    'AliceBlue',
    'Aqua',
    'LightBlue',
    'LightGrey',
    'White'
  ]

  i = 0
  constructor() { }

  @HostBinding('style.background-color') bgColor:string='White'

  @HostListener('click') changeColor(){
    this.bgColor = this.colors[this.i]
    this.i = ++this.i%this.colors.length
  }
}
