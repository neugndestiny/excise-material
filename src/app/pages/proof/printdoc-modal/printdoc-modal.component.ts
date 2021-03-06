import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-printdoc-modal',
    templateUrl: './printdoc-modal.component.html',
    styleUrls: ['./printdoc-modal.component.scss']
})

export class PrintDocModalComponent implements OnInit {

    isOpen = false;
    isCheckAll = false;
    advSearch = false;

    @Output() d = new EventEmitter();
    @Output() c = new EventEmitter();

    constructor(private _chRef: ChangeDetectorRef) { }

    ngOnInit() {
        // this.onDetactTable();
    }

    // private onDetactTable() {
    //     //   const table: any = $('table#suspectModal');

    //     //   if ($.fn.dataTable.isDataTable('table#suspectModal')) {

    //     //       this.dataTable = table.DataTable();
    //     //       this.dataTable.destroy();
    //     //   }

    //     //   this._chRef.detectChanges();

    //     //   this.dataTable = table.DataTable(options);
    // }

    checkAll() {
        this.isCheckAll = !this.isCheckAll;
    }

    toggle(e) {
       this.advSearch = !this.advSearch;
    }

    dismiss(e: any) {
        this.d.emit(e);
    }

    close(e: any) {
        this.c.emit(e);
    }

}
