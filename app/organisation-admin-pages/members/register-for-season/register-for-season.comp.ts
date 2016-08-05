/// <reference path="register-for-season.serv.ts" />
import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../../services/helper/helper.serv';
import {RegisterForSeasonService} from './register-for-season.serv';
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'confirm',
    templateUrl: 'confirm.html',
    styleUrls: ['confirm.css']
})

export class RegisterForSeasonComponent {
    constructor(private registerForSeasonService: RegisterForSeasonService, private router: Router) {
        HelperService.log('constructor RegisterForSeasonComponent');
    }

    visible: boolean = false;
    showForm = (OrganisationMemberID: number) => {
        this.visible = true;
        window.onkeyup = this.testEsc;
        this.loadForm(OrganisationMemberID
    }

    loadForm = (OrganisationMemberID: number) => {
        var loadMemberThis = this;
        if (HelperService.tokenIsValid()) {
            loadMemberThis.registerForSeasonService.getRegisterForSeasonData(OrganisationMemberID).subscribe(getRegisterForSeasonDataSuccess, logError);
        } else {
            HelperService.sendToLogin(loadMemberThis.router)
        }
        function getRegisterForSeasonDataSuccess(structRegisterMemberFormData: structRegisterMemberFormData) {






            //If reader.Read Then
            //Dim InvoicedTo As Date = CDate(reader("EndDate"))
            //'if the player is registered til the end of last season
            //If(InvoicedTo >= LastSeasonStartDate) And (InvoicedTo <= LastSeasonEndDate) Then
            //Dim s As String = "Register for this season: " & Format(ThisSeasonStartDate, "MMM dd, yyyy") & " - " & Format(ThisSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_rblRegister.Items.Add(s, formatJavascriptDate(ThisSeasonEndDate))
            //ORGANISATIONMEM_LIST_rblRegister.SelectedIndex = 0
            //End If
            //'If the player is already registered for the current season 
            //If(InvoicedTo >= ThisSeasonStartDate) And (InvoicedTo <= ThisSeasonEndDate) Then
            //Dim s As String = "Player already registered for this season: " & Format(ThisSeasonStartDate, "MMM dd, yyyy") & " - " & Format(ThisSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_lblRegister.Text = s
            //s = "Register for next season: " & Format(NextSeasonStartDate, "MMM dd, yyyy") & " - " & Format(NextSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_rblRegister.Items.Add(s, formatJavascriptDate(NextSeasonEndDate))
            //ORGANISATIONMEM_LIST_rblRegister.SelectedIndex = 0
            //End If

            //'If the player is already registered for both 
            //If(InvoicedTo >= NextSeasonStartDate) And (InvoicedTo <= NextSeasonEndDate) Then
            //Dim s As String = "Player already registered for next season: " & Format(NextSeasonStartDate, "MMM dd, yyyy") & " - " & Format(NextSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_lblRegister.Text = s
            //ORGANISATIONMEM_LIST_cmdRegisterOK.ClientEnabled = False
            //End If
            //Else
            //'if player has no invoices
            //Dim s As String = "Register for this season: " & Format(ThisSeasonStartDate, "MMM dd, yyyy") & " - " & Format(ThisSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_rblRegister.Items.Add(s, formatJavascriptDate(ThisSeasonEndDate))
            //s = "Register for next season: " & Format(NextSeasonStartDate, "MMM dd, yyyy") & " - " & Format(NextSeasonEndDate, "MMM dd, yyyy")
            //ORGANISATIONMEM_LIST_rblRegister.Items.Add(s, formatJavascriptDate(ThisSeasonEndDate))
            //ORGANISATIONMEM_LIST_rblRegister.SelectedIndex = 0
            //End If








            HelperService.log('getRegisterForSeasonDataSuccess success');
            loadMemberThis.visible = true;
            window.onkeyup = loadMemberThis.testEsc;
        }

        function logError() {
            HelperService.log('loadMember Error');
        }
    }


    testEsc = (event: KeyboardEvent) => {
        if (event.keyCode === 27) {
            event.stopPropagation();
            this.cancel();
        }
    }

    message: string = '';

    //cancelMember
    @Output() closed: EventEmitter<string> = new EventEmitter<string>();

    cancel = () => {
        window.onkeyup = null;
        this.visible = false;
        this.closed.emit('false');
    }

    ok = () => {
        window.onkeyup = null;
        this.visible = false;
        //this.returnFunction();
        this.closed.emit('true');
    }
}