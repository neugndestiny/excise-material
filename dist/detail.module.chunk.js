webpackJsonp(["detail.module"],{

/***/ "./src/app/pages/lawsuit/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-step-wizard [sectionId]=\"3\"></app-step-wizard>\n\n<ng-template #printDocModal let-c=\"close\" let-d=\"dismiss\">\n  <app-print-doc-modal (c)=\"modal.close()\" (d)=\"modal.dismiss()\"></app-print-doc-modal>\n</ng-template>\n\n<div class=\"card card-outline-bluish unset-radius\">\n  <div class=\"card-header unset-radius\">\n    <app-card-actions-collapse></app-card-actions-collapse>\n    <h5 class=\"card-title m-b-0\">ข้อกล่าวหา</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-4\">ฐานความผิดมาตรา : </label>\n            <div class=\"col-md-8\" *ngFor=\"let item of masLawGroupSectionList;\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.SectionName\" name=\"SectionName\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-3\">ฐานความผิด : </label>\n            <div class=\"col-md-9\" *ngFor=\"let item of masLawGuitBaseList;\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.GuiltBaseName\" name=\"GuiltBaseName\" disabled>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-4\">บทกำหนดโทษ : </label>\n            <div class=\"col-md-8\" *ngFor=\"let item of masLawGroupSectionList;\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.SectionNo\" name=\"SectionNo\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-3\">อัตราโทษ : </label>\n            <div class=\"col-md-9\" *ngFor=\"let item of masLawPenaltyList;\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.PenaltyDesc\" name=\"PenaltyDesc\" disabled>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card card-outline-bluish unset-radius\">\n  <div class=\"card-header unset-radius\">\n    <app-card-actions-collapse></app-card-actions-collapse>\n    <h5 class=\"card-title m-b-0\">รับคำกล่าวโทษ</h5>\n  </div>\n  <div class=\"card-body\" *ngIf=\"lawsuitList\">\n    <div class=\"form-body\" *ngFor=\"let item of lawsuitList;\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group row\">\n            <div class=\"custom-control custom-checkbox col-form-label col-md-2\">\n              <input class=\"col-form-label filled-in chk-col-indigo\" [checked]=\"item.IsLawsuit\" (change)=\"isLawSuitChecked(item.IsLawsuit)\" id=\"IsLawsuitCheck\" type=\"checkbox\" [disabled]=\"showEditField\">\n              <label for=\"IsLawsuitCheck\">ไม่รับเป็นคดีเพราะ :</label>\n            </div>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.ReasonDontLawsuit\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group row\">\n            <div class=\"custom-control custom-checkbox col-form-label col-md-4\">\n              <input class=\"col-form-label filled-in chk-col-indigo\" [checked]=\"item.IsOutside\" (change)=\"isLawSuitChecked(item.IsOutside)\" id=\"IsOutside\" type=\"checkbox\" [disabled]=\"showEditField\">\n              <label for=\"IsOutside\">คดีรับคำกล่าวโทษนอกสถานที่ทำการ</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-4\">เลขคดีรับคำกล่าวโทษ : </label>\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.LawsuitNo\" name=\"LawsuitNo\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-3\">วันที่รับคดี : </label>\n            <div class=\"col-md-4\">\n              <input class=\"form-control\" type=\"date\" [(ngModel)]=\"item.LawsuitDate\" name=\"LawsuitDate\" [disabled]=\"showEditField\">\n            </div>\n            <label class=\"col-form-label text-center col-md-2\">เวลา</label>\n            <div class=\"col-md-3\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.LawsuitTime\" name=\"LawsuitTime\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngFor=\"let staff of item.LawsuiteStaff;\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-4\">ผู้รับคดี : </label>\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"staff.FullName\" name=\"FullName\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-3\">ตำแหน่ง : </label>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"staff.PositionName\" name=\"PositionName\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngFor=\"let staff of item.LawsuiteStaff;\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-4\">หน่วยงาน : </label>\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"staff.DepartmentName\" name=\"DepartmentName\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label text-right col-md-3\">เขียนที่ : </label>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.LawsuitStation\" name=\"LawsuitStation\" [disabled]=\"showEditField\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-2\">คำให้การของผู้กล่าวโทษ : </label>\n            <div class=\"col-md-10\">\n              <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"item.AccuserTestimony\" name=\"AccuserTestimony\" [disabled]=\"showEditField\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-responsive table-striped no-wrap\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"footable-sortable text-center\">ลำดับ</th>\n            <th class=\"footable-sortable\">ชื่อผู้ต้องหา</th>\n            <th class=\"footable-sortable\">ลักษณะคดี</th>\n            <th class=\"footable-sortable\">คดีสิ้นสุดชั้น</th>\n            <th class=\"footable-sortable col-6\">รายละเอียดของกลาง</th>\n            <th class=\"footable-sortable\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"lawBreakerList\">\n          <tr class=\"footable\" *ngFor=\"let item of lawBreakerList; let i = index;\">\n            <td class=\"text-center\">{{i+1}}</td>\n            <td>\n              {{item.LawbreakerFullName}}\n            </td>\n            <td>\n              <!-- {{item.type}} -->\n            </td>\n            <td>\n              <!-- {{item.caseEnd}} -->\n            </td>\n            <td *ngFor=\"let list of arrestList;\">\n              <p *ngFor=\"let item of list.ArrestProduct;\">\n                {{ item.ProductName }}\n              </p>\n            </td>\n            <td>\n              <i class=\"ti-pencil-alt btn-action\" [hidden]=\"showEditField\" data-toggle=\"modal\" data-target=\"#editPopUp\"></i>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"card card-outline-bluish unset-radius\">\n  <div class=\"card-header unset-radius\">\n    <app-card-actions-collapse></app-card-actions-collapse>\n    <h5 class=\"card-title m-b-0\">เอกสารแนบภายใน</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn waves-effect waves-light btn-themecolor\" [disabled]=\"showEditField\"> เพิ่มเอกสารแนบ </button>\n    </div>\n    <div class=\"table-responsive table-striped no-wrap\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"footable-sortable text-center col-1\">ลำดับ</th>\n            <th class=\"footable-sortable\">ชื่อเอกสารแนบ</th>\n            <th class=\"footable-sortable\">ที่อยู่เอกสารแนบ</th>\n          </tr>\n        </thead>\n        <!-- <tbody>\n          <tr class=\"footable\" *ngFor=\"let item of fileItem; let i = index;\">\n            <td class=\"text-center\">{{i+1}}</td>\n            <td>\n              <input class=\"form-control\" type=\"text\" nmae=\"fileName\" [(ngModel)]=\"item.fileName\" [disabled]=\"showEditField\">\n            </td>\n            <td>\n              <input class=\"form-control\" type=\"text\" name=\"filePath\" [(ngModel)]=\"item.filePath\" [disabled]=\"showEditField\">\n            </td>\n            <td>\n              <i class=\"ti-trash btn-action\" [hidden]=\"showEditField\"></i>\n            </td>\n          </tr>\n        </tbody> -->\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"editPopUp\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header top-navbar text-white\">\n        ลักษณะคดีรายผู้ต้องหา\n        <div class=\"card-actions\">\n          <a data-toggle=\"modal\" data-target=\"#editPopUp\">\n            <i class=\"ti-close\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"text-right\"> XCS60-04-03-00-00 </div>\n        <div class=\"form-body m-t-10\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\">ชื่อผู้ต้องหา : </label>\n                <div class=\"input-group col-md-9\">\n                  <input class=\"form-control\" type=\"text\" name=\"fullName\" [(ngModel)]=\"fullName\" disabled>\n                  <span class=\"input-group-addon\">\n                    <i class=\"mdi mdi-eye\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\">ลักษณะคดี : </label>\n                <div class=\"col-md-9\">\n                  <select class=\"custom-select col-12\">\n                    <option selected=\"\">เปรียบเทียบปรับ</option>\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-form-label col-md-3\">คดีสิ้นสุดชั้น : </label>\n                <div class=\"col-md-9\">\n                  <select class=\"custom-select col-12\">\n                    <option selected=\"\">กรมสรรพสามิต</option>\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card card-outline-bluish unset-radius\">\n          <div class=\"card-header unset-radius\">\n            <app-card-actions-collapse></app-card-actions-collapse>\n            <h5 class=\"card-title m-b-0\">คำพิพากษาของศาล</h5>\n          </div>\n          <div class=\"card-body card-overflow\">\n            <div class=\"form-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-form-label col-md-4\">หมายเลขคดีดำ : </label>\n                    <div class=\"col-md-8\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-form-label col-md-4\">หมายเลขคดีแดง : </label>\n                    <div class=\"col-md-8\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label class=\"col-form-label\">คำพิพากษาของศาล </label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-popup row m-l-5\">\n                    <div class=\"custom-control custom-checkbox col-form-label col-md-6\">\n                      <input class=\"col-form-label filled-in chk-col-indigo\" id=\"pay\" type=\"checkbox\">\n                      <label for=\"pay\">สั่งปรับเป็นจำนวน (บาท) :</label>\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row m-l-5\">\n                    <div class=\"custom-control custom-checkbox col-form-label col-md-6\">\n                      <input class=\"col-form-label filled-in chk-col-indigo\" id=\"prison\" type=\"checkbox\">\n                      <label for=\"prison\">สั่งจำคุกเป็นเวลา :</label>\n                    </div>\n                    <div class=\"col-md-5\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-form-label col-md-4\">หน่วย : </label>\n                    <div class=\"col-md-8\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label class=\"col-form-label\">วิธีชำระค่าปรับ </label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-popup row m-l-5\">\n                    <div class=\"custom-control custom-radio col-form-label col-md-5\">\n                      <input name=\"group5\" id=\"oneTime\" class=\"col-form-label with-gap radio-col-indigo\" type=\"radio\">\n                      <label for=\"oneTime\">ชำระครั้งเดียว</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-popup row m-l-5\">\n                    <label class=\"col-form-label col-md-6\">วันที่กำหนดชำระค่าปรับ : </label>\n                    <div class=\"col-md-6\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-popup row m-l-5\">\n                    <div class=\"custom-control custom-radio col-form-label col-md-6\">\n                      <input name=\"group5\" id=\"perTime\" class=\"col-form-label with-gap radio-col-indigo\" type=\"radio\">\n                      <label for=\"perTime\">แบ่งชำระเป็นงวด</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-popup row m-l-5\">\n                    <label class=\"col-form-label col-md-6\">จำนวนงวด : </label>\n                    <div class=\"col-md-6\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-form-label col-md-5\">วันที่เริ่มชำระค่าปรับ : </label>\n                    <div class=\"col-md-7\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row m-l-5\">\n                    <label class=\"col-form-label col-md-6\">รอบชำระค่าปรับ : </label>\n                    <div class=\"col-md-6\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-form-label col-md-5\">หน่วย : </label>\n                    <div class=\"col-md-7\">\n                      <input class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn waves-effect waves-light btn-navy\" data-toggle=\"modal\" data-target=\"#editPopUp\">บันทึก</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/lawsuit/detail/detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-action {\n  color: red;\n  font-size: 20px;\n  cursor: pointer; }\n\n#btn-browse {\n  opacity: 0; }\n\n.modal-lg {\n  max-width: 1200px;\n  margin-left: 170px; }\n\n.form-popup {\n  margin-bottom: 0; }\n\n.col-form-label {\n  color: black;\n  font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/pages/lawsuit/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_message__ = __webpack_require__("./src/app/config/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_dateFormat__ = __webpack_require__("./src/app/config/dateFormat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lawsuit_service__ = __webpack_require__("./src/app/pages/lawsuit/lawsuit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_header_navigation_navigation_service__ = __webpack_require__("./src/app/shared/header-navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, activeRoute, navService, lawsuitService, ngbModel) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.navService = navService;
        this.lawsuitService = lawsuitService;
        this.ngbModel = ngbModel;
        this.masLawGroupSectionList = new Array();
        this.masLawGuitBaseList = new Array();
        this.masLawPenaltyList = new Array();
        this.arrestList = new Array();
        this.lawsuitList = new Array();
        this.fileList = new Array();
        this.lawBreakerList = new Array();
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.setShowButton();
        this.subNavService();
        this.getParamFromActiveRoute();
    };
    DetailComponent.prototype.setShowButton = function () {
        this.navService.setPrintButton(true);
        this.navService.setDeleteButton(true);
        this.navService.setEditButton(true);
        this.navService.setSearchBar(false);
        this.navService.setCancelButton(false);
        this.navService.setSaveButton(false);
    };
    DetailComponent.prototype.subNavService = function () {
        var _this = this;
        // Print Modal
        this.navService.onPrint.subscribe(function (status) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!status) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.navService.setOnPrint(false)];
                    case 1:
                        _a.sent();
                        this.modal = this.ngbModel.open(this.printDocModel, { size: 'lg', centered: true });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        // Save Button
        this.navService.onSave.subscribe(function (status) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!status) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.navService.setOnSave(false)];
                    case 1:
                        _a.sent();
                        this.lawsuitService.LawsuitupdByCon(this.lawsuitList[0]).then(function (res) {
                            if (res.IsSuccess) {
                                _this.navService.setEditField(true);
                                alert(__WEBPACK_IMPORTED_MODULE_0__config_message__["a" /* Message */].saveComplete);
                            }
                            else {
                                alert(__WEBPACK_IMPORTED_MODULE_0__config_message__["a" /* Message */].saveFail);
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        // Delete Button
        this.navService.onDelete.subscribe(function (status) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!status) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.navService.setOnDelete(false)];
                    case 1:
                        _a.sent();
                        if (confirm(__WEBPACK_IMPORTED_MODULE_0__config_message__["a" /* Message */].confirmAction)) {
                            this.lawsuitService.LawsuitupdDelete(this.lawsuitList[0].LawsuitID).then(function (res) {
                                if (res.IsSuccess) {
                                    alert(__WEBPACK_IMPORTED_MODULE_0__config_message__["a" /* Message */].saveComplete);
                                    _this.router.navigate(["/lawsuit/manage", "R"], {
                                        queryParams: { id: _this.lawsuitList[0].LawsuitID, code: "050100020" }
                                    });
                                }
                                else {
                                    alert(__WEBPACK_IMPORTED_MODULE_0__config_message__["a" /* Message */].cannotDelete);
                                }
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        // Edit Button
        this.navService.showFieldEdit.subscribe(function (status) {
            _this.showEditField = status;
            if (!_this.showEditField) {
                _this.navService.setSaveButton(true);
                _this.navService.setCancelButton(true);
                _this.navService.setPrintButton(false);
                _this.navService.setSearchBar(false);
                _this.navService.setDeleteButton(false);
                _this.navService.setEditButton(false);
            }
            else {
                _this.navService.setPrintButton(true);
                _this.navService.setDeleteButton(true);
                _this.navService.setEditButton(true);
                _this.navService.setSearchBar(false);
                _this.navService.setCancelButton(false);
                _this.navService.setSaveButton(false);
            }
        });
    };
    DetailComponent.prototype.getParamFromActiveRoute = function () {
        var _this = this;
        this.getDatafromManagePage = this.activeRoute.queryParams.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // ArrestgetByCon
                    return [4 /*yield*/, this.lawsuitService.ArrestgetByCon(params.ArrestCode).then(function (res) {
                            _this.arrestList.push(res);
                            _this.arrestList.map(function (p) {
                                p.OccurrenceDate = Object(__WEBPACK_IMPORTED_MODULE_1__config_dateFormat__["i" /* toLocalShort */])(p.OccurrenceDate);
                                p.OccurrenceTime = Object(__WEBPACK_IMPORTED_MODULE_1__config_dateFormat__["j" /* toTimeShort */])(p.OccurrenceTime);
                                p.ArrestStaff.map(function (staff) {
                                    staff.FullName = "" + staff.TitleName + staff.FirstName + " " + staff.LastName;
                                });
                            });
                        })];
                    case 1:
                        // ArrestgetByCon
                        _a.sent();
                        // await this.lawsuitService.ArrestgetByCon(params.code).then(res => {
                        //   console.log(res);
                        //   // if (res.IsSuccess) {
                        //     this.arrestList.push(res.ResponseData);
                        //   // }
                        // });
                        // LawsuitgetByCon
                        return [4 /*yield*/, this.lawsuitService.LawsuitgetByCon(params.LawsuitID).then(function (res) {
                                // if (res.IsSuccess) {
                                _this.lawsuitList.push(res);
                                _this.lawsuitList.map(function (data) {
                                    data.LawsuitDate = Object(__WEBPACK_IMPORTED_MODULE_1__config_dateFormat__["h" /* toLocalNumeric */])(data.LawsuitDate);
                                    data.LawsuitTime = Object(__WEBPACK_IMPORTED_MODULE_1__config_dateFormat__["j" /* toTimeShort */])(data.LawsuitTime);
                                    data.LawsuiteStaff.map(function (staff) {
                                        staff.FullName = staff.TitleName + " " + staff.FirstName + " " + staff.LastName;
                                    });
                                });
                                // }
                            })];
                    case 2:
                        // await this.lawsuitService.ArrestgetByCon(params.code).then(res => {
                        //   console.log(res);
                        //   // if (res.IsSuccess) {
                        //     this.arrestList.push(res.ResponseData);
                        //   // }
                        // });
                        // LawsuitgetByCon
                        _a.sent();
                        this.arrestList[0].ArrestIndictment.forEach(function (value) {
                            // Find lawbreakerID
                            value.OpsArrestIndicmentDetailCollection.forEach(function (data) {
                                _this.lawbreakerID = data.LawbreakerID;
                            });
                            // Find guiltbaseID
                            if (value.IndictmentID == params.IndictmentID) {
                                _this.guiltBaseID = value.GuiltBaseID;
                            }
                        });
                        // ArrestLawbreakergetByCon on Table
                        this.lawsuitService
                            .ArrestLawbreakergetByCon(this.lawbreakerID)
                            .then(function (res) {
                            // if (res.IsSuccess) {
                            _this.lawBreakerList.push(res);
                            // Check Entity Type
                            if (res.EntityType == 0) {
                                _this.lawBreakerList.map(function (list) {
                                    list.LawbreakerFullName = res.ResponseData.CompanyTitle + " " + res.ResponseData.CompanyName;
                                });
                            }
                            else {
                                _this.lawBreakerList.map(function (list) {
                                    list.LawbreakerFullName = "" + res.ResponseData.LawbreakerTitleName + res.ResponseData.LawbreakerFirstName + "\n                  " + res.ResponseData.LawbreakerMiddleName + " " + res.ResponseData.LawbreakerLastName;
                                });
                            }
                            // }
                        });
                        this.lawsuitService
                            .CompareMasLawgetByCon(this.guiltBaseID)
                            .then(function (res) {
                            if (res) {
                                for (var key in res) {
                                    if (key == "CompareMasLawSection") {
                                        _this.masLawGroupSectionList.push(res[key]);
                                    }
                                    else if (key == "CompareMasLawGuiltBase") {
                                        _this.masLawGuitBaseList.push(res[key]);
                                    }
                                    else if (key == "CompareMasLawPenalty") {
                                        _this.masLawPenaltyList.push(res[key]);
                                    }
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    //
    // isLawSuitChecked(IsLawSuit) {
    //   if (IsLawSuit == 1) {
    //     this.lawsuitList.map(data => {
    //       data.IsLawsuit = 0;
    //     });
    //   } else {
    //     this.lawsuitList.map(data => {
    //       data.IsLawsuit = 1;
    //     });
    //   }
    // }
    //
    // isOutSideChecked(IsOutside) {
    //   if (IsOutside == 1) {
    //     this.lawsuitList.map(data => {
    //       data.IsOutside = 0;
    //     });
    //   } else {
    //     this.lawsuitList.map(data => {
    //       data.IsOutside = 1;
    //     });
    //   }
    // }
    DetailComponent.prototype.attachFile = function (file) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_13" /* ViewChild */])('printDocModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ElementRef */])
    ], DetailComponent.prototype, "printDocModel", void 0);
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: "app-detail",
            template: __webpack_require__("./src/app/pages/lawsuit/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/lawsuit/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_header_navigation_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__lawsuit_service__["a" /* LawsuitService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/lawsuit/detail/detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lawsuit_service__ = __webpack_require__("./src/app/pages/lawsuit/lawsuit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_pagination_table_pagination_table_module__ = __webpack_require__("./src/app/pages/component/pagination-table/pagination-table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_component__ = __webpack_require__("./src/app/pages/lawsuit/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_card_actions_card_actions_module__ = __webpack_require__("./src/app/pages/component/card-actions/card-actions.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__print_doc_modal_print_doc_modal_module__ = __webpack_require__("./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_step_wizard_step_wizard_module__ = __webpack_require__("./src/app/pages/component/step-wizard/step-wizard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_suspect_modal_suspect_modal_module__ = __webpack_require__("./src/app/pages/component/suspect-modal/suspect-modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_modal_lawbreaker_modal_lawbreaker_module__ = __webpack_require__("./src/app/pages/component/modal-lawbreaker/modal-lawbreaker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_datepicker_i18n_service__ = __webpack_require__("./src/app/services/datepicker-i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__arrests_arrests_service__ = __webpack_require__("./src/app/pages/arrests/arrests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__prove_prove_service__ = __webpack_require__("./src/app/pages/prove/prove.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: "",
        data: {
            urls: [
                { title: "หน้าหลัก", url: "/" },
                { title: "ค้นหาบันทึกรับคำกล่าวโทษ", url: "/lawsuit/list" },
                { title: "จัดการข้อมูลบันทึกรับคำกล่าวโทษ" },
                { title: "จัดการข้อมูลรายละเอียดบันทึกรับคำกล่าวโทษ" }
            ],
            pageType: "manage",
            codePage: "XCS60-04-03-00-00"
        },
        component: __WEBPACK_IMPORTED_MODULE_6__detail_component__["a" /* DetailComponent */]
    }
];
var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_7__component_card_actions_card_actions_module__["a" /* CardActionsModule */],
                __WEBPACK_IMPORTED_MODULE_13__component_suspect_modal_suspect_modal_module__["a" /* SuspectModalModule */],
                __WEBPACK_IMPORTED_MODULE_14__component_modal_lawbreaker_modal_lawbreaker_module__["a" /* ModalLawbreakerModule */],
                __WEBPACK_IMPORTED_MODULE_8__print_doc_modal_print_doc_modal_module__["a" /* PrintDocModalModule */],
                __WEBPACK_IMPORTED_MODULE_5__component_pagination_table_pagination_table_module__["a" /* PaginationTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__component_step_wizard_step_wizard_module__["a" /* StepWizardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__detail_component__["a" /* DetailComponent */]
            ], providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["c" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_15__services_datepicker_i18n_service__["a" /* DatepickerI18nService */] },
                __WEBPACK_IMPORTED_MODULE_4__lawsuit_service__["a" /* LawsuitService */],
                __WEBPACK_IMPORTED_MODULE_16__arrests_arrests_service__["a" /* ArrestsService */],
                __WEBPACK_IMPORTED_MODULE_17__prove_prove_service__["a" /* ProveService */]
            ]
        })
    ], DetailModule);
    return DetailModule;
}());



/***/ }),

/***/ "./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"onPrint(form)\">\n    <div class=\"modal-header bg-theme\">\n        <div class=\"row\">\n            <div class=\"col-lg-5\">\n                <h4 class=\"modal-title text-white\">พิมพ์เอกสาร</h4>\n            </div>\n            <a href=\"javaScript:void(0);\" class=\"close text-white font-14\" aria-label=\"Close\" (click)=\"dismiss('Cross click')\">\n                <span aria-hidden=\"true\">\n                    <i class=\" ti-close\"></i>\n                </span>\n            </a>\n        </div>\n    </div>\n    <div class=\"modal-body font-14\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-sm table-striped table-set-border\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th class=\"text-center\">ลำดับ</th>\n                        <th>ชื่อเอกสาร</th>\n                        <th>ประเภทเอกสาร</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of printDoc; let i=index;\">\n                        <td class=\"text-center\">\n                            <input type=\"checkbox\" [id]=\"'td'+i\" name=\"ischeck\" ngModel class=\"filled-in chk-col-indigo\">\n                            <label [for]=\"'td'+i\" class=\"m-0\"></label>\n                        </td>\n                        <td class=\"text-center\">{{i+1}}</td>\n                        <td>{{item.DocName}}</td>\n                        <td>{{item.DocType}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-lg-2 col-4\">\n            <button type=\"submit\" class=\"btn btn-block btn-themecolor\">พิมพ์</button>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintDocModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintDocModalComponent = /** @class */ (function () {
    function PrintDocModalComponent() {
        this.printDoc = [
            {
                DocName: 'บันทึกจับกุม (ส.ส. 2/39)',
                DocType: 'แบบฟอร์ม'
            }, {
                DocName: 'บันทึกจับกุม (ส.ส. 2/39)',
                DocType: 'เอกสารแนบภายใน'
            }
        ];
        this.d = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.c = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PrintDocModalComponent.prototype.ngOnInit = function () {
    };
    PrintDocModalComponent.prototype.onPrint = function (f) {
    };
    PrintDocModalComponent.prototype.dismiss = function (e) {
        this.d.emit(e);
    };
    PrintDocModalComponent.prototype.close = function (e) {
        this.c.emit(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PrintDocModalComponent.prototype, "ArrestCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], PrintDocModalComponent.prototype, "d", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], PrintDocModalComponent.prototype, "c", void 0);
    PrintDocModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-print-doc-modal',
            template: __webpack_require__("./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.html"),
            styles: [__webpack_require__("./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintDocModalComponent);
    return PrintDocModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintDocModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__print_doc_modal_component__ = __webpack_require__("./src/app/pages/lawsuit/print-doc-modal/print-doc-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrintDocModalModule = /** @class */ (function () {
    function PrintDocModalModule() {
    }
    PrintDocModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__print_doc_modal_component__["a" /* PrintDocModalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__print_doc_modal_component__["a" /* PrintDocModalComponent */]]
        })
    ], PrintDocModalModule);
    return PrintDocModalModule;
}());



/***/ })

});
//# sourceMappingURL=detail.module.chunk.js.map