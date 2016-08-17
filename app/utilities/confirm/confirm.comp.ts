import {Component, Output, EventEmitter} from "@angular/core";
import {HelperService} from "../../services/helper/helper.serv";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'confirm',
    templateUrl: 'confirm.html',
    styleUrls: ['confirm.css']
    //styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'confirm.css'],
})

export class ConfirmComponent {
    constructor() {
        HelperService.log('constructor ConfirmComponent');
    }

    confirmVisible: boolean = false;

    showConfirm = (s: string): Observable<boolean> => {
        this.message = s;
        this.confirmVisible = true;
        window.onkeyup = this.testEsc;

        var observable: Observable<boolean> = new Observable<boolean>((sender: Observer<boolean>) => {this.observer = sender;});
        return observable;
    };

    testEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
            event.stopPropagation();
            this.returnResult(false);
        }
    };

    message: string = '';

    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    observer: Observer<boolean>;

    returnResult = (result: boolean): boolean => {
        window.onkeyup = null;
        this.confirmVisible = false;
        if (result) {
            this.closed.emit('true');
        } else {
            this.closed.emit('false');
        }
        this.observer.next(result);
        this.observer.complete();
        return result;
    }
}

