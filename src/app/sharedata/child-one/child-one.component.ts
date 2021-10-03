import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styles: [
  ]
})

export class ChildOneComponent implements OnChanges{
  @Input() childOneItem = ''; // decorate the property with @Input()
  index = 1;

  constructor(private elem: ElementRef){
    console.log(`1. [Parent to Child One | @Input] ${ this.elem.nativeElement.tagName.toLowerCase()} value (in constructor): ${this.childOneItem}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.


    console.log(`${this.index+=1}. [Parent to Child One | @Input] ${ this.elem.nativeElement.tagName.toLowerCase()} parent sends value (ngOnChanges): ${this.childOneItem}`)
  }


}
