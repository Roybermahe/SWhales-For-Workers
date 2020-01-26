import { Component, OnInit } from "@angular/core";
import { RegistroService } from "~/services/registro.service";
import { Habilidades } from "~/models/Habilidades.model";


const opciones = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom", "Otro"];

@Component({
    selector: 'paso-dos',
    templateUrl: './paso-dos.component.html',
    styleUrls: ['./paso-dos.component.css']
})

export class PasoDos implements OnInit {
    public ListaDeHabilidades: Habilidades[] = [];
    public listaDeOpciones: CheckedList[] = [];
    constructor(
        private registroService: RegistroService
    ) { 
    }

    async ngOnInit() {
        await opciones.forEach((element, index) => {
            this.listaDeOpciones.push({ Id: index, State: false, Text: element });
        });
        let registroLoad = await RegistroService.getRegistro()
        registroLoad != null && registroLoad.ListaDeHabilidades ?
            registroLoad.ListaDeHabilidades.forEach( async(skill) => {
                await this.buscarChecked(skill.Nombre);
            }) : null ; 
    }

    async GuardarLista() {
        try {
            this.ListaDeHabilidades = [];
            const cantidad = await this.listaDeOpciones.filter(item => item.State == true).length;
            if (cantidad > 0 && cantidad <= 5) {
                this.listaDeOpciones.filter(item => item.State == true).forEach((item) => {
                        this.ListaDeHabilidades.push({ Nombre: item.Text });
                });
                this.registroService.ListaHabilidades.emit(this.ListaDeHabilidades);
            }
            else { 
                alert({title: 'Habilidades', message: 'No se admiten '+ cantidad +' habilidades', okButtonText: 'Continuar'}) ;
            }
        } catch(error) {
            console.log('error -->' + error);
        }
    }

    async buscarChecked(skill: string) {
        this.listaDeOpciones.find(item => item.Text == skill).State = true;
    }

}

interface CheckedList {
    Id: number,
    Text: string,
    State: boolean
}