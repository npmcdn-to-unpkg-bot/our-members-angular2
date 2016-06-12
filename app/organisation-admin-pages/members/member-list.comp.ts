import {Component, ViewChild} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberListService} from './member-list.serv';
import {MemberComponent} from  './member.comp';
import {CountriesService} from '../../services/countries/countries.serv';
import {MembershipTypesService} from '../../services/membership-type/membership-type.serv';

import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    selector: 'member-list',
    templateUrl: 'app/organisation-admin-pages/members/member-list.html',
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
    providers: [MemberListService, CountriesService, MembershipTypesService],
    directives: [AgGridNg2, MemberComponent]
})

export class MembersListComponent {
    constructor(private router: Router, private memberListService: MemberListService, private countriesService: CountriesService, private membershipTypesService: MembershipTypesService) {
        HelperService.log('constructor RegisterComponent ');
    }

    @ViewChild(MemberComponent) memberComponent: MemberComponent;


    ngOnInit() {
        this.loadMembers();
        this.loadCountries();
        this.loadMembershipTypes();
    }

    memberComponentClosed = () => {
        this.showList = true;
        this.showModal = false;
        this.loadMembers();
    }

    Members: any[];
    showList: boolean = true;
    showModal: boolean = false;

    countries: any[] = [];
    MembershipTypes: any[] = [];

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

    loadCountries = () => {
        var loadCountriesThis = this;
        this.countriesService.getCountries().subscribe(onGetCountriesSuccess, logCountriesError, complete);
        function logCountriesError(e: any) {
            console.log('getCountries Error');
            console.log(e);
        }

        function onGetCountriesSuccess(Countries: structIdName[]) {
            loadCountriesThis.countries = Countries;
        }
        function complete() {
            console.log('getCountries complete');
        }
    };

    loadMembershipTypes = () => {
        var loadMembershipTypesThis = this;
        this.membershipTypesService.getMembershipTypes().subscribe(onGetMembershipTypesSuccess, logMembershipTypesError, complete);
        function logMembershipTypesError(e: any) {
            console.log('getMembershipTypes Error');
            console.log(e);
        }

        function onGetMembershipTypesSuccess(MembershipTypes: structIdName[]) {
            loadMembershipTypesThis.MembershipTypes = MembershipTypes;
        }
        function complete() {
            console.log('getMembershipTypes complete');
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
        this.memberComponent.loadMember(selectedMember.OrganisationMemberID, this.countries, this.MembershipTypes);
        this.showList = false;
        this.showModal = true;
    }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}