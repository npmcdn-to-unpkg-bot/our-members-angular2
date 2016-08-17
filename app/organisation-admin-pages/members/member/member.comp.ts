import {Component, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.serv";
import {MemberService} from "./member.serv";
import {AgGridNg2} from "ag-grid-ng2/main";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'memberModal',
    templateUrl: 'member.html',
    styleUrls: ['member.css'],
    providers: [MemberService],
    directives: [AgGridNg2]
})

export class MemberComponent {
    constructor(private router: Router, private memberService: MemberService) {
        HelperService.log('constructor MemberComponent');
    }

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
    IncrementMemberNumber: boolean;

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

    addMember = (IncrementMemberNumber: boolean) => {
        var addMemberThis = this;
        addMemberThis.IncrementMemberNumber = IncrementMemberNumber;
        addMemberThis.editMember = false;
        addMemberThis.Member = addMemberThis.getEmptyMember(addMemberThis.defaultCountryId);
        addMemberThis.memberVisible = true;
        if (IncrementMemberNumber) {
            var obs: Observable<number> = addMemberThis.memberService.getNextMemberNumber();
            obs.subscribe(updateMemberSuccess, logError);
        }
        function updateMemberSuccess(nextMemberNumber: number) {
            addMemberThis.Member.MemberNumber = nextMemberNumber.toString();
        }
        function logError() {
            HelperService.log('addMember Error');
        }
    }


    //////////////////////////////////////////////////////////////
    //get data
    loadMember = (OrganisationMemberID: number) => {
        var loadMemberThis = this;
        loadMemberThis.Member = loadMemberThis.getEmptyMember(0);
        if (HelperService.tokenIsValid()) {
            loadMemberThis.titleMember = 'Edit Member';
            loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
        } else {
            HelperService.sendToLogin(loadMemberThis.router)
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

            var filtered: number[] = memberGroupIDArray.filter(checkPresence);
            //if found
            if (filtered.length > 0) {
                node.setSelected(true);
            }
        }
        this.teamsGroupsGridOptions.api.refreshView();
        //this.teamsGroupsGridOptions.api.softRefreshView();
        function checkPresence(pGroupID: number) {
            return pGroupID === rowsToDisplayGroupID;
        }
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
                HelperService.sendToLogin(okClickedThis.router)
            }
        } else {
            if (HelperService.tokenIsValid()) {
                okClickedThis.memberService.saveNewMember(okClickedThis.Member).subscribe(updateMemberSuccess, logError);
            } else {
                HelperService.sendToLogin(okClickedThis.router)
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