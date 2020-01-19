import { Component, ViewContainerRef } from "@angular/core";
import { RegistroService } from "~/services/registro.service";
import { Referencia } from "~/models/Referencia.model";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { modalService } from "./modal-service.component";


@Component({
    selector: 'paso-tres',
    providers: [ ModalDialogService ],
    templateUrl: './paso-tres.component.html',
    styleUrls: ['./paso-tres.component.css']
})

export class PasoTres { 
    public listaDeReferencias: Referencia[] = [];

    constructor(
        private registroService: RegistroService,
        private modal_Services : ModalDialogService,
        private viewContainerRef: ViewContainerRef
        ) {
            this.registroService.PasoTresEvent
            .subscribe( item => { this.listaDeReferencias.push(item);
                this.registroService.ListaReferencias.emit(this.listaDeReferencias);
            });
        }

    viewModalReference() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modal_Services.showModal(modalService, options);
    }

    async Eliminar(indice: number) {
        await alert({title: 'Eliminar referencia', message: "Se eliminara esta referencia de la lista", okButtonText: 'Aceptar'});
        this.listaDeReferencias.splice(indice, 1);
        this.registroService.ListaReferencias.emit(this.listaDeReferencias);
    }
}