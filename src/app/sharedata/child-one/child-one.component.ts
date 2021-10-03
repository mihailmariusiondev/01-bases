import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styles: [
  ]
})

export class ChildOneComponent implements OnChanges{
  @Input() childOneItem = ''; // decorate the property with @Input()

  constructor(){
    console.log("CHILD item before everything (constructor): ", this.childOneItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("CHILD item OnChanges (@Input changes): ", changes);
  }


}
