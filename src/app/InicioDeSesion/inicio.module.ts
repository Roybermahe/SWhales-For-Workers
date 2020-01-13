import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { inicio } from "./inicio.component";
import { InicioRoutingModule } from "./inicio.routing";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InicioRoutingModule
    ],
    declarations: [
        inicio
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class InicioModule {}