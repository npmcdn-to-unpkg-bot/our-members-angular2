import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.serv";
import {AgGridNg2} from "ag-grid-ng2/main";
import {EmailMemberService} from "../email-member/email-member.serv";
import {ChooseMembersComponent} from "../choose-members/choose-members.comp";
import {GridOptions} from "ag-grid/main";

@Component({
    moduleId: module.id,
    selector: 'email-member',
    templateUrl: 'email-member.html',
    styleUrls: ['email-member.css'],
    providers: [EmailMemberService],
    directives: [AgGridNg2, ChooseMembersComponent]
})


export class EmailMemberComponent implements OnInit {
    constructor(private router: Router, private emailMemberService: EmailMemberService) {
        HelperService.log('constructor EmailComponent');
    }

    ngOnInit() {
        //this.Member = this.getEmptyMember(0);
    }

    applyFiltersNext = ()=> {
        this.hideAll();
        //this.memberFilter = true;
    }

    displayMembers=(structOrganisationMemberArray: structOrganisationMember[])=>{
        this.gridOptions.api.setRowData(structOrganisationMemberArray);
        console.log(structOrganisationMemberArray);
    }

    // memberFilterBack = ()=> {
    //     this.hideAll();
    //     this.applyFilters = true;
    // }
    // memberFilterNext = ()=> {
    //     this.hideAll();
    //     this.subjectAndBody = true;
    // }
    // subjectAndBodyBack = ()=> {
    //     this.hideAll();
    //     this.memberFilter = true;
    // }
    // subjectAndBodySend = ()=> {
    //     this.sendEmail();
    // }
    // subjectAndBodyGoToAttachments = ()=> {
    //     this.hideAll();
    //     this.attachments = true;
    // }
    // attachmentsBack = ()=> {
    //     this.hideAll();
    //     this.subjectAndBody = true;
    // }

    hideAll = ()=> {
        this.chooseMembers = false;
        // this.memberFilter = false;
        // this.subjectAndBody = false;
        // this.attachments = false;

    }
    sendEmail=()=>{
    }
    chooseMembers: boolean = true;


    /////////////////////////////////////////////////////////////
    //grid
    columnDefs: any[] = [

        {field: "OrganisationMemberID", hide: true},
        {headerName: "Last Name", field: "LastName", checkboxSelection: true},
        {headerName: "First Name", field: "FirstName"},
    ];


    gridOptions: GridOptions = HelperService.getGridOptions(this.columnDefs, null, null);


}
