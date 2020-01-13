import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    {   path: "", redirectTo:"/InicioDeSesion", pathMatch:"full"   },
    {   path: "InicioDeSesion", loadChildren: () => import('./InicioDeSesion/inicio.module').then(m => m.InicioModule )  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
