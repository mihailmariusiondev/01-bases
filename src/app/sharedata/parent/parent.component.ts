import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})

export class ParentComponent {

  constructor(private elem: ElementRef) { }

  // @Input demo
  papaItem = '1st item state (new)'
  changeItem() {
    this.papaItem = '2nd item state (change)'
  }

  // @Output demo
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    console.log(`2. [Child Two to parent | @Output] ${this.elem.nativeElement.tagName.toLowerCase()} value recieved: ${newItem}`);
    this.items.push(newItem);
  }

  // @Input and @Output demo
  papaItemTwo = 'Television'
  deleteItem() {
    this.papaItemTwo = "";
  }

}
