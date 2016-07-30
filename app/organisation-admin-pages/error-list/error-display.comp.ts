import {Component, Output, EventEmitter} from '@angular/core';
//import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HelperService} from '../../services/helper/helper.serv';
import {ErrorDisplayService} from './error-display.serv';

@Component({
    moduleId: module.id,
    selector: 'errorDisplayModal',
    templateUrl: 'error-display.html',
    providers: [ErrorDisplayService]
})

export class ErrorDisplayComponent {
    constructor(private errorDisplayService: ErrorDisplayService) {
        HelperService.log('constructor ErrorDisplayComponent');
    }

    structError: structError = {
        ErrorID: -1,
        ErrorDate: new Date(),
        Message: '',
        Stack: '',
        UserName: '',
        OrganisationName: ''
    };

    ngOnInit() {
        
    }

    displayError = (structError: structError) => {
        this.structError = structError;
        this.errorDisplayVisible = true;
    }

    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    ErrorDisplay: structOrganisationMember;
    errorDisplayVisible: boolean = false;

    testEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
            event.stopPropagation();
            this.cancelErrorDisplay();
        }
    }

    deleteError = () => {
        var deleteErrorthis = this;
        this.errorDisplayService.deleteError(this.structError.ErrorID).subscribe(onDeleteErrorSuccess, onDeleteErrorError)
        function onDeleteErrorSuccess() {
            deleteErrorthis.errorDisplayVisible = false;
            deleteErrorthis.closed.emit(HelperService.C_TRUE);
            window.onkeyup = null;
        }
        function onDeleteErrorError() {
            HelperService.log('deleteError Error');
        }
    }

    cancelErrorDisplay = () => {
        window.onkeyup = null;
        this.errorDisplayVisible = false;
        this.closed.emit(HelperService.C_FALSE);
    }
}