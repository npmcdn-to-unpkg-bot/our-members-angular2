import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {FooterButtonsService} from "./footer-buttons.serv";

@Component({
    moduleId: module.id,
    selector: 'footer-buttons',
    templateUrl: 'footer-buttons.html',
    styleUrls: ['footer-buttons.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [FooterButtonsService]
})

export class FooterButtons implements OnInit {
    constructor(private footerButtonsService: FooterButtonsService) {
        this.footerButtonsService.getDevOrProd().subscribe((s: string) => {
            this.prodOrDev = s
        });
    }
    prodOrDev: string;

    ngOnInit = () => {
        this.footerButtonsService.getDevOrProd().subscribe((s: string) => { this.prodOrDev = s });
    }
}