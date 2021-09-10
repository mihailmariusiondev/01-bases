import { Component } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor() { }

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregar(event: any) {
    event.preventDefault();
    console.log(this.nuevo)
  }

}
