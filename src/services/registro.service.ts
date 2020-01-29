import { Injectable, EventEmitter } from "@angular/core";
import { ApplicationSettings, ImageSource, ImageAsset } from "tns-core-modules";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";
import { android } from "tns-core-modules/application/application";
import { dataService } from "./data.service";

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
    constructor (
        private dataService: dataService
    ){}
    
    public static async setRegistro(PrestadorDeServicio: PrestadorDeServicio) {
        try {
            await ApplicationSettings.setString('PrestadorDeServicio',JSON.stringify(PrestadorDeServicio));
        } catch (error) {
            console.log('error --> ' + error)
        }
    }

    public static setBase64Photo(asset: ImageAsset) {
        try {
            const img: ImageSource = ImageSource.fromFileSync((android ? asset['_android']: asset['_ios']));
            return img.toBase64String('png');
        } catch (error) {
            console.log('error --> ' + error);
            return '';
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
        let message = 'La información fue procesada y enviada satisfactoriamente';
       try {
        let Registro = await this.getRegistro();
        Registro.imagePerfil = this.setBase64Photo(Registro.imagePerfil);
        new dataService().toRest(Registro);
       } catch (error) {
           console.log('error --->' + error);
           message = 'Ocurrio un error, intentelo de nuevo mas tarde';
       }
        return message;
    }


    public static getTerminosCondiciones(): string {
        return '';
    }
}
