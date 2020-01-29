import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";

@Injectable({
    providedIn: 'root'
})

export class dataService {
    private apiRestURL = 'https://angular-curso-71e35.firebaseio.com/AngularPresupuesto.json';
    constructor ( private httpService: HttpClient) {}

    public toRest(registroPrestador: PrestadorDeServicio ) {
        let options = new HttpHeaders({
            "Content-Type": "application/json"
        });
        this.httpService.post(this.apiRestURL, {registroPrestador},{headers: options})
            .subscribe(
                response => console.log('Guardar persona: ' + response),
                error =>  console.log('Ocurrio un error: ' + error)
        );
    }


}