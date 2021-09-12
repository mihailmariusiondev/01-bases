import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

// los servicios deben llevar el decorador @Injecatble
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        },
      ]

    // al usar el operador spread [...], JS manda una copia de la variable (por valor)
    // en vez de la variable original (por referencia)
    get personajes() : Personaje[]{
      return [...this._personajes];
    }

    constructor(){
    }

    agregarPersonaje(personaje : Personaje){
      this._personajes.push(personaje)
    }
}