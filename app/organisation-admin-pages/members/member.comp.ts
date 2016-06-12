import {Component, Output, EventEmitter} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberService} from './member.serv';

import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    selector: 'memberModal',
    templateUrl: 'app/organisation-admin-pages/members/member.html',
    //styles: ['.modalOurMembersVisible {display: block;}'],
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/members/member.css'],
    providers: [MemberService],
    directives: [AgGridNg2]
})

export class MemberComponent {
    constructor(private router: Router, private memberService: MemberService) {
        HelperService.log('constructor RegisterComponent ');
    }

    ngOnInit() {
    }

    clickOutside = (event: MouseEvent) => {
        this.cancelMember();
    }

    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    Member: any = {};
    titleMember: string;
    editMember: boolean = false;
    getMemberSuccess: boolean;

    ContactSelected: boolean = true;
    PersonalSelected: boolean = false;
    OrganisationSelected: boolean = false;

    unselectAll = () => {
        this.ContactSelected = false;
        this.PersonalSelected = false;
        this.OrganisationSelected = false;
    }

    ContactClicked = () => {
        this.unselectAll();
        this.ContactSelected = true;
    }

    PersonalClicked = () => {
        this.unselectAll();
        this.PersonalSelected = true;
    }

    OrganisationClicked = () => {
        this.unselectAll();
        this.OrganisationSelected = true;
    }

    countries: any;
    MembershipTypes: any;

    //////////////////////////////////////////////////////////////
    //get data
    loadMember = (OrganisationMemberID: number, countries: any, MembershipTypes: any) => {
        var loadMemberThis = this;
        this.countries = countries;
        this.MembershipTypes = MembershipTypes;
        this.Member = {};
        if (HelperService.tokenIsValid()) {
            loadMemberThis.titleMember = 'Edit Invoice';
            loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
        } else {
            loadMemberThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function onGetMemberSuccess(Member: structOrganisationMember) {
            loadMemberThis.editMember = true;
            loadMemberThis.Member = Member;
            loadMemberThis.getMemberSuccess = true;

        }
        function logError() {
            HelperService.log('getInvoice Error');
            loadMemberThis.getMemberSuccess = false;
        }
    };

    saveMember = () => {
        this.closed.emit('');
    }

    cancelMember = () => {
        this.closed.emit('');
    }
}