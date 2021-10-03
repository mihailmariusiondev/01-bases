import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styles: [
  ]
})
export class ChildThreeComponent  {

  @Input() childThreeItem = '';
  @Output() deleteRequest = new EventEmitter<string>();

  delete() {
    this.deleteRequest.emit(this.childThreeItem);
  }


  @Output() addItemEvent = new EventEmitter<string>();

  changeItem(value: string) {
    this.addItemEvent.emit(value);
  }

}
