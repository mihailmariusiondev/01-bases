import { Component, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }

  constructor(private dbzService : DbzService){
    // forma 1 de traer info del servicio en el constructor
    // this.personajes = this.dbzService.personajes;
  }

}
