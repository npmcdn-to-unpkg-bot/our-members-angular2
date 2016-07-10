import {Component, ViewChild} from '@angular/core';
import {ErrorListService} from './error-list.serv';
import {HelperService} from '../../helper/helper.serv';
import { Router, RouterLink } from '@angular/router-deprecated';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {ErrorDisplayComponent} from './error-display.comp';


@Component({
    selector: 'error-list',
    templateUrl: 'app/organisation-admin-pages/error-list/error-list.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/error-list/error-list.css'],
    providers: [ErrorListService, ErrorDisplayComponent],
    directives: [AgGridNg2, ErrorDisplayComponent]
})

export class ErrorListComponent {
    public errors: structIdName[] = [];

    constructor(public router: Router, private errorListService: ErrorListService) {
        HelperService.log('constructor ErrorListComponent');
    }
    //load errors when page loaded
    ngOnInit() {
        this.loadErrors();
    }

    @ViewChild(ErrorDisplayComponent) errorDisplayComponent: ErrorDisplayComponent;


    //////////////////////////////////////////////
    //get data
    loadErrors = () => {
        var loadErrorsThis = this;
        if (HelperService.tokenIsValid()) {
            this.errorListService.getErrors().subscribe(onGetErrorsSuccess, logError);
        } else {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function logError(e: any) {
            HelperService.log('getErrors Error');
        }

        function onGetErrorsSuccess(data: any) {
            loadErrorsThis.errors = data;
            loadErrorsThis.gridOptions.api.setRowData(data);
            loadErrorsThis.gridOptions.api.sizeColumnsToFit();
            HelperService.log('getErrors success');
        }
    }

    errorList = (Id: number) => {
        var errorListThis = this;
        if (HelperService.tokenIsValid()) {
            this.errorListService.getErrors().subscribe(onErrorListSuccess, logError);
        } else {
            errorListThis.router.parent.navigate(['Login']);
        }
        function logError(e: any) {
            HelperService.log('errorList Error');
        }

        function onErrorListSuccess(data: any) {
            errorListThis.router.navigate(['MembersList']);
        }
    }


    errorDisplayClosed = (result: string) => {
        if (result === HelperService.C_TRUE) {
            this.loadErrors();
        }
    }

    //////////////////////////////////////////////
    //grid
    columnDefs: any[] = [
        { headerName: "ErrorDate", field: "ErrorDate" },
        { headerName: "Message", field: "Message" },
        { headerName: "Stack", field: "Stack" },
        { headerName: "UserName", field: "UserName" },
        { headerName: "OrganisationName", field: "OrganisationName" }
    ];

    onRowDoubleClicked = (params: any) => {
        var selectedError: structError = <structError>params.data;
        this.errorDisplayComponent.displayError(selectedError);
    }
    onRowClicked = () => { }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}
