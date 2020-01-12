import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { inicio } from "./InicioDeSesion/inicio.component";


const routes: Routes = [
    {   path: "", redirectTo:"/InicioDeSesion", pathMatch:"full"   },
    {   path: "InicioDeSesion", component: inicio   }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
