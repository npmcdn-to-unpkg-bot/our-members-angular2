import {Component, ViewChild} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberListService} from './member-list.serv';
import {MemberComponent} from  './member.comp';
import {AgGridNg2} from 'ag-grid-ng2/main';



@Component({
    moduleId: module.id,
    selector: 'member-list',
    templateUrl: 'member-list.html',
    providers: [MemberListService],
    directives: [AgGridNg2, MemberComponent]

})

export class MembersListComponent {
    constructor(private router: Router, private memberListService: MemberListService) {
        //constructor(private router: Router, private memberListService: MemberListService, private countriesService: CountriesService, private membershipTypesService: MembershipTypesService, private groupsService: GroupsService, popupComponent: PopupComponent) {
        HelperService.log('constructor RegisterComponent ');
    }

    @ViewChild(MemberComponent) memberComponent: MemberComponent;

    ngOnInit() {
        this.loadMemberListData();
    }

    memberComponentClosed = (refreshList: string) => {
        if (refreshList === HelperService.C_TRUE) {
            this.loadMemberListData();
        }
        this.showMembershipList = true;
    }

    Members: any[];

    //////////////////////////////////////////////////////////////
    //get data
    loadMemberListData = () => {
        var loadMembersThis = this;

        if (HelperService.tokenIsValid()) {
            this.memberListService.getMemberListData().subscribe(onGetMemberListSuccess, logError);
        } else {
            this.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function logError(e: any) {
            console.log('getMembers Error');
            //loadMembersThis.getMembersSuccess = false;
        }

        function onGetMemberListSuccess(data: structMemberListData) {
            loadMembersThis.Members = data.Members;
            loadMembersThis.gridOptions.api.setRowData(loadMembersThis.Members);
            loadMembersThis.gridOptions.api.sizeColumnsToFit();
            loadMembersThis.rowSelected = false;
            loadMembersThis.memberComponent.loadObjects(data.Countries, data.MembershipTypes, data.Groups, data.defaultCountryId)
        }
    }

    getSelectedOrganisationMemberID = (): number => {
        var selectedMembers: structOrganisationMember[] = this.gridOptions.api.getSelectedRows();
        if (selectedMembers.length === 0) {
            return -1;
        } else {
            return selectedMembers[0].OrganisationMemberID;
        }
    }

    addMember = () => {
        this.memberComponent.addMember();
        this.showMembershipList = false;
    }

    editMember = () => {
        var OrganisationMemberID: number = this.getSelectedOrganisationMemberID();
        this.showMembershipList = false;
        if (OrganisationMemberID === -1) {
            alert('Please select a member to edit');
            //this.popupComponent.showPopup('Please select  a member to edit');
        } else {
            this.memberComponent.loadMember(OrganisationMemberID);
        }
    }

    /////////////////////////////////////////////////////////////
    //grid
    columnDefs: any[] = [

        { headerName: "Last Name", field: "LastName" },
        { headerName: "First Name", field: "FirstName" },
        { headerName: "Membership Type", field: "MembershipType" },
        { headerName: "M'ship To", field: "sMembershipPaidTo", cellRenderer: HelperService.formatDateCell },
        { headerName: "Owing", field: "FeesOwing" }
    ];

    showMembershipList: boolean = true;
    selectedMemberId: number;
    rowSelected: boolean = false;
    onRowClicked = (params: any) => {
        var onRowClickedThis = this;
        var selectedMember: structOrganisationMember = <structOrganisationMember>params.data;
        if (selectedMember === null) {
            onRowClickedThis.rowSelected = false;
        } else {
            onRowClickedThis.rowSelected = true;
            onRowClickedThis.selectedMemberId = selectedMember.OrganisationMemberID;
        }
    }

    onRowDoubleClicked = (params: any) => {
        this.showMembershipList = false;
        var selectedMember: structOrganisationMember = <structOrganisationMember>params.data;
        this.memberComponent.loadMember(selectedMember.OrganisationMemberID);
        //this.showMemberModal = true;
    }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}