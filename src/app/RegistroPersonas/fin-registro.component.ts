import { Component, OnInit } from "@angular/core";
import { RegistroService } from "~/services/registro.service";

@Component({
    selector: 'fin-registro',
    template:`
        <StackLayout stretchLastChild="true">
            <Label width="80%" textWrap="true" text="TERMINOS Y CONDICIONES DE USO DEL SERVICIO" class="h3 title"></Label>
            <GridLayout rows="*,auto" columns="*">
                <TextView row="0" col="0" [text]="terminosCondiciones" androidElevation="0" class="TyC"></TextView>
                <Button row="1" col="0" text="Finalizar registro" androidElevation="0" backgroundColor="#46BAF9" color="white"></Button>
            </GridLayout>
        </StackLayout>
    `,
    styleUrls:['./registro.component.css']
})

export class finRegistro implements OnInit{
    public terminosCondiciones: string;
    
    constructor() {}

    ngOnInit() {
        this.terminosCondiciones = RegistroService.getTerminosCondiciones();
    }
}