import {Component, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HelperService} from '../../../services/helper/helper.serv';
import {MemberListService} from './member-list.serv';
import {MemberService} from '../member/member.serv';
import {MemberComponent} from  '../member/member.comp';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {ConfirmComponent} from '../../../utilities/confirm/confirm.comp';
import {PopupComponent} from '../../../utilities/popup/popup.comp';


@Component({
    moduleId: module.id,
    selector: 'member-list',
    templateUrl: 'member-list.html',
    providers: [MemberListService, MemberService],
    directives: [AgGridNg2, MemberComponent, ConfirmComponent, PopupComponent]

})

export class MembersListComponent {
    constructor(private router: Router, private memberListService: MemberListService, private memberService: MemberService) {
        //constructor(private router: Router, private memberListService: MemberListService, private countriesService: CountriesService, private membershipTypesService: MembershipTypesService, private groupsService: GroupsService, popupComponent: PopupComponent) {
        HelperService.log('constructor RegisterComponent ');
    }

    @ViewChild(MemberComponent) memberComponent: MemberComponent;
    @ViewChild(ConfirmComponent) confirmComponent: ConfirmComponent;
    @ViewChild(PopupComponent) popupComponent: PopupComponent;

    ngOnInit() {
        this.loadMemberListData();
    }

    memberComponentClosed = (refreshList: string) => {
        if (refreshList === HelperService.C_TRUE) {
            this.loadMemberListData();
        }
        this.showMembershipList = true;
        this.showMembershipModal = false;
    }

    Members: any[];

    //////////////////////////////////////////////////////////////
    //get data
    loadMemberListData = () => {
        var loadMembersThis = this;

        if (HelperService.tokenIsValid()) {
            this.memberListService.getMemberListData().subscribe(onGetMemberListSuccess, logError);
        } else {
            HelperService.sendToLogin(this.router)
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
        this.showMembershipModal = true;
    }

    editMember = () => {
        var OrganisationMemberID: number = this.getSelectedOrganisationMemberID();
        this.showMembershipList = false;
        this.showMembershipModal = true;
        if (OrganisationMemberID === -1) {
            this.popupComponent.showPopup('Please select  a member to edit');
        } else {
            this.memberComponent.loadMember(OrganisationMemberID);
        }
    }

    deleteMember = () => {
        var deleteMemberThis = this;
        var OrganisationMemberID: number = this.getSelectedOrganisationMemberID();
        if (OrganisationMemberID === -1) {
            deleteMemberThis.popupComponent.showPopup('Please select  a member to edit');
        } else {
            deleteMemberThis.confirmComponent.showConfirm('Do you want to delete this member?', returnFunction)
        }
        function returnFunction() {
            var returnFunctionThis = deleteMemberThis;
            if (HelperService.tokenIsValid()) {
                returnFunctionThis.memberService.testDeleteMember(OrganisationMemberID).subscribe(onTestDeleteMember, logError);
            } else {
                HelperService.sendToLogin(returnFunctionThis.router)
            }
            function onTestDeleteMember(structError: structError) {
                if (structError.boolError) {
                    returnFunctionThis.popupComponent.showPopup(structError.ErrorMessage);
                } else {
                    returnFunctionThis.memberService.deleteMember(OrganisationMemberID).subscribe(onDeleteMember, logError);
                }
                function onDeleteMember() {
                    returnFunctionThis.loadMemberListData();
                }
            }

            function logError() {
                HelperService.log('loadMember Error');
            }
        }

    }

    registerMember = () => {
        var registerMemberThis = this;
        var OrganisationMemberID: number = this.getSelectedOrganisationMemberID();
        if (OrganisationMemberID === -1) {
            this.popupComponent.showPopup('Please select  a member to register');
        } else {
            if (HelperService.tokenIsValid()) {
                registerMemberThis.memberService.registerMember(OrganisationMemberID).subscribe(onRegisterMember, logError);
            } else {
                HelperService.sendToLogin(registerMemberThis.router)
            }
            function onRegisterMember() {
                this.popupComponent.showPopup('Member successfully regiserd');
            }

            function logError() {
                HelperService.log('loadMember Error');
            }

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
    showMembershipModal: boolean = false;
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
        this.showMembershipModal = true;
        var selectedMember: structOrganisationMember = <structOrganisationMember>params.data;
        this.memberComponent.loadMember(selectedMember.OrganisationMemberID);
        //this.showMemberModal = true;
    }

    gridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
}