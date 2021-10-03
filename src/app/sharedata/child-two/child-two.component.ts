import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styles: [
  ]
})
export class ChildTwoComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.addItemEvent.emit(value);
  }

}
