import {Component, OnInit, ViewChild, Output, EventEmitter} from "@angular/core";
import {HelperService} from "../../services/helper/helper.serv";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {MembershipTypesService} from "../../services/membership-type/membership-type.serv";
import {TeamsGroupsService} from "../../services/teams-groups/teams-groups.serv";
import {AgGridFormControl} from "../../utilities/ag-grid-formcontrol/ag-grid-formcontrol";
import {AgGridNg2} from "ag-grid-ng2/main";
import {GridOptions} from "ag-grid/main";
import {MemberService} from "../members/member/member.serv";

@Component({
    moduleId: module.id,
    selector: 'choose-members',
    templateUrl: 'choose-members.html',
    directives: [REACTIVE_FORM_DIRECTIVES, AgGridFormControl, AgGridNg2],
    providers: [FormBuilder, MembershipTypesService, TeamsGroupsService, MemberService]
    //styleUrls: ['register-for-season.css'],
})

export class ChooseMembersComponent implements OnInit {
    constructor(builder: FormBuilder, private membershipTypesService: MembershipTypesService, private teamsGroupsService: TeamsGroupsService, private memberService: MemberService) {
        HelperService.log('constructor ChooseMembersComponent');
        this.chooseMembersForm = builder.group(
            {
                membershipStatus: [this.C_Active], //active, inactive, both
                memberFilter: [this.C_Members], //Members, TeamsGroups, MembershipType
                MembershipTypeID: [],
                formControlTeamsGroups: []
            });
    }

    @ViewChild(AgGridFormControl) teamFormControl: AgGridFormControl;
    @Output() membersChosen: EventEmitter<structOrganisationMember[]> = new EventEmitter<structOrganisationMember[]>();

    showFilters: boolean = true;
    memberGrid: boolean = false;

    MembershipTypes: structMembershipType[];

    columnDefsTeamsGroups: any[] = [
        {headerName: "GroupID", field: "GroupID", hide: true},
        {headerName: "Name", field: "Name", width: 300, checkboxSelection: true}
    ]

    ngOnInit() {
        this.getMembershipTypes();
        this.getTeamsGroups();
    }

    getTeamsGroups = ()=> {
        var getTeamsGroupsThis = this;
        getTeamsGroupsThis.teamsGroupsService.getTeamsGroups().subscribe(onGetMemberListSuccess, logError)
        function onGetMemberListSuccess(TeamsGroups: structGroup[]) {
            getTeamsGroupsThis.teamFormControl.gridOptions.api.setRowData(TeamsGroups)
            HelperService.log('getTeamsGroups success');
        }

        function logError() {
            HelperService.log('error getting TeamsGroups');
        }
    }
    getMembershipTypes = ()=> {
        var getMembershipTypesThis = this;
        getMembershipTypesThis.membershipTypesService.getMembershipTypes().subscribe(onGetMemberListSuccess, logError)
        function onGetMemberListSuccess(membershipTypes: structMembershipType[]) {
            getMembershipTypesThis.MembershipTypes = membershipTypes;
            HelperService.log('getMembershipTypes success');
        }

        function logError() {
            HelperService.log('error getting MembershipTypes');
        }

    }

    chooseMembersForm: FormGroup;

    getFiltersNext = ()=> {
        let structChooseMembers: structChooseMembers = this.chooseMembersForm.value;
        this.showFilters = false;
        this.memberGrid = true;
        this.loadFilteredMembers(structChooseMembers);
    }

    loadFilteredMembers = (structChooseMembers: structChooseMembers)=> {
        let loadFilteredMembersThis = this;
        loadFilteredMembersThis.memberService.getFilteredMembers(structChooseMembers).subscribe(onLoadFilteredMembersSuccess, logError);
        function onLoadFilteredMembersSuccess(structOrganisationMemberArray: structOrganisationMember[]) {
            loadFilteredMembersThis.gridOptionsMemberList.api.setRowData(structOrganisationMemberArray);
            HelperService.log('loadFilteredMembers success');
        }

        function logError() {
            HelperService.log('error loadFilteredMembers');
        }
    }

    C_Active: string = 'Active';
    C_Inactive: string = 'Inactive';
    C_Both: string = 'Both';

    C_Members: string = 'Members';
    C_TeamsGroups: string = 'TeamsGroups';
    C_MembershipType: string = 'MembershipType';

    get showMembershipTypes(): boolean {
        let memberFilter: FormControl = <FormControl>this.chooseMembersForm.controls['memberFilter'];
        if (memberFilter.value === this.C_MembershipType) {
            return true;
        } else {
            return false;
        }
    }

    get showTeamsGroups(): boolean {
        let memberFilter: FormControl = <FormControl>this.chooseMembersForm.controls['memberFilter'];
        if (memberFilter.value === this.C_TeamsGroups) {
            return true;
        } else {
            return false;
        }
    }

    /////////////////////////////////////////////////////////////
    //grid
    columnDefsMembers: any[] = [

        {headerName: "Last Name", field: "LastName", checkboxSelection: true},
        {headerName: "First Name", field: "FirstName"}
    ];

    gridOptionsMemberList: GridOptions = HelperService.getGridOptions(this.columnDefsMembers, null, null);
}
