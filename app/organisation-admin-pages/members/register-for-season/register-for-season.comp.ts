import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../../services/helper/helper.serv';

@Component({
    moduleId: module.id,
    selector: 'confirm',
    templateUrl: 'confirm.html',
    styleUrls: ['confirm.css']
})

export class RegisterForSeasonComponent {
    constructor() {
        HelperService.log('constructor ConfirmComponent');
    }

    visible: boolean = false;
    showForm = (OrganisationMemberID: number) => {
        this.visible = true;
        window.onkeyup = this.testEsc;
        //loadForm();
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
        this.visible = false;
        this.closed.emit('false');
    }

    ok = () => {
        window.onkeyup = null;
        this.visible = false;
        //this.returnFunction();
        this.closed.emit('true');
    }
}