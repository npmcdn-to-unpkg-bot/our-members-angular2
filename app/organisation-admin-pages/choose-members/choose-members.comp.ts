import {Component} from "@angular/core";
import {HelperService} from "../../services/helper/helper.serv";
//import {MemberService} from "../members/member/member.serv";


@Component({
    moduleId: module.id,
    selector: 'choose-members',
    templateUrl: 'choose-members.html'
    //styleUrls: ['register-for-season.css'],
    //providers: [MemberService]
})

export class ChooseMembersComponent {
    constructor() {
        HelperService.log('constructor ChooseMembersComponent');
    }

    C_Active: string = 'Active';
    C_Inactive: string = 'Inactive';
    C_Both: string = 'Both';

    C_Members: string = 'Members';
    C_TeamsGroups: string = 'TeamsGroups';
    C_MembershipType: string = 'MembershipType';

    applyFilters: boolean = true;
    memberGrid: boolean = false;
    membershipStatus: string = this.C_Active;
    memberFilter: string = this.C_Members;
}
