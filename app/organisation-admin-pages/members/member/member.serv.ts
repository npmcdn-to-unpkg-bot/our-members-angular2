import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {HelperService} from "../../../services/helper/helper.serv";
import {HttpHandlerService} from "../../../services/http-handler/http-handler.serv";


@Injectable()
export class MemberService {
    constructor(private http: Http, private router: Router) {
        console.log('constructor MemberService');
    }

    static parseResponse(res: Response) {
        return res.json();
    }

    getMember(OrganisationMemberID: number): Observable<structOrganisationMember> {

        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID', 
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structOrganisationMember>(parameters, 'api/member', true);
    }

    getNextMemberNumber(): Observable<number> {
        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<number>(parameters, 'api/member/get-next-member-number', true);
    }

    saveNewMember(Member: structOrganisationMember): Observable<Response>{
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(Member, 'api/member');
    }


    updateMember(Member: structOrganisationMember) {
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.putObject(Member, 'api/member');
    }

    registerMember(OrganisationMemberID: number) {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<boolean>(parameters, 'api/member-list/register-member', true);
    }

    deleteMember(OrganisationMemberID: number) {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.deleteObject(parameters, 'api/member-list/delete-member');
    }

    testDeleteMember(OrganisationMemberID: number): Observable<structError> {
        var parameters: modSharedTypes.IHttpParameter[] = [];
        var parameter: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameter;

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structError>(parameters, 'api/member-list/test-delete', true);
    }

    getRegisterForSeasonData(OrganisationMemberID: number): Observable<structRegisterMemberFormData> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var parameterOrganisationMemberID: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters[0] = parameterOrganisationMemberID;

        var parameterCurrentDate: modSharedTypes.IHttpParameter = {
            name: 'sCurrentDate',
            value: HelperService.formatDateForJSon(new Date())
        };
        parameters[1] = parameterCurrentDate;

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structRegisterMemberFormData>(parameters, 'api/member-list/register-for-season', true);
    }

    saveRegisterForSeasonData(structsaveRegisterForSeasonData: structsaveRegisterForSeasonData): Observable<Response> {
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(structsaveRegisterForSeasonData, 'api/member-list/save-register-for-season');
    }


}























