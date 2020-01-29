import { Component, OnInit } from "@angular/core";
import { RegistroService } from "~/services/registro.service";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";

@Component({
    selector: 'fin-registro',
    template:`
        <StackLayout stretchLastChild="true">
            <Label width="80%" textWrap="true" text="TERMINOS Y CONDICIONES DE USO DEL SERVICIO" class="h3 title"></Label>
            <GridLayout rows="*,auto" columns="*">
                <TextView row="0" col="0" [text]="terminosCondiciones" androidElevation="0" class="TyC"></TextView>
                <Button row="1" col="0" text="Finalizar registro" androidElevation="0" backgroundColor="#46BAF9" color="white" (tap)="envioDeRegistro()"></Button>
            </GridLayout>
        </StackLayout>
    `,
    styleUrls:['./registro.component.css']
})

export class finRegistro implements OnInit{
    public terminosCondiciones: string;
    public Registro = new PrestadorDeServicio();
    
    constructor() {
    }

    ngOnInit() {
        this.terminosCondiciones = RegistroService.getTerminosCondiciones();
    }


    async envioDeRegistro() {
        await alert({title: 'App', message: 'No cierres la aplicación la informacion esta siendo enviada (has click en Ok)', okButtonText: 'Ok'});
        let message = '';
        let Registro = await RegistroService.getRegistro();
        Registro == null ?
            message = 'no tienes datos guardados, revisa y guarda tu perfil, habilidades y referencias'
        :Registro && Registro.ListaDeHabilidades && Registro.ListaDeReferencias ? 
            message = await RegistroService.sendToRest() 
        : message =  'No tienes datos guardados de tus habilidades y referencias';
        alert({
            title: 'App',
            message: message,
            okButtonText: 'Ok'
        })
    }
}