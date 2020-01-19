import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { registroApp } from "./registro.component";
import { PasoUno } from "./PasoUno/paso-uno.component";
import { PasoDos } from "./PasoDos/paso-dos.component";
import { PasoTres } from "./PasoTres/paso-tres.component";

export const routes: Routes = [
    { path: '' , component: registroApp, children: [
        {   path: 'PasoUno' , component: PasoUno    },
        {   path: 'PasoDos', component: PasoDos     },
        {   path: 'PasoTres' , component: PasoTres  }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule] 
})

export class RegistroRoutingModule {}