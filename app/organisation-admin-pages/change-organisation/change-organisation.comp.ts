/// <reference path="../../../iblong2.d.ts" />
//import {Response} from '@angular/http';
import {Component} from '@angular/core';
import {ChangeOrganisationService} from './change-organisation.serv';
import {HelperService} from '../../services/helper/helper.serv';
import { Router, RouterLink } from '@angular/router-deprecated';
import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    moduleId: module.id,
    selector: 'change-organisation',
    templateUrl: 'change-organisation.html',
    providers: [ChangeOrganisationService],
    directives: [AgGridNg2]
})

export class ChangeOrganisationComponent {
    public organisations: structIdName[] = [];

    constructor(public router: Router, private changeOrganisationService: ChangeOrganisationService) {
        HelperService.log('constructor ChangeOrganisationComponent');
    } 
    //load Organisations when page loaded
    ngOnInit() {
        this.loadOrganisations();
    }

    //////////////////////////////////////////////
    //get data


    loadOrganisations = () => {
        var loadOrganisationsThis = this;
        if (HelperService.tokenIsValid()) {
            this.changeOrganisationService.getOrganisations().subscribe(onGetOrganisationsSuccess, logError);
        } else {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function logError(e: any) {
            HelperService.log('getOrganisations Error');
        }

        function onGetOrganisationsSuccess(data: any) {
            loadOrganisationsThis.organisations = data;
            loadOrganisationsThis.gridOptions.api.setRowData(data);
            loadOrganisationsThis.gridOptions.api.sizeColumnsToFit();
            HelperService.log('getOrganisations success');
        }
    }

    changeOrganisation = (Id: number) => {
        var changeOrganisationThis = this, Id: number;
        if (HelperService.tokenIsValid()) {
            this.changeOrganisationService.changeOrganisation(Id).subscribe(onChangeOrganisationSuccess, logError);
        } else {
            changeOrganisationThis.router.parent.navigate(['Login']);
        }
        function logError(e: any) {
            HelperService.log('changeOrganisation Error');
        }

        function onChangeOrganisationSuccess(data: any) {
            changeOrganisationThis.router.navigate(['MembersList']);
        }
    }


    //////////////////////////////////////////////
    //grid
    columnDefs: any[] = [
        { headerName: "Id", field: "Id", hide: true },
        { headerName: "Entity", field: "name" }
    ];

    onRowDoubleClicked = (params: any) => {
        var selectedOrganisation: structIdName = <structIdName>params.data;
        this.changeOrganisation(selectedOrganisation.Id);
        //this.router.navigate(['LedgerAccounts']);
    }

    onRowClicked = () => { }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}
