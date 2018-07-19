import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output, Input } from '@angular/core';
import { ArrestLawbreaker } from '../arrest-lawbreaker';
import { ArrestProduct } from '../arrest-product';
import { ArrestIndictment } from '../arrest-indictment';
import { pagination } from '../../../config/pagination';
import { ArrestsService } from '../arrests.service';
import { MasLawGroupSectionModel } from '../../../models';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PreloaderService } from '../../../shared/preloader/preloader.component';

@Component({
    selector: 'app-allegation-modal',
    templateUrl: './allegation-modal.component.html',
    styleUrls: ['./allegation-modal.component.scss']
})
export class AllegationModalComponent implements OnInit {

    isOpen = false;
    isCheckAll = false;
    isCheck = false;

    paginage = pagination;

    lawGroupSection = new Array<MasLawGroupSectionModel>();

    lawGroupFG: FormGroup;

    @Input() mode: string;
    @Input() lawbreaker = new Array<ArrestLawbreaker>();
    @Input() product = new Array<ArrestProduct>();
    @Input() indicment = new Array<ArrestIndictment>();

    @Output() d = new EventEmitter();
    @Output() c = new EventEmitter();
    @Output() outPutIndicment = new EventEmitter<ArrestIndictment[]>();

    get LawGroupSection(): FormArray {
        return this.lawGroupFG.get('LawGroupSection') as FormArray
    }

    get Lawbreaker(): FormArray {
        return this.lawGroupFG.get('Lawbreaker') as FormArray
    }

    constructor(
        private arrestService: ArrestsService,
        private fb: FormBuilder,
        private preloader: PreloaderService
    ) { }

    async ngOnInit() {
        this.paginage.TotalItems = 0;
        this.lawGroupFG = this.fb.group({
            LawGroupSection: this.fb.array([]),
            Lawbreaker: this.fb.array([])
        })

        await this.lawbreaker.map(item => {
            item.IsChecked = this.isCheck
            item.ProductID = null
            item.ProductName = null
        })
        this.setItemFormArray(this.lawbreaker, 'Lawbreaker')
    }

    async onSearchByKey(f: any) {
        this.preloader.setShowPreloader(true)

        await this.arrestService
            .masLawGroupSectiongetByKeyword(f)
            .then(res => this.onSearchComplete(res))

        this.preloader.setShowPreloader(false);
    }

    async onSearchComplete(list: MasLawGroupSectionModel[]) {
        await list.map((item, i) => {
            item.RowId = i + 1
            item.IsChecked = false
            item.GuiltBaseID = item.GuiltBaseID == null ? 1 : item.GuiltBaseID
        })
        this.lawGroupSection = list;
        this.paginage.TotalItems = list.length;
    }

    private setItemFormArray(array: any[], formControl: string) {
        if (array !== undefined && array.length) {
            const itemFGs = array.map(item => this.fb.group(item));
            const itemFormArray = this.fb.array(itemFGs);
            this.lawGroupFG.setControl(formControl, itemFormArray);
        }
    }

    setIsChecked(i: number) {
        this.LawGroupSection.value.map((item, index) => {
            item.IsChecked = i == index ? true : false;
        })
    }

    selectItemPorduct(e: any, i: number) {
        this.Lawbreaker.at(i).patchValue({
            ProductID: e.target.value,
            ProductName: e.target.textContent.trim()
        })
    }

    checkAll() {
        this.isCheckAll = !this.isCheckAll;
    }

    dismiss(e: any) {
        this.d.emit(e);
    }

    async close(e: any) {
        let _lawbreaker = []
        let _lawGroup = this.LawGroupSection.value.filter(item => item.IsChecked);
        await this.Lawbreaker.value
            .filter(item => item.IsChecked)
            .map(item => {
                _lawbreaker.push({
                    LawbreakerID: item.LawbreakerID,
                    LawbreakerName: item.LawbreakerFullName,
                    ProductID: item.ProductID,
                    ProductName: item.ProductName
                })
            });

        let _indicment = []
        await _lawGroup.map((lg, i) => {
            _indicment.push({
                IndictmentID: lg.IndictmentID,
                IsProve: 1,
                IsActive: 1,
                GuiltBaseID: lg.GuiltBaseID,
                SectionNo: lg.SectionNo,
                SectionDesc1: lg.SectionDesc1,
                SectionName: lg.SectionName,
                Lawbreaker: _lawbreaker,
            })
        })
        
        this.outPutIndicment.emit(_indicment);
        this.c.emit(e);
    }

    async pageChanges(event: any) {
        const list = await this.lawGroupSection.slice(event.startIndex - 1, event.endIndex);
        this.setItemFormArray(list, 'LawGroupSection')
    }
}
