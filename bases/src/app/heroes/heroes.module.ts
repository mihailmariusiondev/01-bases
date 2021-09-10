import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // componentes que tengo aqui
    // todo lo que se defina aquí es INVISIBLE exceptuando los componentes de este módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    // que cosas quiero hacer visibles fuera del módulo
    exports: [
        ListadoComponent
    ],

    // van modulos
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}