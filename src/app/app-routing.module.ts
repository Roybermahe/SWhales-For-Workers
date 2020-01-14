import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    {   path: "", redirectTo:"/Registro", pathMatch:"full"   },
    {   path: "InicioDeSesion", loadChildren: () => import('./InicioDeSesion/inicio.module').then(m => m.InicioModule )  },
    {   path: "Registro" , loadChildren: () => import('./RegistroPersonas/registro.module').then(m => m.RegistroModule)  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
