//to show a popup:
//html:
//<popup></popup>

//ts:
//import {PopupComponent} from '../../utilities/popup/popup.comp';
//directives: [PopupComponent]
//@ViewChild(PopupComponent) popupComponent: PopupComponent;
//this.popupComponent.showPopup('blah blah');


import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../services/helper/helper.serv';

@Component({
moduleId: module.id,
    selector: 'popup',
    templateUrl: 'popup.html',
    styleUrls: ['popup.css'],
})
    
export class PopupComponent {
    constructor() {
        HelperService.log('constructor PopupComponent'); 
    }

    popupVisible: boolean = false;
    showPopup = (s: string) => {
        this.message = s;
        this.popupVisible = true;
        window.onkeyup = this.testEsc;
    }

    testEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
            event.stopPropagation();
            this.cancel();
        }
    }

    message: string = '';

    //cancelMember
    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    cancel = () => {
        window.onkeyup = null;
        this.popupVisible = false;
        this.closed.emit('');
    }
}