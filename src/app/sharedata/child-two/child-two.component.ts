import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styles: [
  ]
})
export class ChildTwoComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  constructor(private elem: ElementRef){}

  addNewItem(value: string) {
    if(!value) return;
    console.log(`1. [Child Two to parent | @Output] ${ this.elem.nativeElement.tagName.toLowerCase()} value sent: ${value}`)
    this.addItemEvent.emit(value);
  }

}
