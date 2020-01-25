import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { RegistroService } from "~/services/registro.service";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";

@Component({
    selector: 'registro-app',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class registroApp implements OnInit{
    steps: number = 0;
    @ViewChild('pasodos', null) pasoDosChild: ElementRef;
    @ViewChild('pasotres', null) pasoTresChild: ElementRef;
    public Registro: PrestadorDeServicio = new PrestadorDeServicio();
     
    constructor (private registroService: RegistroService) {
        this.registroService.PasoUnoEvent
            .subscribe( (Prestador: PrestadorDeServicio) => {
                this.Registro = Prestador;
                this.SaveRegistro();
                alert({
                    title: 'Perfil',
                    message: "la información de tu perfil fue guardada exitosamente", 
                    okButtonText: 'Continuar'
                });
            });
        this.registroService.ListaHabilidades
            .subscribe( (ListaHabilidades: Habilidades[]) => { 
                console.log(JSON.stringify(ListaHabilidades));
                this.Registro.ListaDeHabilidades = ListaHabilidades;
                this.SaveRegistro();
                alert({
                    title: 'Habilidades',
                    message: 'La habilidades han sido guardadas de forma exitosa', okButtonText: 'Continuar'
                });
             });
        this.registroService.ListaReferencias
            .subscribe( (ListaReferencias: Referencia[]) => {
                this.Registro.ListaDeReferencias = ListaReferencias;
                this.SaveRegistro();
            });
    }

    async ngOnInit() {
        const registroLoad = await RegistroService.getRegistro();
        registroLoad  ?
        this.Registro = registroLoad: null;

    }

    SaveRegistro(){
        RegistroService.setRegistro(this.Registro)
        .then(() => console.log('save'))
        .catch( error => console.log('error' + error));
    }
}