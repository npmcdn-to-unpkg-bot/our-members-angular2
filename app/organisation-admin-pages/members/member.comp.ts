﻿import {Component, Output, EventEmitter, ViewContainerRef} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberService} from './member.serv';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'memberModal',
    templateUrl: 'app/organisation-admin-pages/members/member.html',
    //styles: ['.modalOurMembersVisible {display: block;}'],
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/members/member.css'],
    providers: [MemberService],
    directives: [AgGridNg2]
})

export class MemberComponent {
    constructor(private router: Router, private memberService: MemberService,
        public modal: Modal, viewContainer: ViewContainerRef
    ) {
        //modal.defaultViewContainer = viewContainer;
        HelperService.log('constructor RegisterComponent ');
    }

    ngOnInit() {
    }

    clickOutside = (event: MouseEvent) => {
        this.cancelMember();
    }

    getEmptyMember = () => {
        var member: structOrganisationMember = {
            OrganisationMemberID: 0,
            FirstName: '',
            LastName: '',
            Phone1: '',
            Phone2: '',
            Phone3: '',
            StreetAddress1: '',
            StreetAddress2: '',
            Suburb: '',
            Postcode: '',
            State: '',
            CountryID: 0,
            EmailAddress: '',
            MemberNumber: '',
            LicenseNumber: '',
            MedicalNotes: '',
            PlayerNumber: '',
            MembershipTypeID: 0,
            MembershipPaidTo: '', //date
            InvoicedTo: '',
            BalanceOwing: '',
            Gender: '',
            DateOfBirth: '', //date
            ContactPerson: '',
            Comments: '',
            GroupIDArray: [],
            Active: false,
            Fax: '',
            Title: '',
            StartDate: '', //date
            PhoneName1: '',
            PhoneName2: '',
            PhoneName3: '',
            MiddleName: '',
            MedicareNumber: '',
            Ambulance: '',
            PhotoVideo: '',
            BirthCertificateNumber: '',
            HairColour: '',
            EyeColour: '',
            Volunteer: '',
            Accreditation: '',
            ReceivesMail: false,
            boolMmembershipInvoiceEntered: false
        }
        return member;
    }

    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    Member: structOrganisationMember = this.getEmptyMember();
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
        //can only resize a grid when it is visible
        this.teamsGroupsGridOptions.api.sizeColumnsToFit();
    }

    countries: any[];
    MembershipTypes: any[];
    Groups: any[];

    //////////////////////////////////////////////////////////////
    //get data
    loadMember = (OrganisationMemberID: number, countries: any[], MembershipTypes: any[], Groups: any[]) => {
        var loadMemberThis = this;
        loadMemberThis.countries = countries;
        loadMemberThis.MembershipTypes = MembershipTypes;
        loadMemberThis.Groups = Groups;
        loadMemberThis.teamsGroupsGridOptions.api.setRowData(Groups);
        loadMemberThis.teamsGroupsGridOptions.rowSelection = 'multiple';
        loadMemberThis.teamsGroupsGridOptions.suppressRowClickSelection = true;

        loadMemberThis.Member = loadMemberThis.getEmptyMember();
        if (HelperService.tokenIsValid()) {
            loadMemberThis.titleMember = 'Edit Member';
            loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
        } else {
            loadMemberThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function onGetMemberSuccess(Member: structOrganisationMember) {
            loadMemberThis.editMember = true;
            loadMemberThis.Member = Member;
            loadMemberThis.getMemberSuccess = true;
            loadMemberThis.selectGroupsRows();
            HelperService.log('loadMember success');
        }

        function logError() {
            HelperService.log('loadMember Error');
            loadMemberThis.getMemberSuccess = false;
        }
    };

    selectGroupsRows = () => {
        //array of grid rows holding all groups
        var rowsToDisplay: any[] = this.teamsGroupsGridOptions.api.rowModel.rowsToDisplay, i: number;
        //go through array getting groupID of each record
        for (i = 0; i < rowsToDisplay.length; i++) {
            var rowsToDisplayGroupID = rowsToDisplay[i].data.GroupID;
            var node = rowsToDisplay[i];
            //filter the member GroupIDArray to see if this GroupID from the rows is present in it
            var Member = this.Member
            var memberGroupIDArray: number[] = Member.GroupIDArray;

            function checkPresence(pGroupID) {
                return pGroupID === rowsToDisplayGroupID;
            }
            var filtered: number[] = memberGroupIDArray.filter(checkPresence);
            //if found
            if (filtered.length > 0) {
                node.setSelected(true);
            }
        }
        this.teamsGroupsGridOptions.api.refreshView();
        //this.teamsGroupsGridOptions.api.softRefreshView();
    }


    saveMember = () => {
        var okClickedThis = this;
        if (okClickedThis.editMember) {
            if (HelperService.tokenIsValid()) {
                var i: number;
                var rows: any[] = okClickedThis.teamsGroupsGridOptions.api.getSelectedRows();
                okClickedThis.Member.GroupIDArray = [];
                for (i = 0; i < rows.length; i++) {
                    okClickedThis.Member.GroupIDArray[i] = rows[i].GroupID;
                }

                okClickedThis.memberService.updateMember(okClickedThis.Member).subscribe(updateMemberSuccess, logError);
            } else {
                okClickedThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
        } else {
            if (HelperService.tokenIsValid()) {
                okClickedThis.memberService.saveNewMember(okClickedThis.Member).subscribe(updateMemberSuccess, logError);
            } else {
                okClickedThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
        }

        function logError(obj: any) {
            HelperService.log(JSON.stringify(obj));
            alert(JSON.stringify(obj));
        }
        function updateMemberSuccess() {
            okClickedThis.closed.emit('true');
        }
    }

    cancelMember = () => {
        this.closed.emit('false');
    }


    showModalMessage() {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .open();
    }


    /////////////////////////////////////////////////////////////
    //grid
    columnDefs: any[] = [

        { headerName: "GroupID", field: "[GroupID]", hide: true },
        { headerName: "Name", field: "Name", checkboxSelection: true }
    ];

    onRowClicked = (params: any) => {
    }

    onRowDoubleClicked = (params: any) => {
    }
    teamsGroupsGridOptions: any = HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);

}