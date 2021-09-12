import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // SIEMPRE se debería especificar un tipo de EventEmitter
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0) {
      return
    };

    // IMPORTANTE emitir el evento al padre
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
