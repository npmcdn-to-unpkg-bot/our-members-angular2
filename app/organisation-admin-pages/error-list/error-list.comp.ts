import {Component, ViewChild} from '@angular/core';
import {ErrorListService} from './error-list.serv';
import {HelperService} from '../../services/helper/helper.serv';
import { Router, RouterLink } from '@angular/router';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {ErrorDisplayComponent} from './error-display.comp';


@Component({
    moduleId: module.id,
    selector: 'error-list',
    templateUrl: 'error-list.html',
    styleUrls: ['error-list.css'],
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
            this.router.navigate(['/home-page', 'login']);
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
            errorListThis.router.navigate(['/home-page', 'login']);
        }
        function logError(e: any) {
            HelperService.log('errorList Error');
        }

        function onErrorListSuccess(data: any) {
            errorListThis.router.navigate(['/organisation-admin-master', 'member-list']);
        }
    }


    errorDisplayClosed = (result: string) => {
        if (result === HelperService.C_TRUE) {
            this.loadErrors();
        }
        this.showErrorList = true;
    }
    showErrorList: boolean = true;
    //////////////////////////////////////////////
    //grid
    columnDefs: any[] = [
        { headerName: "ErrorDate", field: "sErrorDate", cellRenderer: HelperService.formatDateCellWithTime },
        { headerName: "Message", field: "Message" },
        { headerName: "Stack", field: "Stack" },
        { headerName: "UserName", field: "UserName" },
        { headerName: "OrganisationName", field: "OrganisationName" }
    ];

    onRowDoubleClicked = (params: any) => {
        this.showErrorList = false;
        var selectedError: structErrorDetails = <structErrorDetails>params.data;
        this.errorDisplayComponent.displayError(selectedError);
    }
    onRowClicked = () => { }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}
