/// <reference path="member-list.serv.ts" />
/// <reference path="../../helper/helper.serv.ts" />
/// <reference path="../organisation-admin-master/organisation-admin-master.comp.ts" />
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberListService} from './member-list.serv';

import {AgGridNg2} from 'ag-grid-ng2/main';
//import {GridOptions} from 'ag-grid/main';


@Component({
    selector: 'member-list',
    templateUrl: 'app/organisation-admin-pages/members/member-list.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
    directives: [ROUTER_DIRECTIVES, AgGridNg2],
    providers: [MemberListService]
})

export class MembersListComponent {
    constructor(private router: Router, private MemberListService: MemberListService) {
        console.log('constructor RegisterComponent ');
    }

    ngOnInit() {
        this.loadMembers();
    }

    Members: any[];

    //////////////////////////////////////////////////////////////
    //get data
    loadMembers = () => {
        var loadMembersThis = this;

        if (HelperService.tokenIsValid()) {
            this.MemberListService.getMemberList().subscribe(onGetMembersSuccess, logError);
        } else {
            this.router.navigate(['Login']);
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
    }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}