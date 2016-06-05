/// <reference path="member-list.serv.ts" />
/// <reference path="../../helper/helper.serv.ts" />
/// <reference path="../organisation-admin-master/organisation-admin-master.comp.ts" />
import {Component, ViewChild} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberListService} from './member-list.serv';
import {MemberComponent} from  './member.comp';

import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    selector: 'member-list',
    templateUrl: 'app/organisation-admin-pages/members/member-list.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
    providers: [MemberListService], 
    directives: [AgGridNg2, MemberComponent]
})

export class MembersListComponent {
    constructor(private router: Router, private memberListService: MemberListService) {
        HelperService.log('constructor RegisterComponent ');
    }

    @ViewChild(MemberComponent) memberComponent: MemberComponent;


    ngOnInit() {
        this.loadMembers();
    }

    Members: any[];

    //////////////////////////////////////////////////////////////
    //get data
    loadMembers = () => {
        var loadMembersThis = this;

        if (HelperService.tokenIsValid()) {
            this.memberListService.getMemberList().subscribe(onGetMembersSuccess, logError);
        } else {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function logError(e: any) {
            console.log('getMembers Error');
            //loadMembersThis.getMembersSuccess = false;
        }

        function onGetMembersSuccess(data: any[]) {
            loadMembersThis.Members = data;
            loadMembersThis.gridOptions.api.setRowData(data);
            loadMembersThis.gridOptions.api.sizeColumnsToFit();
            //loadMembersThis.getMembersSuccess = true;
        }
    };

    /////////////////////////////////////////////////////////////
    //grid
    columnDefs: any[] = [

        { headerName: "Last Name", field: "LastName" },
        { headerName: "First Name", field: "FirstName" },
        { headerName: "Membership Type", field: "MembershipType" },
        { headerName: "M'ship To", field: "InvoicedTo" },
        { headerName: "Owing", field: "FeesOwing" }
    ];

    onRowClicked = (params: any) => {
    }

    onRowDoubleClicked = (params: any) => {
        var selectedMember: structOrganisationMember = <structOrganisationMember>params.data;
        this.memberComponent.loadMember(selectedMember.OrganisationMemberID);
    }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}