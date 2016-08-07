import {Component, Output, EventEmitter} from '@angular/core';
import {HelperService} from '../../../services/helper/helper.serv';
import {MemberService} from '../member/member.serv';
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'register-for-season',
    templateUrl: 'register-for-season.html',
    styleUrls: ['register-for-season.css'],
    providers: [MemberService]
})

export class RegisterForSeasonComponent {
    constructor(private memberService: MemberService, private router: Router) {
        HelperService.log('constructor RegisterForSeasonComponent');
    }

    registerForSeasonVisible: boolean = false;

    OrganisationMemberID: number;
    ThisSeasonEndDate: Date;
    NextSeasonEndDate: Date;

    //output variables
    registerForSeason: string = '';
    comment: string;

    headerLabel: string = '';

    C_thisSeason: string = 'thisSeason';
    C_nextSeason: string = 'nextSeason';

    thisSeasonVisible: boolean = false;
    nextSeasonVisible: boolean = false;

    thisSeasonLabel: string = '';
    nextSeasonLabel: string = '';

    okButtonEnabled: boolean = true;

    showForm = (OrganisationMemberID: number) => {
        window.onkeyup = this.testEsc;
        this.loadForm(OrganisationMemberID);
    }

    loadForm = (OrganisationMemberID: number) => {
        var loadFormThis = this;
        loadFormThis.OrganisationMemberID = OrganisationMemberID;
        if (HelperService.tokenIsValid()) {
            loadFormThis.memberService.getRegisterForSeasonData(OrganisationMemberID).subscribe(getRegisterForSeasonDataSuccess, logError);
        } else {
            HelperService.sendToLogin(loadFormThis.router)
        }
        function getRegisterForSeasonDataSuccess(structRegisterMemberFormData: structRegisterMemberFormData) {

            var InvoicedToDate: Date = HelperService.translateJavascriptDate(structRegisterMemberFormData.sInvoicedToDate);

            loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
            loadFormThis.comment = '';
            loadFormThis.headerLabel = '';
            loadFormThis.thisSeasonVisible = false;
            loadFormThis.nextSeasonVisible = false;
            loadFormThis.thisSeasonLabel = '';
            loadFormThis.nextSeasonLabel = '';
            loadFormThis.okButtonEnabled = true;

            var ThisSeasonEndDate: Date = HelperService.translateJavascriptDate(structRegisterMemberFormData.sThisSeasonEndDate);
            loadFormThis.ThisSeasonEndDate = ThisSeasonEndDate;
            var ThisSeasonStartDate: Date = new Date(ThisSeasonEndDate.getFullYear() - 1, ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate() + 1); //ThisSeasonEndDate;//.AddYears(-1).AddDays(1)
            var NextSeasonEndDate: Date = new Date(ThisSeasonEndDate.getFullYear() + 1, ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate());// ThisSeasonEndDate;//.AddYears(1)
            loadFormThis.NextSeasonEndDate = NextSeasonEndDate;
            var NextSeasonStartDate: Date = new Date(ThisSeasonEndDate.getFullYear(), ThisSeasonEndDate.getMonth(), ThisSeasonEndDate.getDate() + 1);//.AddDays(1)
            var LastSeasonEndDate: Date = new Date(ThisSeasonStartDate.getFullYear(), ThisSeasonStartDate.getMonth(), ThisSeasonStartDate.getDate() - 1);//.AddDays(-1)
            var LastSeasonStartDate: Date = new Date(ThisSeasonStartDate.getFullYear() - 1, ThisSeasonStartDate.getMonth(), ThisSeasonStartDate.getDate());//.AddYears(-1)

            loadFormThis.registerForSeasonVisible = true;
            if (structRegisterMemberFormData.sInvoicedToDate === '') {
                loadFormThis.thisSeasonLabel = 'Register for this season: ' + HelperService.formatDate(ThisSeasonEndDate) + " - " + HelperService.formatDate(ThisSeasonEndDate);
                loadFormThis.nextSeasonLabel = 'Register for next season: ' + HelperService.formatDate(NextSeasonEndDate) + " - " + HelperService.formatDate(NextSeasonEndDate);
                loadFormThis.thisSeasonVisible = true;
                loadFormThis.nextSeasonVisible = true;
                loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
            } else {
                //if the player is registered til the end of last season
                if ((InvoicedToDate >= LastSeasonStartDate) && (InvoicedToDate <= LastSeasonEndDate)) {
                    loadFormThis.thisSeasonLabel = 'Register for this season: ' + HelperService.formatDate(ThisSeasonEndDate) + " - " + HelperService.formatDate(ThisSeasonEndDate);
                    loadFormThis.nextSeasonLabel = 'Register for next season: ' + HelperService.formatDate(NextSeasonEndDate) + " - " + HelperService.formatDate(NextSeasonEndDate);
                    loadFormThis.thisSeasonVisible = true;
                    loadFormThis.nextSeasonVisible = true;
                    loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                } else {
                    //If the player is already registered for the current season 
                    if ((InvoicedToDate >= ThisSeasonStartDate) && (InvoicedToDate <= ThisSeasonEndDate)) {
                        loadFormThis.headerLabel = 'Player already registered for this season: ' + HelperService.formatDate(ThisSeasonStartDate) + ' - ' + HelperService.formatDate(ThisSeasonEndDate);
                        loadFormThis.nextSeasonLabel = 'Register for next season: ' + HelperService.formatDate(NextSeasonEndDate) + " - " + HelperService.formatDate(NextSeasonEndDate);
                        loadFormThis.nextSeasonVisible = true;
                        //loadFormThis.registerForNextSeason = true;
                        loadFormThis.registerForSeason = loadFormThis.C_nextSeason;;
                    } else {
                        //If the player is already registered for both 
                        if ((InvoicedToDate >= NextSeasonStartDate) && (InvoicedToDate <= NextSeasonEndDate)) {
                            loadFormThis.headerLabel = 'Player already registered for next season: ' + HelperService.formatDate(NextSeasonStartDate) + ' - ' + HelperService.formatDate(NextSeasonEndDate);
                            loadFormThis.okButtonEnabled = false;
                            loadFormThis.okButtonEnabled = false;
                        } else {
                            loadFormThis.thisSeasonLabel = 'Register for this season: ' + HelperService.formatDate(ThisSeasonEndDate) + " - " + HelperService.formatDate(ThisSeasonEndDate);
                            loadFormThis.nextSeasonLabel = 'Register for next season: ' + HelperService.formatDate(NextSeasonEndDate) + " - " + HelperService.formatDate(NextSeasonEndDate);
                            loadFormThis.thisSeasonVisible = true;
                            loadFormThis.nextSeasonVisible = true;
                            loadFormThis.registerForSeason = loadFormThis.C_thisSeason;
                        }
                    }
                }
            }
            HelperService.log('getRegisterForSeasonDataSuccess success');
            window.onkeyup = loadFormThis.testEsc;
        }

        function logError() {
            HelperService.log('getRegisterForSeasonDataSuccess Error');
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
        this.registerForSeasonVisible = false;
        this.closed.emit('false');
    }

    returnFunction = () => {
        var returnFunctionThis = this;
        var sEndDate: string;
        var sCurrentDate: string = HelperService.formatDateForJSon(new Date());
        var structsaveRegisterForSeasonData: structsaveRegisterForSeasonData;
        if (HelperService.tokenIsValid()) {
            if (returnFunctionThis.registerForSeason === returnFunctionThis.C_thisSeason) {
                sEndDate = HelperService.formatDateForJSon(returnFunctionThis.ThisSeasonEndDate);
            } else {
                sEndDate = HelperService.formatDateForJSon(returnFunctionThis.NextSeasonEndDate);
            }

            structsaveRegisterForSeasonData = {
                OrganisationMemberID: returnFunctionThis.OrganisationMemberID,
                sEndDate: sEndDate,
                comment: returnFunctionThis.comment, 
                sCurrentDate: sCurrentDate
            }

            returnFunctionThis.memberService.saveRegisterForSeasonData(structsaveRegisterForSeasonData).subscribe(saveRegisterForSeasonDataSuccess, logError);
        } else {
            HelperService.sendToLogin(returnFunctionThis.router)
        }
        function logError() {
            HelperService.log('saveRegisterForSeasonData Error');
        }
        function saveRegisterForSeasonDataSuccess() {
            window.onkeyup = null;
            returnFunctionThis.registerForSeasonVisible = false;
            returnFunctionThis.closed.emit('true');
}
    }

    okClicked = () => {
        this.returnFunction();
    }
}