import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { registroApp } from "./registro.component";
import { PasoUno } from "./PasoUno/paso-uno.component";
import { PasoDos } from "./PasoDos/paso-dos.component";

export const routes: Routes = [
    { path: '' , component: registroApp, children: [
        {   path: 'PasoUno' , component: PasoUno    },
        {   path: 'PasoDos', component: PasoDos     }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule] 
})

export class RegistroRoutingModule {}