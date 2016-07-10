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
        HelperService.log('constructor MemberComponent');
    }

    //loadData = (countries: any[], Groups: any[], MembershipTypes: any[], defaultCountryId: number) => {
    //    this.countries = countries;
    //    this.Groups = Groups;
    //    this.MembershipTypes = MembershipTypes;
    //    this.defaultCountryId = defaultCountryId;
    //}
    ngOnInit() {
        this.Member = this.getEmptyMember(0);
    }

    getEmptyMember = (defaultCountryId: number) => {
        var defaultMembershipTypeId: number;
        if (this.MembershipTypes === undefined) {
            defaultMembershipTypeId = -1;
        } else {
            if (this.MembershipTypes.length > 0) {
                defaultMembershipTypeId = this.MembershipTypes[0].MembershipTypeID;
            } else {
                defaultMembershipTypeId = -1;
            }
        }
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
            CountryID: defaultCountryId,
            EmailAddress: '',
            MemberNumber: '',
            LicenseNumber: '',
            MedicalNotes: '',
            PlayerNumber: '',
            MembershipTypeID: defaultMembershipTypeId,
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

    Member: structOrganisationMember;
    titleMember: string;
    editMember: boolean = false;
    memberVisible: boolean = false;

    ContactSelected: boolean = true;
    PersonalSelected: boolean = false;
    OrganisationSelected: boolean = false;

    //newMember = () => {
    //    this.memberVisible = true;
    //    window.onkeyup = this.testEsc;
    //    this.Member = this.getEmptyMember();
    //}

    testEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
            event.stopPropagation();
            this.cancelMember();
        }
    }

    cancelMember = () => {
        window.onkeyup = null;
        this.memberVisible = false;
        this.closed.emit(HelperService.C_FALSE);
    }

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
    defaultCountryId: number;

    loadObjects = (countries: any[], MembershipTypes: any[], Groups: any[], defaultCountryId: number) => {
        this.countries = countries;
        this.MembershipTypes = MembershipTypes;
        this.Groups = Groups;
        this.teamsGroupsGridOptions.api.setRowData(Groups);
        this.teamsGroupsGridOptions.rowSelection = 'multiple';
        this.teamsGroupsGridOptions.suppressRowClickSelection = true;
        this.defaultCountryId = defaultCountryId;
        window.onkeyup = this.testEsc;

    }

    addMember = () => {
        this.editMember = false;
        this.Member = this.getEmptyMember(this.defaultCountryId);
        this.memberVisible = true;
    }


    //////////////////////////////////////////////////////////////
    //get data
    loadMember = (OrganisationMemberID: number) => {
        var loadMemberThis = this;
        //loadMemberThis.Member = loadMemberThis.getEmptyMember();
        if (HelperService.tokenIsValid()) {
            loadMemberThis.titleMember = 'Edit Member';
            loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
        } else {
            loadMemberThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
        }
        function onGetMemberSuccess(Member: structOrganisationMember) {
            loadMemberThis.editMember = true;
            loadMemberThis.Member = Member;
            loadMemberThis.selectGroupsRows();
            HelperService.log('loadMember success');
            loadMemberThis.memberVisible = true;
            window.onkeyup = loadMemberThis.testEsc;
        }

        function logError() {
            HelperService.log('loadMember Error');
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
            okClickedThis.memberVisible = false;
            okClickedThis.closed.emit(HelperService.C_TRUE);
            window.onkeyup = null;
        }
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