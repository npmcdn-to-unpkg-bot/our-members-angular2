import {Component, ViewChild} from '@angular/core';
import {RecentLoginsService} from './recent-logins.serv';
import {HelperService} from '../../services/helper/helper.serv';
import { Router, RouterLink } from '@angular/router';
import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    moduleId: module.id,
    selector: 'recent-logins',
    templateUrl: 'recent-logins.html',
    providers: [RecentLoginsService],
    directives: [AgGridNg2]
})

export class RecentLoginsComponent {
    public recentLogins: any[] = [];

    constructor(public router: Router, private recentLoginsService: RecentLoginsService) {
        HelperService.log('constructor RecentLoginsComponent');
    }
    //load recentLogins when page loaded
    ngOnInit() {
        this.loadRecentLogins();
    }

    //////////////////////////////////////////////
    //get data
    loadRecentLogins = () => {
        var loadRecentThis = this;
        if (HelperService.tokenIsValid()) {
            this.recentLoginsService.getRecentLogins().subscribe(onGetRecentLoginsSuccess, logError);
        } else {
            this.router.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function logError(e: any) {
            HelperService.log('getErrors Error');
        }

        function onGetRecentLoginsSuccess(data: any) {
            loadRecentThis.recentLogins = data;
            loadRecentThis.gridOptions.api.setRowData(data);
            loadRecentThis.gridOptions.api.sizeColumnsToFit();
            HelperService.log('getErrors success');
        }
    }

    loadRecentClosed = (result: string) => {
        if (result === HelperService.C_TRUE) {
            this.loadRecentLogins();
        }
    }

    //////////////////////////////////////////////
    //grid
    columnDefs: any[] = [
        { headerName: "LoginAttemptDate", field: "sLoginAttemptDate", cellRenderer: HelperService.formatDateCellWithTime },
        { headerName: "UserName", field: "UserName" },
        { headerName: "Status", field: "Status" },
        { headerName: "OrganisationName", field: "OrganisationName" }
    ];

    onRowDoubleClicked = (params: any) => {
    }
    onRowClicked = () => { }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}
