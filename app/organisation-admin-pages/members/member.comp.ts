import {Component, Output, EventEmitter} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {HelperService} from '../../helper/helper.serv';
import {MemberService} from './member.serv';

import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    selector: 'memberModal',
    templateUrl: 'app/organisation-admin-pages/members/member.html',
    //styles: ['.modalOurMembersVisible {display: block;}'],
    styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/members/member.css'],
    providers: [MemberService],
    directives: [AgGridNg2]
})

export class MemberComponent {
    constructor(private router: Router, private memberService: MemberService) {
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

        }

        function logError() {
            HelperService.log('getInvoice Error');
            loadMemberThis.getMemberSuccess = false;
        }
    };

    selectGroupsRows = () => {
        //array of grid rows holding all groups
        var allRows: any[] = this.teamsGroupsGridOptions.api.rowModel.allRows, i: number;
        //go through array getting groupID of each record
        for (i = 0; i < allRows.length; i++) {
            var allRowsGroupID = allRows[i].data.GroupID;
            var node = allRows[i];
            //filter the member GroupIDArray to see if this GroupID from the rows is present in it
            var Member = this.Member
            var memberGroupIDArray: number[] = Member.GroupIDArray;

            function checkPresence(pGroupID) {
                return pGroupID === allRowsGroupID;
            }
            var filtered: number[] = memberGroupIDArray.filter(checkPresence);
            //if found
            if (filtered.length > 0) {
                node.setSelected(true);
            }
        }
        //this.teamsGroupsGridOptions.api.refreshView();
        //this.teamsGroupsGridOptions.api.softRefreshView();
    }


    saveMember = () => {
        this.closed.emit('');
    }

    cancelMember = () => {
        this.closed.emit('');
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