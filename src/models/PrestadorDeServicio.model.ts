import { Injectable } from "@angular/core";
import { Habilidades } from "~/models/Habilidades.model";
import { Referencia } from "~/models/Referencia.model";
import { ImageAsset } from "tns-core-modules";

@Injectable({
    providedIn: 'root'
})

export class PrestadorDeServicio {
    private ID_KEY?:        number;
    imagePerfil?:           ImageAsset;
    profesion:              string;
    DescripcionPerfil:      string;
    AniosDeExperiencia:     number;
    NumContacto:            number;
    ListaDeHabilidades?:    Habilidades[];
    ListaDeReferencias?:    Referencia[];
    private EtapaActual?:    number;
    private FechaDeProceso?: Date;

    constructor(){}
    
    public get key() : number {
        return this.ID_KEY;
    }
    
    public set key(ID_KEY : number) {
        this.ID_KEY = ID_KEY;
    }
    
    public get Etapa() : number {
        return this.EtapaActual;
    }

    public set Etapa(EtapaActual : number) {
        this.EtapaActual = EtapaActual;
    }
    
    public get FechaProceso() : Date {
        return this.FechaDeProceso;
    }
    
    public set FechaProceso(Fecha : Date) {
        this.FechaDeProceso = Fecha;
    }
}