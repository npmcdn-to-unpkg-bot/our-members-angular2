"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var helper_serv_1 = require('../../services/helper/helper.serv');
var member_serv_1 = require('./member.serv');
var main_1 = require('ag-grid-ng2/main');
var MemberComponent = (function () {
    function MemberComponent(router, memberService) {
        var _this = this;
        this.router = router;
        this.memberService = memberService;
        this.getEmptyMember = function (defaultCountryId) {
            var defaultMembershipTypeId;
            if (_this.MembershipTypes === undefined) {
                defaultMembershipTypeId = -1;
            }
            else {
                if (_this.MembershipTypes.length > 0) {
                    defaultMembershipTypeId = _this.MembershipTypes[0].MembershipTypeID;
                }
                else {
                    defaultMembershipTypeId = -1;
                }
            }
            var member = {
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
                MembershipPaidTo: '',
                InvoicedTo: '',
                BalanceOwing: '',
                Gender: '',
                DateOfBirth: '',
                ContactPerson: '',
                Comments: '',
                GroupIDArray: [],
                Active: false,
                Fax: '',
                Title: '',
                StartDate: '',
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
            };
            return member;
        };
        this.closed = new core_1.EventEmitter();
        this.editMember = false;
        this.memberVisible = false;
        this.ContactSelected = true;
        this.PersonalSelected = false;
        this.OrganisationSelected = false;
        //newMember = () => {
        //    this.memberVisible = true;
        //    window.onkeyup = this.testEsc;
        //    this.Member = this.getEmptyMember();
        //}
        this.testEsc = function (event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                _this.cancelMember();
            }
        };
        this.cancelMember = function () {
            window.onkeyup = null;
            _this.memberVisible = false;
            _this.closed.emit(helper_serv_1.HelperService.C_FALSE);
        };
        this.unselectAll = function () {
            _this.ContactSelected = false;
            _this.PersonalSelected = false;
            _this.OrganisationSelected = false;
        };
        this.ContactClicked = function () {
            _this.unselectAll();
            _this.ContactSelected = true;
        };
        this.PersonalClicked = function () {
            _this.unselectAll();
            _this.PersonalSelected = true;
        };
        this.OrganisationClicked = function () {
            _this.unselectAll();
            _this.OrganisationSelected = true;
            //can only resize a grid when it is visible
            _this.teamsGroupsGridOptions.api.sizeColumnsToFit();
        };
        this.loadObjects = function (countries, MembershipTypes, Groups, defaultCountryId) {
            _this.countries = countries;
            _this.MembershipTypes = MembershipTypes;
            _this.Groups = Groups;
            _this.teamsGroupsGridOptions.api.setRowData(Groups);
            _this.teamsGroupsGridOptions.rowSelection = 'multiple';
            _this.teamsGroupsGridOptions.suppressRowClickSelection = true;
            _this.defaultCountryId = defaultCountryId;
            window.onkeyup = _this.testEsc;
        };
        this.addMember = function () {
            _this.editMember = false;
            _this.Member = _this.getEmptyMember(_this.defaultCountryId);
            _this.memberVisible = true;
        };
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMember = function (OrganisationMemberID) {
            var loadMemberThis = _this;
            loadMemberThis.Member = loadMemberThis.getEmptyMember(0);
            //loadMemberThis.Member = loadMemberThis.getEmptyMember();
            if (helper_serv_1.HelperService.tokenIsValid()) {
                loadMemberThis.titleMember = 'Edit Member';
                loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
            }
            else {
                loadMemberThis.router.navigate(['/home-page', 'login']);
            }
            function onGetMemberSuccess(Member) {
                loadMemberThis.editMember = true;
                loadMemberThis.Member = Member;
                loadMemberThis.selectGroupsRows();
                helper_serv_1.HelperService.log('loadMember success');
                loadMemberThis.memberVisible = true;
                window.onkeyup = loadMemberThis.testEsc;
            }
            function logError() {
                helper_serv_1.HelperService.log('loadMember Error');
            }
        };
        this.selectGroupsRows = function () {
            //array of grid rows holding all groups
            var rowsToDisplay = _this.teamsGroupsGridOptions.api.rowModel.rowsToDisplay, i;
            //go through array getting groupID of each record
            for (i = 0; i < rowsToDisplay.length; i++) {
                var rowsToDisplayGroupID = rowsToDisplay[i].data.GroupID;
                var node = rowsToDisplay[i];
                //filter the member GroupIDArray to see if this GroupID from the rows is present in it
                var Member = _this.Member;
                var memberGroupIDArray = Member.GroupIDArray;
                function checkPresence(pGroupID) {
                    return pGroupID === rowsToDisplayGroupID;
                }
                var filtered = memberGroupIDArray.filter(checkPresence);
                //if found
                if (filtered.length > 0) {
                    node.setSelected(true);
                }
            }
            _this.teamsGroupsGridOptions.api.refreshView();
            //this.teamsGroupsGridOptions.api.softRefreshView();
        };
        this.saveMember = function () {
            var okClickedThis = _this;
            if (okClickedThis.editMember) {
                if (helper_serv_1.HelperService.tokenIsValid()) {
                    var i;
                    var rows = okClickedThis.teamsGroupsGridOptions.api.getSelectedRows();
                    okClickedThis.Member.GroupIDArray = [];
                    for (i = 0; i < rows.length; i++) {
                        okClickedThis.Member.GroupIDArray[i] = rows[i].GroupID;
                    }
                    okClickedThis.memberService.updateMember(okClickedThis.Member).subscribe(updateMemberSuccess, logError);
                }
                else {
                    okClickedThis.router.navigate(['/home-page', 'login']);
                }
            }
            else {
                if (helper_serv_1.HelperService.tokenIsValid()) {
                    okClickedThis.memberService.saveNewMember(okClickedThis.Member).subscribe(updateMemberSuccess, logError);
                }
                else {
                    okClickedThis.router.navigate(['/home-page', 'login']);
                }
            }
            function logError(obj) {
                helper_serv_1.HelperService.log(JSON.stringify(obj));
                alert(JSON.stringify(obj));
            }
            function updateMemberSuccess() {
                okClickedThis.memberVisible = false;
                okClickedThis.closed.emit(helper_serv_1.HelperService.C_TRUE);
                window.onkeyup = null;
            }
        };
        /////////////////////////////////////////////////////////////
        //grid
        this.columnDefs = [
            { headerName: "GroupID", field: "[GroupID]", hide: true },
            { headerName: "Name", field: "Name", checkboxSelection: true }
        ];
        this.onRowClicked = function (params) {
        };
        this.onRowDoubleClicked = function (params) {
        };
        this.teamsGroupsGridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
        helper_serv_1.HelperService.log('constructor MemberComponent');
    }
    MemberComponent.prototype.ngOnInit = function () {
        this.Member = this.getEmptyMember(0);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MemberComponent.prototype, "closed", void 0);
    MemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'memberModal',
            templateUrl: 'member.html',
            styleUrls: ['member.css'],
            providers: [member_serv_1.MemberService],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [router_1.Router, member_serv_1.MemberService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.comp.js.map