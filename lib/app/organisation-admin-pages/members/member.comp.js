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
var router_deprecated_1 = require('@angular/router-deprecated');
var helper_serv_1 = require('../../helper/helper.serv');
var member_serv_1 = require('./member.serv');
var main_1 = require('ag-grid-ng2/main');
var MemberComponent = (function () {
    function MemberComponent(router, memberService) {
        var _this = this;
        this.router = router;
        this.memberService = memberService;
        this.clickOutside = function (event) {
            _this.cancelMember();
        };
        this.getEmptyMember = function () {
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
                CountryID: 0,
                EmailAddress: '',
                MemberNumber: '',
                LicenseNumber: '',
                MedicalNotes: '',
                PlayerNumber: '',
                MembershipTypeID: 0,
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
        this.Member = this.getEmptyMember();
        this.editMember = false;
        this.ContactSelected = true;
        this.PersonalSelected = false;
        this.OrganisationSelected = false;
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
        //////////////////////////////////////////////////////////////
        //get data
        this.loadMember = function (OrganisationMemberID, countries, MembershipTypes, Groups) {
            var loadMemberThis = _this;
            loadMemberThis.countries = countries;
            loadMemberThis.MembershipTypes = MembershipTypes;
            loadMemberThis.Groups = Groups;
            loadMemberThis.teamsGroupsGridOptions.api.setRowData(Groups);
            loadMemberThis.teamsGroupsGridOptions.rowSelection = 'multiple';
            loadMemberThis.teamsGroupsGridOptions.suppressRowClickSelection = true;
            loadMemberThis.Member = loadMemberThis.getEmptyMember();
            if (helper_serv_1.HelperService.tokenIsValid()) {
                loadMemberThis.titleMember = 'Edit Member';
                loadMemberThis.memberService.getMember(OrganisationMemberID).subscribe(onGetMemberSuccess, logError);
            }
            else {
                loadMemberThis.router.parent.navigate(['HomePageMaster', 'LoginComponent']);
            }
            function onGetMemberSuccess(Member) {
                loadMemberThis.editMember = true;
                loadMemberThis.Member = Member;
                loadMemberThis.getMemberSuccess = true;
                loadMemberThis.selectGroupsRows();
            }
            function logError() {
                helper_serv_1.HelperService.log('getInvoice Error');
                loadMemberThis.getMemberSuccess = false;
            }
        };
        this.selectGroupsRows = function () {
            //array of grid rows holding all groups
            var allRows = _this.teamsGroupsGridOptions.api.rowModel.allRows, i;
            //go through array getting groupID of each record
            for (i = 0; i < allRows.length; i++) {
                var allRowsGroupID = allRows[i].data.GroupID;
                var node = allRows[i];
                //filter the member GroupIDArray to see if this GroupID from the rows is present in it
                var Member = _this.Member;
                var memberGroupIDArray = Member.GroupIDArray;
                function checkPresence(pGroupID) {
                    return pGroupID === allRowsGroupID;
                }
                var filtered = memberGroupIDArray.filter(checkPresence);
                //if found
                if (filtered.length > 0) {
                    node.setSelected(true);
                }
            }
            console.log('');
        };
        this.saveMember = function () {
            _this.closed.emit('');
        };
        this.cancelMember = function () {
            _this.closed.emit('');
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
        helper_serv_1.HelperService.log('constructor RegisterComponent ');
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MemberComponent.prototype, "closed", void 0);
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'memberModal',
            templateUrl: 'app/organisation-admin-pages/members/member.html',
            //styles: ['.modalOurMembersVisible {display: block;}'],
            styleUrls: ['styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css', 'app/organisation-admin-pages/members/member.css'],
            providers: [member_serv_1.MemberService],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, member_serv_1.MemberService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.comp.js.map