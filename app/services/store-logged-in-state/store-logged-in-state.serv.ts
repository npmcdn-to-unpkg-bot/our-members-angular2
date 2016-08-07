import { Injectable } from '@angular/core';
//import { Subject }    from 'rxjs/Subject';

@Injectable()
export class StoreLoggedInStateService {
    constructor() {
        if (!StoreLoggedInStateService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call StoreLoggedInStateService.getInstance() instead.");
        }
    }

    static instance: StoreLoggedInStateService;
    static isCreating: Boolean = false;

    static getInstance() {
        if (StoreLoggedInStateService.instance == null) {
            StoreLoggedInStateService.isCreating = true;
            StoreLoggedInStateService.instance = new StoreLoggedInStateService();
            StoreLoggedInStateService.isCreating = false;
        }

        return StoreLoggedInStateService.instance;
    }

    public loggedIn: boolean = false;
    public redirectUrl: string = '';
}

