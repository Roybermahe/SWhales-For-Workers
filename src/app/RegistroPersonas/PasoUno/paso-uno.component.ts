import { Component } from "@angular/core";
import { RegistroService } from "~/services/registro.service";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";


@Component({
    selector: 'paso-uno',
    templateUrl: './paso-uno.component.html',
    styleUrls: ['./paso-uno.component.css']
})

export class PasoUno {
    Registro: PrestadorDeServicio = new PrestadorDeServicio();
    constructor(private registroService: RegistroService) {}

    GuardarPasoUno() {
        this.registroService.PasoUnoEvent.emit(this.Registro);
    }
}