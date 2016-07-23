import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

    // Observable string sources
    private communicationLoggedOutSource = new Subject<boolean>();

    // Observable string streams
    loggedoutcommunication$ = this.communicationLoggedOutSource.asObservable();

    // Service message commands
    //function called by child to pass message to parent
    loggedoutCommunication(val: boolean) {
        this.communicationLoggedOutSource.next(val);
    }
}

