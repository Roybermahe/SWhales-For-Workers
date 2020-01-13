import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: 'inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})

export class inicio {
    constructor(page: Page) { 
        page.actionBarHidden = true; 
    }
}