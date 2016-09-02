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
var main_1 = require("ag-grid-ng2/main");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//any ideas how to replace deprecated Provider?
var MULTISELECT_VALUE_ACCESSOR = new core_1.Provider(forms_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AgGridFormControl; }), multi: true });
var AgGridFormControl = (function () {
    function AgGridFormControl() {
        var _this = this;
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function (value) {
        };
        this.onModelTouched = function () {
            return _this.touched;
        };
        this.touched = false;
        this.onSelectionChanged = function (params) {
            var selectedRows = _this.gridOptions.api.getSelectedRows();
            if (selectedRows.length === 0) {
                //necessary for Validators.required to work
                _this.value = null;
            }
            else {
                _this.value = _this.gridOptions.api.getSelectedRows();
            }
            _this.touched = true;
            _this.onModelChange(_this.value);
            _this.onModelTouched();
            _this.onChange.emit({ originalEvent: event, value: _this.value });
        };
    }
    AgGridFormControl.prototype.ngOnInit = function () {
        this.gridOptions = {};
        this.gridOptions.rowData = this.rowData;
        this.gridOptions.columnDefs = this.columnDefs;
        this.gridOptions.onSelectionChanged = this.onSelectionChanged;
        this.gridOptions.rowSelection = "multipleqq";
    };
    AgGridFormControl.prototype.writeValue = function (value) {
        this.value = value;
    };
    AgGridFormControl.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    AgGridFormControl.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AgGridFormControl.prototype, "onChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AgGridFormControl.prototype, "rowData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AgGridFormControl.prototype, "columnDefs", void 0);
    AgGridFormControl = __decorate([
        core_1.Component({
            selector: 'ag-grid-formcontrol',
            template: "\n         <ag-grid-ng2 style=\"height: 200px;\" class=\"ag-fresh\"  [gridOptions]=\"gridOptions\">    </ag-grid-ng2>\n    ",
            providers: [MULTISELECT_VALUE_ACCESSOR],
            directives: [main_1.AgGridNg2]
        }), 
        __metadata('design:paramtypes', [])
    ], AgGridFormControl);
    return AgGridFormControl;
}());
exports.AgGridFormControl = AgGridFormControl;
//# sourceMappingURL=ag-grid-formcontrol.js.map