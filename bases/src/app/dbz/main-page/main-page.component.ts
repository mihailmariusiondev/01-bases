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
  
  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    },    
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregar() {
    if(this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0) {
      return
    };
    
    // event.preventDefault();
    console.log(this.nuevo)

    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
