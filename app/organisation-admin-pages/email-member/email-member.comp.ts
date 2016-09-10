import {Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.serv";
import {AgGridNg2} from "ag-grid-ng2/main";
import {EmailMemberService} from "../email-member/email-member.serv";
import {ChooseMembersComponent} from "../choose-members/choose-members.comp";
import {GridOptions} from "ag-grid/main";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PopupComponent} from "../../utilities/popup/popup.comp";

@Component({
    moduleId: module.id,
    selector: 'email-member',
    templateUrl: 'email-member.html',
    styleUrls: ['email-member.css'],
    providers: [EmailMemberService, FormBuilder],
    directives: [REACTIVE_FORM_DIRECTIVES, AgGridNg2, ChooseMembersComponent, PopupComponent]
})


export class EmailMemberComponent {
    constructor(private router: Router, private emailMemberService: EmailMemberService, builder: FormBuilder) {
        HelperService.log('constructor EmailComponent');
        this.emailMembersForm = builder.group(
            {
                subject: ['', Validators.required],
                body: ['', Validators.required]
            });

    }

    @ViewChild(PopupComponent) popupComponent: PopupComponent;

    emailMembersForm: FormGroup;

    emailMemberBack = ()=> {
        this.hideEmailAndSubject = true;
        this.hideChooseMembers = false;
    }

    sendEmail = ()=> {
        var sendEmailThis = this;
        sendEmailThis.emailMemberService.sendEmail(this.email).subscribe(onSendEmailSuccess, logError);
        function onSendEmailSuccess(){
            console.log('onSendEmailSuccess');
            sendEmailThis.popupComponent.showPopup('Email(s) sent successfully');
        }
        function logError(e: any){
            console.log('sendEmail error');
            console.log(e);
        }
    }

    //structOrganisationMemberArray: structOrganisationMember[] = [];
    displayMembers = (structOrganisationMemberArray: structOrganisationMember[])=> {
        let i: number;
        this.email.OrganisationMemberIDArray = [];
        for (i = 0; i < structOrganisationMemberArray.length; i++) {
            this.email.OrganisationMemberIDArray.push(structOrganisationMemberArray[i].OrganisationMemberID);
        }
        this.hideEmailAndSubject = false;
        this.hideChooseMembers = true;
    }

    hideEmailAndSubject: boolean = true;
    hideChooseMembers: boolean = false;
    email: structEmailMembers = {
        OrganisationMemberIDArray: [],
        EmailAttachmentIDArray:[],
        Subject: '',
        Message: '',
        sDateSent: HelperService.formatDateForJSon(new Date())
    };

/////////////////////////////////////////////////////////////
    //grid
    columnDefs: any[] = [

        {field: "OrganisationMemberID", hide: true},
        {headerName: "Last Name", field: "LastName", checkboxSelection: true},
        {headerName: "First Name", field: "FirstName"},
    ];


    gridOptions: GridOptions = HelperService.getGridOptions(this.columnDefs, null, null, true);


}
