import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../helper/helper.serv';

@Component({
    selector: 'popup',
    templateUrl: 'app/utilities/popup/popup.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css','app/utilities/popup/popup.css'],
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