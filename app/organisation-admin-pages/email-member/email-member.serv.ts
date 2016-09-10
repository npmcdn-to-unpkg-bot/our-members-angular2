import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {HttpHandlerService} from "../../services/http-handler/http-handler.serv";

//import {HelperService} from '../../services/helper/helper.serv';
//import {HttpHandlerService} from  '../../services/http-handler/http-handler.serv';


@Injectable()
export class EmailMemberService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor EmailService');
    }

    sendEmail = (email: structEmailMembers)=> {
        console.log(email)
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(email, 'api/email');
    }


}























