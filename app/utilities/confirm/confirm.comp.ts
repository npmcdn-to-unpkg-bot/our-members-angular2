import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../services/helper/helper.serv';

@Component({
moduleId: module.id,
    selector: 'confirm',
    templateUrl: 'confirm.html',
    styleUrls: ['confirm.css'],
    //styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'confirm.css'],
})

export class ConfirmComponent {
    constructor() {
        HelperService.log('constructor ConfirmComponent');
    }

    confirmVisible: boolean = false;
    returnFunction: () => void;
    showConfirm = (s: string, returnFunction: () => void) => {
        this.returnFunction = returnFunction;
        this.message = s;
        this.confirmVisible = true;
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
        this.confirmVisible = false;
        this.closed.emit('false');
    }

    ok = () => {
        window.onkeyup = null;
        this.confirmVisible = false;
        this.returnFunction();
        this.closed.emit('true');
    }
}