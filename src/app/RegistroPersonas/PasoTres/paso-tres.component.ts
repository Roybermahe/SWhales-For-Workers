import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { RegistroService } from "~/services/registro.service";
import { Referencia } from "~/models/Referencia.model";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { modalReferenceService } from "./modal-referenceservice.component";


@Component({
    selector: 'paso-tres',
    providers: [ ModalDialogService ],
    templateUrl: './paso-tres.component.html',
    styleUrls: ['./paso-tres.component.css']
})

export class PasoTres implements OnInit { 
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

    ngOnInit() {
        RegistroService.getRegistro()
        .then((registroLoad) => {
            registroLoad != null && registroLoad.ListaDeReferencias ?
            this.listaDeReferencias = registroLoad.ListaDeReferencias: null;
        }).catch(error => console.log('error' + error));
    }

    viewModalReference() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modal_Services.showModal(modalReferenceService, options);
    }

    async Eliminar(indice: number) {
        await alert({title: 'Eliminar referencia', message: "Se eliminara esta referencia de la lista", okButtonText: 'Aceptar'});
        this.listaDeReferencias.splice(indice, 1);
        this.registroService.ListaReferencias.emit(this.listaDeReferencias);
    }
}