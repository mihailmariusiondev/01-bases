import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor() { }

  agregar(event: any) {
    event.preventDefault();
    console.log("TEST")
  }

}
