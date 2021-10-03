import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styles: [
  ]
})
export class ChildThreeComponent {

  @Input() childThreeItem = '';
  @Output() deleteRequest = new EventEmitter<string>();

  constructor(private elem: ElementRef) {
    console.log(`1. Parent to Child Three and Child Three to Parent | @Input & @Output together ${this.elem.nativeElement.tagName.toLowerCase()} value (in constructor): ${this.childThreeItem}`)
  }

  delete() {
    console.log(`2. Parent to Child Three and Child Three to Parent | @Input & @Output together ${this.elem.nativeElement.tagName.toLowerCase()} value for deletion ${this.childThreeItem}`)

    this.deleteRequest.emit(this.childThreeItem);
  }
}
