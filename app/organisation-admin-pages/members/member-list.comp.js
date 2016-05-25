System.register(['@angular/core', '@angular/router-deprecated', '../../helper/helper.serv', './member-list.serv'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, helper_serv_1, member_list_serv_1;
    var MembersListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (helper_serv_1_1) {
                helper_serv_1 = helper_serv_1_1;
            },
            function (member_list_serv_1_1) {
                member_list_serv_1 = member_list_serv_1_1;
            }],
        execute: function() {
            MembersListComponent = (function () {
                function MembersListComponent(router, MemberListService) {
                    var _this = this;
                    this.router = router;
                    this.MemberListService = MemberListService;
                    //////////////////////////////////////////////////////////////
                    //get data
                    this.loadMembers = function () {
                        var loadMembersThis = _this;
                        if (helper_serv_1.HelperService.tokenIsValid()) {
                            _this.MemberListService.getMemberList().subscribe(onGetMembersSuccess, logError);
                        }
                        else {
                            _this.router.navigate(['Login']);
                        }
                        function logError(e) {
                            console.log('getMembers Error');
                            //loadMembersThis.getMembersSuccess = false;
                        }
                        function onGetMembersSuccess(data) {
                            loadMembersThis.Members = data;
                            loadMembersThis.gridOptions.api.setRowData(data);
                            loadMembersThis.gridOptions.api.sizeColumnsToFit();
                            //loadMembersThis.getMembersSuccess = true;
                        }
                    };
                    /////////////////////////////////////////////////////////////
                    //grid
                    this.columnDefs = [
                        { headerName: "Last Name", field: "LastName" },
                        { headerName: "First Name", field: "FirstName" },
                        { headerName: "Membership Type", field: "MembershipType" },
                        { headerName: "M'ship To", field: "InvoicedTo" },
                        { headerName: "Owing", field: "FeesOwing" }
                    ];
                    this.onRowClicked = function (params) {
                    };
                    this.onRowDoubleClicked = function (params) {
                    };
                    this.gridOptions = helper_serv_1.HelperService.getGridOptions(this.columnDefs, this.onRowClicked, this.onRowDoubleClicked);
                    console.log('constructor RegisterComponent ');
                }
                MembersListComponent.prototype.ngOnInit = function () {
                    this.loadMembers();
                };
                MembersListComponent = __decorate([
                    core_1.Component({
                        selector: 'member-list',
                        templateUrl: 'app/organisation-admin-pages/members/member-list.html',
                        styleUrls: ['src/styles/styles.css', 'app/organisation-admin-pages/styles/organisation-admin-styles.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [member_list_serv_1.MemberListService]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, member_list_serv_1.MemberListService])
                ], MembersListComponent);
                return MembersListComponent;
            }());
            exports_1("MembersListComponent", MembersListComponent);
        }
    }
});
//# sourceMappingURL=member-list.comp.js.map