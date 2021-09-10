import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    // componentes que tengo aqui
    // todo lo que se defina aquí es INVISIBLE exceptuando los componentes de este módulo
    declarations: [
        ContadorComponent,
    ],

    // que cosas quiero hacer visibles fuera del módulo
    exports: [
        ContadorComponent
    ],
})
export class ContadorModule {

}