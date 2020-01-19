import { Component, ViewChild, ElementRef } from "@angular/core";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { RegistroService } from "~/services/registro.service";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";

@Component({
    selector: 'registro-app',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class registroApp {
    steps: number = 0;
    @ViewChild('pasodos', null) pasoDosChild: ElementRef;
    @ViewChild('pasotres', null) pasoTresChild: ElementRef;
    public Registro: PrestadorDeServicio = new PrestadorDeServicio;
     
    constructor (private registroService: RegistroService) {
        this.registroService.PasoUnoEvent
            .subscribe( (Prestador: PrestadorDeServicio) => {
                this.Registro = Prestador;
                this.steps = 1;
            });
        this.registroService.PasoDosEvent
            .subscribe( (ListaHabilidades: Habilidades[]) => { 
                this.Registro.ListaDeHabilidades = ListaHabilidades;
                this.steps = 2;
             });
        this.registroService.ListaReferencias
            .subscribe( (ListaReferencias: Referencia[]) => {
                this.Registro.ListaDeReferencias = ListaReferencias;
            });
        
    }
}