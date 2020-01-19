import { Component, ViewChild, ElementRef, Directive } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/common";
import { Referencia } from "~/models/Referencia.model";
import { RegistroService } from "~/services/registro.service";


@Component({
    selector: 'modal-service',
    template: `
    <StackLayout style="margin-top:10; margin-bottom:10;">
        <Label class="detail text-center" text="Nueva referencia" textWrap="true"></Label>
        <TextField androidElevation="4" required #nombre hint="Nombres *" maxLength="20" class="input"></TextField>
        <TextField androidElevation="4" required #apellidos hint="Apellidos *" maxLength="30" class="input"></TextField>
        <TextField androidElevation="4" #email hint="Correo (opcional)" keyboardType = "email" class="input"></TextField>
        <TextField androidElevation="4" required #numero hint="Telefono *" keyboardType = "number" maxLength="10" class="input"></TextField>
        <Button class="btn btn-outline" text="Agregar referencia" (tap)="close()"  style="margin-top:20;"></Button>
    </StackLayout>`, 
    styleUrls: ['./paso-tres.component.css']
})

export class modalService {
    @ViewChild('nombre', { static: true}) nombre: ElementRef;
    @ViewChild('apellidos', { static: true}) apellidos: ElementRef;
    @ViewChild('email', { static: true}) email: ElementRef;
    @ViewChild('numero', { static: true}) numero: ElementRef;
    constructor( private modalParams: ModalDialogParams, private registerService: RegistroService) {}

    close() {
        const Referencia: Referencia = {
            Nombre: this.nombre.nativeElement.text.trim(),
            Apellidos: this.apellidos.nativeElement.text.trim(),
            NumeroDeContacto: <number>this.numero.nativeElement.text.trim(),
            CorreoDeContacto: this.email.nativeElement.text.trim()  
        }
        if(Referencia.Nombre.length > 0 && Referencia.Apellidos.length > 0 && Referencia.NumeroDeContacto > 0) {
            this.registerService.PasoTresEvent.emit(Referencia);
        }
        this.modalParams.closeCallback();
    }
}