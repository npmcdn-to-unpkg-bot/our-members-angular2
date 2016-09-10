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
        return httpHandlerService.getObject<structOrganisationMember>(parameters, 'api/member', true, false);
    }

    getNextMemberNumber(): Observable<number> {
        var parameters: modSharedTypes.IHttpParameter[] = [];

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<number>(parameters, 'api/member/get-next-member-number', true, false);
    }

    saveNewMember(Member: structOrganisationMember): Observable<Response> {
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
        return httpHandlerService.getObject<boolean>(parameters, 'api/member-list/register-member', true, false);
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
        return httpHandlerService.getObject<structError>(parameters, 'api/member-list/test-delete', true, false);
    }

    getRegisterForSeasonData(OrganisationMemberID: number): Observable<structRegisterMemberFormData> {

        var parameters: modSharedTypes.IHttpParameter[] = [];

        var parameterOrganisationMemberID: modSharedTypes.IHttpParameter = {
            name: 'OrganisationMemberID',
            value: OrganisationMemberID.toString()
        };
        parameters.push(parameterOrganisationMemberID);

        var parameterCurrentDate: modSharedTypes.IHttpParameter = {
            name: 'sCurrentDate',
            value: HelperService.formatDateForJSon(new Date())
        };
        parameters.push(parameterCurrentDate);

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structRegisterMemberFormData>(parameters, 'api/member-list/register-for-season', true, false);
    }

    saveRegisterForSeasonData(structsaveRegisterForSeasonData: structsaveRegisterForSeasonData): Observable<Response> {
        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.postObject(structsaveRegisterForSeasonData, 'api/member-list/save-register-for-season');
    }

    getFilteredMembers(structChooseMembers: structChooseMembers): Observable<any> {
        var parameters: modSharedTypes.IHttpParameter[] = [];

        //membershipStatus As String, memberFilter As String, sGroupIDArray As String, MembershipTypeID As String)

        parameters.push({
            name: 'membershipStatus',
            value: structChooseMembers.membershipStatus
        });

        parameters.push({
            name: 'memberFilter',
            value: structChooseMembers.memberFilter
        });


        //convert aray of GroupID to comma separated string
        var s: string = '', i: number;
        if (structChooseMembers.teamsGroups === null) {
            s = '-1';
        } else {
            for (i = 0; i < structChooseMembers.teamsGroups.length; i++) {
                s += structChooseMembers.teamsGroups[i].GroupID.toString();
                if (i < structChooseMembers.teamsGroups.length - 1) {
                    s += ',';
                }
            }
        }
        parameters.push({
            name: 'sGroupIDArray',
            value: s
        });

        if (structChooseMembers.membershipType=== null){
            parameters.push({
                name: 'membershipType',
                value: '-1'
            });
        } else {
            parameters.push({
                name: 'membershipType',
                value: structChooseMembers.membershipType
            });
        }

        // parameters.push({
        //     name: 'MembershipTypeID',
        //     value: structChooseMembers.MembershipTypeID
        // });

        var httpHandlerService = new HttpHandlerService(this.http, this.router);
        return httpHandlerService.getObject<structRegisterMemberFormData>(parameters, 'api/member/get-filtered-members', true, false);
    }

}























