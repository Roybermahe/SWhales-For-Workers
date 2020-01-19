import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { HttpClientModule } from "@angular/common/http";
import { RegistroRoutingModule } from "./registro.routing";
import { FormsModule } from "@angular/forms";
import { registroApp } from "./registro.component";
import { PasoUno } from "./PasoUno/paso-uno.component";
import { PasoDos } from "./PasoDos/paso-dos.component";
import { PasoTres } from "./PasoTres/paso-tres.component";
import { modalService } from "./PasoTres/modal-service.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistroRoutingModule,
        NativeScriptFormsModule,
        FormsModule,
        NativeScriptUIDataFormModule,
        HttpClientModule 
    ],
    declarations: [
        registroApp,
        PasoUno,
        PasoDos,
        PasoTres,
        modalService
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ 
        modalService
    ]
})

export class RegistroModule {}