import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { RegistroRoutingModule } from "./registro.routing";
import { FormsModule } from "@angular/forms";
import { registroApp } from "./registro.component";
import { PasoUno } from "./PasoUno/paso-uno.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistroRoutingModule,
        NativeScriptFormsModule,
        FormsModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        registroApp,
        PasoUno 
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class RegistroModule {}