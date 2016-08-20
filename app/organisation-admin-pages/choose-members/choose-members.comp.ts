import {Component, OnInit} from "@angular/core";
import {HelperService} from "../../services/helper/helper.serv";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {MembershipTypesService} from "../../services/membership-type/membership-type.serv";
import {TeamsGroupsService} from "../../services/teams-groups/teams-groups.serv";


@Component({
    moduleId: module.id,
    selector: 'choose-members',
    templateUrl: 'choose-members.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [FormBuilder, MembershipTypesService, TeamsGroupsService]
    //styleUrls: ['register-for-season.css'],
})

export class ChooseMembersComponent implements OnInit {
    constructor(builder: FormBuilder, private membershipTypesService: MembershipTypesService, private teamsGroupsService: TeamsGroupsService) {
        HelperService.log('constructor ChooseMembersComponent');
        this.chooseMembersForm = builder.group(
            {
                membershipStatus: [this.C_Active], //active, inactive, both
                memberFilter: [this.C_Members], //Members, TeamsGroups, MembershipType
                membershipType: []
            });
    }

    MembershipTypes: structMembershipType[];
    TeamsGroups: structGroup[];

    ngOnInit() {
        this.getMembershipTypes();
        this.getTeamsGroups();
    }

    getTeamsGroups=()=>{
        var getTeamsGroupsThis = this;
        getTeamsGroupsThis.teamsGroupsService.getTeamsGroups().subscribe(onGetMemberListSuccess, logError)
        function onGetMemberListSuccess(TeamsGroups: structGroup[]) {
            getTeamsGroupsThis.TeamsGroups = TeamsGroups;
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

    applyFiltersNext = ()=> {
        alert('applyFiltersNext');
    }


    C_Active: string = 'Active';
    C_Inactive: string = 'Inactive';
    C_Both: string = 'Both';

    C_Members: string = 'Members';
    C_TeamsGroups: string = 'TeamsGroups';
    C_MembershipType: string = 'MembershipType';

    //can only resize a grid when it is visible
    //this.teamsGroupsGridOptions.api.sizeColumnsToFit();


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
}
