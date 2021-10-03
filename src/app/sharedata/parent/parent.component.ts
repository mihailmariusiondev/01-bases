import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})

export class ParentComponent   {

  // @Input demo
  papaItem = 'I am normal'
  changeItem(){
    this.papaItem = 'GO POWER RANGERS'
  }

  // @Output demo
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  // @Input and @Output demo
  papaItemTwo = 'Television'
  deleteUser() {
    this.papaItemTwo = "";
  }

}
