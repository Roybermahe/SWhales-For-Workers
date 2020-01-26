import { Injectable, EventEmitter } from "@angular/core";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";
import { ApplicationSettings } from "tns-core-modules";

const rutaDeHost = '';

@Injectable({
    providedIn: 'root'
})

export class RegistroService {
    public PasoUnoEvent  =   new EventEmitter<PrestadorDeServicio>();
    public PasoTresEvent =   new EventEmitter<Referencia>();

    // emitter for skills and references arrays
    public ListaReferencias = new EventEmitter<Referencia[]>();
    public ListaHabilidades = new EventEmitter<Habilidades[]>();
    constructor (){}
    
    public static async setRegistro(PrestadorDeServicio: PrestadorDeServicio) {
        try {
            await ApplicationSettings.setString('PrestadorDeServicio',JSON.stringify(PrestadorDeServicio));
        } catch (error) {
            console.log('error --> ' + error)
        }
    }

    public static async getRegistro() {
        try {
           const prestadorServicio = await ApplicationSettings.getString('PrestadorDeServicio');
           return prestadorServicio == null ? null: 
           <PrestadorDeServicio>JSON.parse(prestadorServicio); 
        } catch (error) {
            console.log('error --> ' + error)
            return null;
        }
    }

    public static async sendToRest() {
        
    }

    public static getTerminosCondiciones(): string {
        return '';
    }
}
