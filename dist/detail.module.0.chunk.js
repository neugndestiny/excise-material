webpackJsonp(["detail.module.0"],{

/***/ "./src/app/pages/fine/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card \">\n  <div class=\"card-header  unset-radius\">\n    <app-card-actions-collapse></app-card-actions-collapse>\n    <h4 class=\"card-title m-b-0\">ฐานความผิด</h4>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-3\">ชื่อผู้ต้องหา : </label>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-4\">การกระทำผิด (ครั้ง) : </label>\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-3\">ฐานความผิดมาตรา : </label>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-form-label col-md-4\">ฐานความผิด : </label>\n            <div class=\"col-md-7\">\n              <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card \">\n  <div class=\"card-header unset-radius\">\n    <app-card-actions-collapse></app-card-actions-collapse>\n    <h4 class=\"card-title m-b-0\">รายละเอียดการกระทำผิด</h4>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-body\">\n      <div class=\"card\">\n        <div class=\"card-header  unset-radius\">\n          <app-card-actions-collapse></app-card-actions-collapse>\n          <h4 class=\"card-title m-b-0\">ครั้งที่ 1</h4>\n        </div>\n\n        <div class=\"card-body\">\n          <div class=\"form-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">เลขที่ใบงาน : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label  col-md-3\">วันที่จับกุม : </label>\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitDate\" disabled>\n                  </div>\n                  <label class=\"col-form-label text-center col-md-2\">เวลา</label>\n                  <div class=\"col-md-3\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitTime\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">เลขที่คดีรับคำกล่าวโทษ : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label  col-md-3\">วันที่รับคดี : </label>\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitDate\" disabled>\n                  </div>\n                  <label class=\"col-form-label text-center col-md-2\">เวลา</label>\n                  <div class=\"col-md-3\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitTime\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">ค่าปรับสุทธิ : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-body\">\n              <div class=\"table-responsive table-striped no-wrap\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"footable-sortable text-center\">ลำดับ</th>\n                      <th class=\"footable-sortable\">ของกลาง</th>\n                      <th class=\"footable-sortable\">จำนวน</th>\n                      <th class=\"footable-sortable\">ปริมาตรสุทธิ</th>\n                      <th class=\"footable-sortable\">ค่าปรับสุทธิรายของกลาง</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr class=\"footable\">\n                      <td class=\"text-center\">1</td>\n                      <td class=\"\">สุรา/สุราแช่/ชนิดเบียร์/Hoegaarden/Witbier/330 มล.</td>\n                      <td>12 ขวด</td>\n                      <td class=\"\">3960 มล.</td>\n                      <td class=\"\">400,000.00</td>\n                    </tr>\n                    <tr class=\"footable\">\n                      <td class=\"text-center\">2</td>\n                      <td class=\"\">สุรา/สุราแช่/ชนิดเบียร์/Hoegaarden/Witbier/330 มล.</td>\n                      <td>12 ขวด</td>\n                      <td class=\"\">3960 มล.</td>\n                      <td class=\"\">400,000.00</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card \">\n        <div class=\"card-header  unset-radius\">\n          <app-card-actions-collapse></app-card-actions-collapse>\n          <h4 class=\"card-title m-b-0\">ครั้งที่ 2</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">เลขที่ใบงาน : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label  col-md-3\">วันที่จับกุม : </label>\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitDate\" disabled>\n                  </div>\n                  <label class=\"col-form-label text-center col-md-2\">เวลา</label>\n                  <div class=\"col-md-3\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitTime\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">เลขที่คดีรับคำกล่าวโทษ : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label  col-md-3\">วันที่รับคดี : </label>\n                  <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitDate\" disabled>\n                  </div>\n                  <label class=\"col-form-label text-center col-md-2\">เวลา</label>\n                  <div class=\"col-md-3\">\n                    <input class=\"form-control\" type=\"text\" name=\"lawsuitTime\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-md-3\">ค่าปรับสุทธิ : </label>\n                  <div class=\"col-md-9\">\n                    <input class=\"form-control\" type=\"text\" name=\"allegationCode\" disabled>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive table-striped no-wrap\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"footable-sortable text-center\">ลำดับ</th>\n                      <th class=\"footable-sortable\">ของกลาง</th>\n                      <th class=\"footable-sortable\">จำนวน</th>\n                      <th class=\"footable-sortable\">ปริมาตรสุทธิ</th>\n                      <th class=\"footable-sortable\">ค่าปรับสุทธิรายของกลาง</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr class=\"footable\">\n                      <td class=\"text-center\">1</td>\n                      <td class=\"\">สุรา/สุราแช่/ชนิดเบียร์/Hoegaarden/Witbier/330 มล.</td>\n                      <td>12 ขวด</td>\n                      <td class=\"\">3960 มล.</td>\n                      <td class=\"\">400,000.00</td>\n                    </tr>\n                    <tr class=\"footable\">\n                      <td class=\"text-center\">2</td>\n                      <td class=\"\">สุรา/สุราแช่/ชนิดเบียร์/Hoegaarden/Witbier/330 มล.</td>\n                      <td>12 ขวด</td>\n                      <td class=\"\">3960 มล.</td>\n                      <td class=\"\">400,000.00</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row pages\">\n        <div class=\"col-9 \">\n          <a href=\"#\">|&lt;&lt;</a> หน้าที่\n          <select class=\"custom-select\">\n            <option>\n          </select> จาก 2 หน้า\n          <a href=\"#\">&gt;&gt;|</a> รายการที่ 1-5 จาก 13 รายการ\n\n        </div>\n        <div class=\"col-3 text-right\">\n          แสดง\n          <select class=\"custom-select\">\n            <option>2</option>\n            <option>5</option>\n            <option>7</option>\n          </select> รายการ\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/fine/detail/detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".border-navy {\n  border-color: #005C97; }\n\n.table-striped tbody tr:nth-of-type(2n+1) {\n  background: #e5eef4; }\n\n.card-navy {\n  background: #ccdeea; }\n\n.btn-navy {\n  background: #005e8d;\n  color: white; }\n\n.icn-collapse {\n  color: black;\n  font-size: 18px; }\n\n.top-navbar {\n  background: linear-gradient(45deg, #005e8d, #353993); }\n\n.btn-action {\n  color: red;\n  font-size: 20px;\n  cursor: pointer; }\n\n#btn-browse {\n  opacity: 0; }\n\n.modal-lg {\n  max-width: 1200px;\n  margin-left: 170px; }\n\n.modal-content {\n  max-height: 650px; }\n\n.card-popup {\n  max-height: 300px; }\n\n.card-overflow {\n  overflow: auto; }\n\n.form-popup {\n  margin-bottom: 0; }\n\n.col-form-label {\n  color: black;\n  font-weight: 400; }\n\n.close-popup {\n  cursor: pointer; }\n\n.card-header {\n  background: #ccdeea;\n  border-color: #ccdeea; }\n"

/***/ }),

/***/ "./src/app/pages/fine/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_header_navigation_navigation_service__ = __webpack_require__("./src/app/shared/header-navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    // advSearch: any;
    function DetailComponent(router, navservice) {
        this.router = router;
        this.navservice = navservice;
        this.viewMode = true;
        //  true
        this.navservice.setNextPageButton(true);
        // false
        this.navservice.setEditButton(false);
        this.navservice.setDeleteButton(false);
        this.navservice.setPrintButton(false);
        this.navservice.setSaveButton(false);
        this.navservice.setCancelButton(false);
        this.navservice.setSearchBar(false);
        this.navservice.setNewButton(false);
        // this.advSearch = this.navservice.showAdvSearch;
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("./src/app/pages/fine/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/fine/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_header_navigation_navigation_service__["a" /* NavigationService */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/fine/detail/detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_component__ = __webpack_require__("./src/app/pages/fine/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_card_actions_card_actions_module__ = __webpack_require__("./src/app/pages/component/card-actions/card-actions.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: {
            urls: [
                { title: 'หน้าหลัก', url: '/' },
                { title: 'ค้นหางานเปรียบแทียบและชำระค่าปรับ', url: '/fine/list' },
                { title: 'จัดการข้อมูลงานเปรียบแทียบและชำระค่าปรับ', url: '/fine/detail' },
                { title: 'รายละเอียดฐานความผิดเดิม' }
            ],
            pageType: 'manage',
            nextPage: { title: 'เปรียบเทียบ', url: '#' }
        },
        component: __WEBPACK_IMPORTED_MODULE_2__detail_component__["a" /* DetailComponent */]
    }
];
var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__component_card_actions_card_actions_module__["a" /* CardActionsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_component__["a" /* DetailComponent */]
            ]
        })
    ], DetailModule);
    return DetailModule;
}());



/***/ })

});
//# sourceMappingURL=detail.module.0.chunk.js.map