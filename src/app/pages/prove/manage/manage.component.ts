import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from '../../../shared/header-navigation/navigation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProveService } from '../prove.service';
import { ArrestService } from '../../model/arrest.service';
import { LawsuitService } from '../../model/lawsuit.service';
import { MasterService } from '../../model/master.service';
import { Arrest } from '../../model/arrest';
import { Prove } from '../prove';
import { MatAutocomplete } from '@angular/material';
import { ProveStaff } from '../proveStaff';
import { ProveScience } from '../proveScience';
import { ProveProduct } from '../proveProduct';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html'
})
export class ManageComponent implements OnInit, OnDestroy {
    private sub: any;
    viewMode: any;
    mode: string;
    modal: any;
    param: any;

    // --------
    showEditField: any;

    // -- Parameter ---
    LawsuitID: string;
    ArrestCode: string;
    ProveID: string;

    // --- Autocomplate ---
    rawOptions = [];
    options = [];
    rawStaffOptions = [];
    Staffoptions = [];
    Scienceoptions = [];
    UnitOption = [];
    ArrestProduct = [];
    tempArrestProduct = [];

    // ---- Varible ---
    LawsuiltCode: string;
    SectionName: string;
    GuiltBaseName: string;
    SectionNo: string;
    PenaltyDesc: string;
    IndictmentID: string;
    ReportNo: string;       // เลขทะเบียนตรวจพิสูจน์  (ไม่รวม /ปี พ.ศ.)
    ProveYear: string;      // ปี พ.ศ.
    ProveDate: string;      // วันที่ตรวจรับ
    ProveTime: string;      // เวลาตรวจรับ
    DeliveryDocNo: string;  // เลขที่หนังสือนำส่ง
    DeliveryDate: string;   // วันที่นำส่ง
    DeliveryTime: string;   // เวลานำส่ง
    PosExaminer: string;    // ตำแหน่งผู้ตรวจรับ
    DeptExaminer: string;   // หน่วยงานผู้ตรวจรับ
    PosScience: string;     // ตำแหน่งผู้พิสูจน์
    DeptScience: string;    // หน่วยงานผู้พิสูจน์
    ProveScienceDate: string;   // วันที่พิสูจน์
    ProveScienceTime: string;   // เวลาที่พิสูจน์
    Command: string         // คำสั่ง

    iPopup: number;
    modePopup: string = 'I';

    // --- Object ---
    oArrest: Arrest;
    oProve: Prove;
    oProveStaff: ProveStaff;
    oProveScienceStaff: ProveStaff;
    oProveScience: ProveScience;
    oProveProduct: ProveProduct;




    // ----- Model ------ //
    // @Input() suspectComponent: SuspectModalComponent;

    constructor(
        private navService: NavigationService,
        private ngbModel: NgbModal,
        private activeRoute: ActivatedRoute,
        private proveService: ProveService,
        private ArrestSV: ArrestService,
        private LawsuitSV: LawsuitService,
        private MasterSV: MasterService
    ) {
        // set false
        this.navService.setNewButton(false);
        this.navService.setSearchBar(false);
        // set true
        this.navService.setNextPageButton(true);
    }

    ngOnInit() {
        this.active_Route();
        this.navigate_Service();
        this.CreateObject();

        this.getStation();
        this.getProveStaff();
        this.getUnit();

        this.ArrestCode = this.ArrestCode;
        this.getLawsuitByID(this.LawsuitID);

        let date = new Date();
        this.ProveYear = (date.getFullYear() + 543).toString();
        this.ProveDate = this.getCurrentDate();
        this.ProveTime = this.getCurrentTime();
        this.DeliveryDate = this.getCurrentDate();
        this.DeliveryTime = this.getCurrentTime();
        this.ProveScienceDate = this.getCurrentDate();
        this.ProveScienceTime = this.getCurrentTime();
    }

    private active_Route() {
        this.sub = this.navService.showFieldEdit.subscribe(status => {
            this.viewMode = status;
            if (!this.viewMode) {
                this.navService.setCancelButton(true);
                this.navService.setSaveButton(true);
                this.navService.setPrintButton(false);
                this.navService.setSearchBar(false);
                this.navService.setDeleteButton(false);
                this.navService.setEditButton(false);

            } else {
                this.navService.setPrintButton(true);
                this.navService.setDeleteButton(true);
                this.navService.setEditButton(true);
                this.navService.setSearchBar(false);
                this.navService.setCancelButton(false);
                this.navService.setSaveButton(false);
            }


            this.navService.setNextPageButton(true);
        });


        this.param = this.activeRoute.params.subscribe(p => {
            if (p['code1']) {
                this.LawsuitID = p['code1'];
            }

            if (p['code2']) {
                this.ArrestCode = p['code2'];
            }

            if (p['code3']) {
                this.ProveID = p['code3'];
            }
        });
    }

    private navigate_Service() {
        this.sub = this.navService.showFieldEdit.subscribe(p => {
            this.showEditField = p;
        });

        this.sub = this.navService.onSave.subscribe(async status => {
            if (status) {
                // set action save = false
                await this.navService.setOnSave(false);
                // debugger
                if (this.ProveID == '0') {
                    this.onInsProve();

                } else {
                    //   this.onUpdCompare();
                    //   this.onComplete();
                }
            }
        });

        // this.sub = this.navService.onDelete.subscribe(async status => {
        //     if (status) {
        //         await this.navService.setOnDelete(false);
        //         this.onDelete();
        //     }
        // });

        // this.sub = this.navService.onPrint.subscribe(async status => {
        //   if (status) {
        //     await this.navService.setOnPrint(false);
        //     this.modal = this.ngbModel.open(this.printDocModel, { size: 'lg', centered: true });
        //   }
        // })

        this.sub = this.navService.onCancel.subscribe(async status => {
            if (status) {
                await this.navService.setOnCancel(true);
                await this.navService.setEditButton(true);
                await this.navService.setPrintButton(true);
                await this.navService.setDeleteButton(true);
                // set true
                await this.navService.setSaveButton(false);
                await this.navService.setCancelButton(false);
            }
        })
    }

    onInsProve() {
        this.oProve.DeliveryDocNo = this.DeliveryDocNo;
        this.oProve.DeliveryDate = this.DeliveryDate + ' ' + this.DeliveryTime;
        this.oProve.ProveReportNo = this.ReportNo + "/" + this.ProveYear;
        this.oProve.ProveDate = this.ProveDate + ' ' + this.ProveTime;
        this.oProve.IndictmentID = this.IndictmentID;

        this.oProve.ProveStaff = [];
        this.oProve.ProveStaff.push(this.oProveStaff);
        this.oProve.ProveStaff.push(this.oProveScienceStaff);
        // debugger
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    // openSuspect(e) {
    //     this.modal = this.suspectModalService.open(e, { size: 'lg', centered: true });
    // }


    CreateObject() {
        this.oProve = {
            ProveID: "",
            DeliveryDocNo: "",
            DeliveryDate: "",
            ProveReportNo: "",
            ProveDate: "",
            ProveStationCode: "",
            ProveStation: "",
            IndictmentID: "",
            IsActive: 1,
            ProveProduct: [],
            ProveStaff: [],
            ProveScience: []
        }
    }

    getLawsuitByID(LawsuitID: string) {
        this.LawsuitSV.LawsuitegetByCon(LawsuitID).then(async res => {
            // --- รายละเอียดคดี ----

            if (res.IsOutside == "1") {
                this.LawsuiltCode = "น " + res.LawsuitNo;
            }
            else {
                this.LawsuiltCode = res.LawsuitNo;
            }

            this.IndictmentID = res.IndictmentID.toString();

            this.getArrestByID(this.ArrestCode)

        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
    }

    getArrestByID(ArrestCode: string) {
        this.ArrestSV.getByArrestCon(ArrestCode).then(async res => {
            this.oArrest = res;

            this.ArrestProduct = res.ArrestProduct;
            this.tempArrestProduct = res.ArrestProduct;

            // debugger
            this.getProveProduct();
            this.getGuiltBaseByID();

        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
    }

    getGuiltBaseByID() {
        var aIndex;
        var arrestIndex;
        if (this.oArrest.ArrestIndictment.length > 0) {
            aIndex = this.getIndexOf(this.oArrest.ArrestIndictment, this.IndictmentID, "IndictmentID");
        }

        if (aIndex != "false") {
            this.LawsuitSV.getGuiltBaseByCon(this.oArrest.ArrestIndictment[aIndex].GuiltBaseID.toString()).then(async res => {
                this.SectionName = res.CompareMasLawSection.SectionName;
                this.GuiltBaseName = res.CompareMasLawGuiltBase.GuiltBaseName;
                this.SectionNo = res.CompareMasLawPenalty.SectionNo.toString();
                this.PenaltyDesc = res.CompareMasLawPenalty.PenaltyDesc;

            }, (err: HttpErrorResponse) => {
                alert(err.message);
            });
        }
    }

    getIndexOf(arr, val, prop) {
        var l = arr.length,
            k = 0;
        for (k = 0; k < l; k = k + 1) {
            if (arr[k][prop] == val) {
                return k;
            }
        }
        return false;
    }

    getProveProduct() {
        // debugger
        // ---- กรณีไม่มีเลข ProveID จะ default Product จาก ArrestProduct----
        if (this.ProveID == "0") {
            if (this.oArrest.ArrestProduct.length > 0) {
                this.oProve.ProveProduct = [];
                this.oProve.ProveScience = [];

                for (var i = 0; i < this.oArrest.ArrestProduct.length; i += 1) {
                    this.oProveProduct = {
                        ProductID: this.oArrest.ArrestProduct[i].ProductID,
                        ProductType: this.oArrest.ArrestProduct[i].ProductType,
                        ProveID: "",
                        ProductRefID: "",
                        GroupCode: this.oArrest.ArrestProduct[i].GroupCode,
                        IsDomestic: this.oArrest.ArrestProduct[i].IsDomestic,
                        ProductCode: this.oArrest.ArrestProduct[i].ProductCode,
                        BrandCode: this.oArrest.ArrestProduct[i].BrandCode,
                        BrandNameTH: this.oArrest.ArrestProduct[i].BrandNameTH,
                        BrandNameEN: this.oArrest.ArrestProduct[i].BrandNameEN,
                        SubBrandCode: this.oArrest.ArrestProduct[i].SubBrandCode,
                        SubBrandNameTH: this.oArrest.ArrestProduct[i].SubBrandNameTH,
                        SubBrandNameEN: this.oArrest.ArrestProduct[i].SubBrandNameEN,
                        ModelCode: this.oArrest.ArrestProduct[i].ModelCode,
                        ModelName: this.oArrest.ArrestProduct[i].ModelName,
                        FixNo1: this.oArrest.ArrestProduct[i].FixNo1,
                        DegreeCode: this.oArrest.ArrestProduct[i].DegreeCode,
                        Degree: this.oArrest.ArrestProduct[i].Degree,
                        SizeCode: this.oArrest.ArrestProduct[i].SizeCode,
                        Size: this.oArrest.ArrestProduct[i].Size,
                        SizeUnitCode: this.oArrest.ArrestProduct[i].SizeUnitCode,
                        SizeUnitName: this.oArrest.ArrestProduct[i].SizeUnitName,
                        FixNo2: this.oArrest.ArrestProduct[i].FixNo2,
                        SequenceNo: this.oArrest.ArrestProduct[i].SequenceNo,
                        ProductDesc: this.oArrest.ArrestProduct[i].ProductDesc,
                        CarNo: this.oArrest.ArrestProduct[i].CarNo,
                        Qty: this.oArrest.ArrestProduct[i].Qty,
                        QtyUnit: this.oArrest.ArrestProduct[i].QtyUnit,
                        NetVolume: this.oArrest.ArrestProduct[i].NetVolume,
                        NetVolumeUnit: this.oArrest.ArrestProduct[i].NetVolumeUnit,
                        ProveScienceID: "",
                        ProveScienceResult: "",
                        IsActive: "1",
                        ReferenceRetailPrice: "",
                        ReferenceVatRate: "",
                        ReferenceVatQty: "",
                        ReferenceRetailUnit: "",
                        ReferenceVatValue: "",
                        ReferenceVatUnit: "",
                        ReferenceDate: "",
                        IsStatusExhibit: "",
                        Remarks: ""
                    }

                    this.oProve.ProveProduct.push(this.oProveProduct);

                    this.oProveScience = {
                        ProveScienceID: "",
                        ProveID: "",
                        ProveScienceDate: "",
                        ProveScienceTime: "",
                        RequestNo: "",
                        ReportNo: "",
                        DeliveryDocNo: "",
                        ProveScienceResult: "",
                        ProveResult: "",
                        IsProveScience: "",
                        IsActive: 1
                    }

                    this.oProve.ProveScience.push(this.oProveScience);
                }
            }
        }
        else  // ---- กรณีมีเลข ProveID จะแสดงข้อมูล Product ตาม Prove Product ----
        {

        }
    }

    // --- เขียนที่ ---
    getStation() {
        this.MasterSV.getStation().then(async res => {
            if (res) {
                this.rawOptions = res;
            }
            // debugger
        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
    }

    onAutoChange(value: string) {
        // debugger
        if (value == '') {
            this.options = [];
        } else {

            this.options = this.rawOptions.filter(f => f.OfficeName.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
    }

    onAutoFocus(value: string) {
        if (value == '') {
            this.options = [];
        }
    }

    onAutoSelecteWord(event) {
        this.oProve.ProveStationCode = event.OfficeCode;
        this.oProve.ProveStation = event.OfficeName;
    }
    // ----- End เขียนที่ ---


    // --- ผู้ตรวจรับ ---
    getProveStaff() {
        this.MasterSV.getStaff().then(async res => {
            // debugger

            if (res) {
                this.rawStaffOptions = res;
            }
        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
    }

    StaffonAutoChange(value: string) {
        // debugger
        if (value == '') {
            this.Staffoptions = [];
            this.PosExaminer = "";
            this.DeptExaminer = "";
        } else {

            this.Staffoptions = this.rawStaffOptions.filter(f => f.FirstName.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
    }

    StaffonAutoFocus(value: string) {
        if (value == '') {
            this.Staffoptions = [];
        }
    }

    StaffonAutoSelecteWord(event) {
        this.oProveStaff = {
            ProgramCode: "XCS-60",
            ProcessCode: "XCS-60-05",
            LawsuitID: this.LawsuitID,
            StaffCode: event.StaffCode,
            TitleName: event.TitleName,
            FirstName: event.FirstName,
            LastName: event.LastName,
            PositionCode: event.OperationPosCode,
            PositionName: event.OperationPosName,
            PosLevel: event.PosLevel,
            PosLevelName: event.PosLevelName,
            DepartmentCode: event.OperationDeptCode,
            DepartmentName: event.OperationDeptName,
            DepartmentLevel: event.DeptLevel,
            OfficeCode: event.OfficeCode,
            OfficeName: event.OfficeName,
            OfficeShortName: event.OfficeShortName,
            ContributorCode: ""
        }

        this.PosExaminer = event.PosLevelName;
        this.DeptExaminer = event.OperationDeptName;
    }
    // ----- End ผู้ตรวจรับ ---


    // --- ผู้พิสูจน์ ---
    ScienceStaffonAutoChange(value: string) {
        // debugger
        if (value == '') {
            this.Scienceoptions = [];
            this.PosScience = "";
            this.DeptScience = "";
        } else {

            this.Scienceoptions = this.rawStaffOptions.filter(f => f.FirstName.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
    }

    ScienceStaffonAutoFocus(value: string) {
        if (value == '') {
            this.Scienceoptions = [];
        }
    }

    ScienceStaffonAutoSelecteWord(event) {
        this.oProveScienceStaff = {
            ProgramCode: "XCS-60",
            ProcessCode: "XCS-60-05",
            LawsuitID: this.LawsuitID,
            StaffCode: event.StaffCode,
            TitleName: event.TitleName,
            FirstName: event.FirstName,
            LastName: event.LastName,
            PositionCode: event.OperationPosCode,
            PositionName: event.OperationPosName,
            PosLevel: event.PosLevel,
            PosLevelName: event.PosLevelName,
            DepartmentCode: event.OperationDeptCode,
            DepartmentName: event.OperationDeptName,
            DepartmentLevel: event.DeptLevel,
            OfficeCode: event.OfficeCode,
            OfficeName: event.OfficeName,
            OfficeShortName: event.OfficeShortName,
            ContributorCode: ""
        }

        this.PosScience = event.PosLevelName;
        this.DeptScience = event.OperationDeptName;
    }
    // ----- End ผู้ตรวจรับ ---




    // ----- DateTime -----
    getCurrentDate() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toISOString().substring(0, 10);
    }

    getCurrentTime() {
        let date = new Date();
        // debugger
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
    }
    // ----- End DateTime -----


    // ----- Unit -----
    getUnit() {
        debugger

        this.proveService.getProveProductUnit("").then(async res => {
            if (res) {
                this.UnitOption = res;
            }
        }, (err: HttpErrorResponse) => {
            alert(err.message);
        });
    }

    // ----- End Unit -----


    // ----- Popup -----
    OpenPopupProduct(i: number) {
        this.oProveProduct = this.oProve.ProveProduct[i];
        this.oProveScience = this.oProve.ProveScience[i];

        this.iPopup = i;
        this.modePopup = "U";
    }

    ClosePopupProduct()
    {
        if(this.modePopup == "I")
        {
            this.oProve.ProveProduct.push(this.oProveProduct);
            this.oProve.ProveScience.push(this.oProveScience);
        }
        else if(this.modePopup == 'U')
        {
            this.oProve.ProveProduct[this.iPopup] = this.oProveProduct;
            this.oProve.ProveScience[this.iPopup] = this.oProveScience;
        }
        
    }

    AddProduct()
    {
        this.modePopup = "I";

        this.oProveProduct = {};
        this.oProveScience = {};
    }

    SelecteArrestProduct(event)
    {
        debugger
        // let aIndex;  
        // aIndex = this.getIndexOf(this.tempArrestProduct, this.oProveProduct.ProductID, "ProductID");
        
        // if(aIndex != false)
        // {
        //     this.oProveProduct = {};

        //     this.oProveProduct = this.tempArrestProduct[aIndex];
        // }
    }
    // ----- End Popup -----
}
