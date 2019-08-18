(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n</div>\r\n\r\n<h2>Create new bingo meeting</h2>\r\n\r\n<form [formGroup]=\"createMeetingForm\" (ngSubmit)=\"onSubmit(createMeetingForm.value)\">\r\n    <div>\r\n        <label for=\"userName\">\r\n          User Name\r\n        </label>\r\n        <input id=\"userName\" type=\"text\" formControlName=\"userName\">\r\n      </div>\r\n    \r\n      <div>\r\n        <label for=\"meetingName\">\r\n            Meeting Name\r\n        </label>\r\n        <input id=\"meetingName\" type=\"text\" formControlName=\"meetingName\">\r\n      </div>\r\n    \r\n  \r\n  <button class=\"button\" type=\"submit\">Create meeting</button>\r\n\r\n</form>\r\n<h2>Existing bingo meetings {{ meetings.length }}</h2>\r\n\r\n<ul >\r\n  <li *ngFor=\"let m of meetings\">\r\n    <h2>\r\n      <a [title]=\"m.meetingName +' details'\"  rel=\"noopener\" [routerLink]=\"['/meetings', m.idMeeting]\">\r\n        {{m.meetingName}}  created by {{m.participantName}} </a>\r\n    </h2>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/meeting-running/meeting-running.component.html":
/*!*******************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/meeting-running/meeting-running.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"actualMeeting == null\">Retrieving details for {{ id }}</p>\n<div *ngIf=\"actualMeeting != null\">\n  <h2>\n    Meeting {{ actualMeeting.Name }} by {{ actualMeeting.Creator().Name }}\n  </h2>\n  Participants:\n  <ul>\n    <li *ngFor=\"let p of actualMeeting.Participants\">\n      {{ p.Name }}\n    </li>\n  </ul>\n  Cards:\n  <ol>\n    <li *ngFor=\"let c of actualMeeting.Cards\">\n      {{ c.Name }}\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _meeting_running_meeting_running_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting-running/meeting-running.component */ "./src/app/meeting-running/meeting-running.component.ts");




const routes = [
    { path: 'meetings/:id', component: _meeting_running_meeting_running_component__WEBPACK_IMPORTED_MODULE_3__["MeetingRunningComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.service */ "./src/app/cards.service.ts");




let AppComponent = class AppComponent {
    constructor(formBuilder, cardsService) {
        this.formBuilder = formBuilder;
        this.cardsService = cardsService;
        this.title = 'Bingo Meetings';
        this.meetings = [];
        // why this gives an compilation error if we put new CreateMeeting ? references?
        const c = { userName: '', meetingName: '' };
        this.createMeetingForm = this.formBuilder.group(c);
    }
    ngOnInit() {
        this.refreshMeetings();
    }
    refreshMeetings() {
        this.cardsService.GetMeetings().subscribe(it => this.meetings = it);
    }
    onSubmit(data) {
        this.createMeetingForm.disable();
        this.cardsService.SaveMeeting(data).subscribe(it => {
            this.createMeetingForm.enable();
            this.createMeetingForm.reset();
            this.refreshMeetings();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _meeting_running_meeting_running_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meeting-running/meeting-running.component */ "./src/app/meeting-running/meeting-running.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _meeting_running_meeting_running_component__WEBPACK_IMPORTED_MODULE_7__["MeetingRunningComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cards.service.ts":
/*!**********************************!*\
  !*** ./src/app/cards.service.ts ***!
  \**********************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");



let CardsService = class CardsService {
    constructor(httpAPI) {
        this.httpAPI = httpAPI;
        this.urlApi = 'http://bingo-meeting-api.herokuapp.com/';
    }
    GetMeeting(id) {
        const url = this.urlApi + 'meetings/' + id;
        return this.httpAPI.get(url);
    }
    GetMeetings() {
        const url = this.urlApi + 'meetings';
        return this.httpAPI.get(url);
    }
    SaveMeeting(create) {
        const url = this.urlApi + 'meetings';
        return this.httpAPI.post(url, create);
    }
};
CardsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CardsService);



/***/ }),

/***/ "./src/app/meeting-running/meeting-running.component.css":
/*!***************************************************************!*\
  !*** ./src/app/meeting-running/meeting-running.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmctcnVubmluZy9tZWV0aW5nLXJ1bm5pbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/meeting-running/meeting-running.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/meeting-running/meeting-running.component.ts ***!
  \**************************************************************/
/*! exports provided: MeetingRunningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRunningComponent", function() { return MeetingRunningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var bingo_meeting_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bingo-meeting-objects */ "../node_modules/bingo-meeting-objects/dist/index.js");
/* harmony import */ var bingo_meeting_objects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bingo_meeting_objects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards.service.ts");





let MeetingRunningComponent = class MeetingRunningComponent {
    constructor(route, cardService) {
        this.route = route;
        this.cardService = cardService;
        this.actualMeeting = null;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.cardService.GetMeeting(this.id).subscribe(w => {
                this.actualMeeting = new bingo_meeting_objects__WEBPACK_IMPORTED_MODULE_3__["Meeting"](w);
                // window.alert(this.actualMeeting.Name);
                // window.alert(this.actualMeeting.Creator());
            });
        });
    }
};
MeetingRunningComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"] }
];
MeetingRunningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting-running',
        template: __webpack_require__(/*! raw-loader!./meeting-running.component.html */ "../node_modules/raw-loader/index.js!./src/app/meeting-running/meeting-running.component.html"),
        styles: [__webpack_require__(/*! ./meeting-running.component.css */ "./src/app/meeting-running/meeting-running.component.css")]
    })
], MeetingRunningComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ignatandrei\PresentationBingoCards\bingo-cards-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map