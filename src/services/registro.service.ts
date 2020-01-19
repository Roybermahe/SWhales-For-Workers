import { Injectable, EventEmitter } from "@angular/core";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";

const rutaDeHost = '';

@Injectable({
    providedIn: 'root'
})

export class RegistroService {
    public PasoUnoEvent  =   new EventEmitter<PrestadorDeServicio>();
    public PasoDosEvent  =   new EventEmitter<Habilidades>();
    public PasoTresEvent =   new EventEmitter<Referencia>();
    public ListaReferencias = new EventEmitter<Referencia[]>();
    constructor (/*private httpClient: HttpClient*/){}

    async GuardarRegistro(PrestadorDeServicio: PrestadorDeServicio) {
       /* this.httpClient.put(rutaDeHost, PrestadorDeServicio)
            .subscribe(
                Response => console.log(Response), 
                error => console.log(error)
            ); */
    }
}
