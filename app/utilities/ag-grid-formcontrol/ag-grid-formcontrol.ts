import {AgGridNg2} from "ag-grid-ng2/main";
import {GridOptions} from "ag-grid/main";
import {Component, Input, Output, EventEmitter, forwardRef, Provider, OnInit} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

//any ideas how to replace deprecated Provider?
const MULTISELECT_VALUE_ACCESSOR: Provider = new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AgGridFormControl),multi: true});

@Component({
    selector: 'ag-grid-formcontrol',
    template: `
         <ag-grid-ng2 style="height: 200px;" class="ag-fresh"  [gridOptions]="gridOptions">    </ag-grid-ng2>
    `,
    providers: [MULTISELECT_VALUE_ACCESSOR],
    directives: [AgGridNg2]
})

export class AgGridFormControl implements ControlValueAccessor, OnInit {
    gridOptions: GridOptions;

    ngOnInit() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.rowData;
        this.gridOptions.columnDefs = this.columnDefs;
        this.gridOptions.onSelectionChanged = this.onSelectionChanged;
        this.gridOptions.rowSelection = "multiple"
    }

    @Output() onChange: EventEmitter<any> = new EventEmitter();

    @Input() rowData: any[];

    @Input() columnDefs: any[];

    value: any[];

    onModelChange: Function = (value: any[]) => {
    };

    onModelTouched: Function = (): boolean => {
        return this.touched;
    };

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    touched: boolean = false;

    onSelectionChanged = (params: any): void => {
        let selectedRows: any[]=this.gridOptions.api.getSelectedRows();
        if (selectedRows.length===0){
            //necessary for Validators.required to work
            this.value = null
        } else {
            this.value = this.gridOptions.api.getSelectedRows();
        }
        this.touched = true;
        this.onModelChange(this.value);
        this.onModelTouched();
        this.onChange.emit({originalEvent: event, value: this.value});
    }
}


