import { Component } from "@angular/core";
import { RegistroService } from "~/services/registro.service";

@Component({
    selector: 'inicio-registro',
    template: `
    <ScrollView>
        <StackLayout width="90%">
            <Label width="80%"  textWrap="true" class="h3 title">
                <FormattedString>
                    <Span text="Algunos beneficios de usar "></Span>
                    <Span text="ServiceWhales" color="#46BAF9"></Span>
                </FormattedString>
            </Label>
            <Label text="A continuación realizaras tu registro en la plataforma, aqui tienes algunos de los beneficios que puedes obtener con nuestro servicio:" textWrap="true" class="description"></Label>
            <GridLayout rows="*" columns="*,40" class="input">
                <Label row="0" col="0" text="Has que tus servicios lleguen a mas personas" textWrap="true"  class="detail"></Label>
                <Label row="0" col="1" class="fa icon" text="&#xf067;"></Label>
            </GridLayout>
            <GridLayout rows="*" columns="*,40" class="input">
                <Label row="0" col="0" text="Comunicate con nuevos y antiguos clientes " textWrap="true"  class="detail"></Label>
                <Label row="0" col="1" class="fa icon" text="&#xf086;"></Label>
            </GridLayout>
            <GridLayout rows="*" columns="*,40" class="input">
                <Label row="0" col="0" text="Recibe notificaciones de nuevos empleos" textWrap="true"  class="detail"></Label>
                <Label row="0" col="1" class="fa icon" text="&#xf0f3;"></Label>
            </GridLayout>
            <GridLayout rows="*" columns="*,40" class="input">
                <Label row="0" col="0" text="Recibe puntuaciones sobre tu trabajo" textWrap="true" class="detail"></Label>
                <Label row="0" col="1" class="fa icon" text="&#xf005;"></Label>
            </GridLayout>
            <GridLayout rows="*" columns="*,40" class="input">
                <Label row="0" col="0" text="Expande tu negocio de forma sencilla" textWrap="true"  class="detail"></Label>
                <Label row="0" col="1" class="fa icon" text="&#xf201;"></Label>
            </GridLayout>
        </StackLayout>
    </ScrollView>
    `,
    styleUrls: ['./registro.component.css']
})

export class inicioRegistro {
    constructor() { }
}