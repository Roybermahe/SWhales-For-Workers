import { Component, ViewChild, ElementRef,OnInit } from "@angular/core";
import { takePicture, requestCameraPermissions} from "nativescript-camera";
import { RegistroService } from "~/services/registro.service";
import { PrestadorDeServicio } from "~/models/PrestadorDeServicio.model";
import { android } from "tns-core-modules/application/application";

@Component({
    selector: 'paso-uno',
    templateUrl: './paso-uno.component.html',
    styleUrls: ['./paso-uno.component.css']
})

export class PasoUno implements OnInit{
    @ViewChild('imageUser', { static: false }) imageUser: ElementRef;
    public stateButton: string = "Guardar Información";
    public Registro: PrestadorDeServicio = new PrestadorDeServicio();
    constructor(private registroService: RegistroService) { 
    }

    GuardarPasoUno() {
        this.registroService.PasoUnoEvent.emit(this.Registro);
    }

    async ngOnInit() {
        try {
            let registroLoad = await RegistroService.getRegistro();
            if(registroLoad != null) {
                this.Registro = registroLoad;
                if(registroLoad.imagePerfil) {
                    this.imageUser.nativeElement.src = android ? 
                    this.Registro.imagePerfil['_android'] : 
                    this.Registro.imagePerfil['_ios'] ;   
                }
            }
        } catch (error) {
            console.log('error -->' +  error);
        }
    }

    async CargarImagen() {
        await alert({
            title: 'Tip',
            message: "Colocate en un lugar con luz, estó ayudara a que se reconozca mejor tu rostro", 
            okButtonText: 'Continuar'
        });
        try {
            await requestCameraPermissions();
            const imageAsset = await takePicture({
                width: 100,
                height: 300,
                keepAspectRatio: true,
                saveToGallery: false,
                cameraFacing: 'front'
            });
            this.Registro.imagePerfil = imageAsset;
            this.imageUser.nativeElement.src = android ? 
                this.Registro.imagePerfil['_android']: 
                this.Registro.imagePerfil['_ios'];
        } catch (error) {
            console.log('error: ' + error);
        }
    }
}