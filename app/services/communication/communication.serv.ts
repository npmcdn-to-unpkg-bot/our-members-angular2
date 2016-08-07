import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
    constructor() {
        if (!CommunicationService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call CommunicationService.getInstance() instead.");
        }
    }

    static instance: CommunicationService;
    static isCreating: Boolean = false;

    static getInstance() {
        if (CommunicationService.instance == null) {
            CommunicationService.isCreating = true;
            CommunicationService.instance = new CommunicationService();
            CommunicationService.isCreating = false;
        }

        return CommunicationService.instance;
    }

    // Observable string sources
    private communicationLoggedOutSource = new Subject<boolean>();

    // Observable string streams
    loggedoutcommunication$ = this.communicationLoggedOutSource.asObservable();

    // Service message commands
    //function called by child to pass message to parent
    loggedoutCommunication(val: boolean) {
        this.communicationLoggedOutSource.next(val);
    }


    //// Observable string sources
    //private communicationLoggedOutSource1 = new Subject<boolean>();

    //// Observable string streams
    //loggedoutcommunication1$ = this.communicationLoggedOutSource1.asObservable();

    //// Service message commands
    ////function called by child to pass message to parent
    //loggedoutCommunication1(val: boolean) {
    //    this.communicationLoggedOutSource1.next(val);
    //}

}

