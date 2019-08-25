(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-header></app-header>\n</header>\n<app-main-layout></app-main-layout>\n\n<!-- <router-outlet>\n  <app-test [course]=\"course\"></app-test>\n</router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"container-fluid py-2\">\n  <app-search></app-search>\n  <br />\n  <div class=\"date-title\">\n    <i (click)=\"yesterday()\" class=\"fas fa-chevron-left\"></i>\n    <h1>\n      <p class=\"noselect\">\n        {{\n          date$ === undefined || date$ === shadow_date\n            ? 'Today'\n            : (date$ | date: 'dd MMM')\n        }}\n      </p>\n    </h1>\n    <i (click)=\"tomorrow()\" class=\"fas fa-chevron-right\"></i>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list/list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"mt-2\">\n  <li id=\"food-item\" *ngFor=\"let food of intake_list$ | async\">\n    <!--  -->\n    <div id=\"f-item-col1\" class=\"\">\n      <img src=\"{{ food.thumb }}\" style=\"height: 100%; width: 100%;\" />\n    </div>\n    <!--  -->\n    <div id=\"f-item-col2\">\n      <!--  -->\n      <div class=\"f-item fw500\">\n        <p>{{ food.food_name | titlecase }}</p>\n        <p>{{ food.nf_calories | number: '1.0-0' }} cal</p>\n      </div>\n      <div class=\"f-item\">\n        <p class=\"fs80\">\n          {{ food.serving_qty }} {{ food.serving_unit }} ({{\n            food.serving_weight_grams | number: '1.0-0'\n          }}\n          g)\n        </p>\n        <p class=\"fs80\">{{ food.meal_type | titlecase }}</p>\n      </div>\n      <!--  -->\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/macros/macros.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/macros/macros.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-1 px-4\">\n  <div id=\"macros-total\" class=\"row\">\n    <span>\n      <p class=\"fw350\">{{ (consumed_cal | async) || 0 }} cal</p>\n      <p style=\"color: #6A6A6A\">\n        consumed\n      </p>\n    </span>\n    <span>\n      <p class=\"fw350\">{{ daily_goal | async }} cal</p>\n      <p style=\"text-align: right; color: #6A6A6A\">\n        daily goal\n      </p>\n    </span>\n  </div>\n  <!--  -->\n  <div class=\"row mt-2\">\n    <div id=\"prog-bar\" class=\"progress\">\n      <div\n        class=\"progress-bar\"\n        role=\"progressbar\"\n        style=\"width: 86%\"\n        aria-valuenow=\"86\"\n        aria-valuemin=\"0\"\n        aria-valuemax=\"100\"\n      ></div>\n    </div>\n    <p\n      class=\"mt-2\"\n      style=\"margin-left: 86%; color: gray; font-weight: bold; text-indent: -40%\"\n    >\n      <!-- {{ 0 || daily_goal | percent | async }} -->\n      {{ percentage | async | percent }}\n    </p>\n  </div>\n  <!--  -->\n  <div id=\"meal-cal\" class=\"row mt-3\">\n    <span>\n      <p>{{ (breakfast_cal | async) || 0 }}</p>\n      <p>Breakfast</p>\n    </span>\n    <span>\n      <p>{{ (lunch_cal | async) || 0 }}</p>\n      <p>Lunch</p>\n    </span>\n    <span>\n      <p>{{ (dinner_cal | async) || 0 }}</p>\n      <p>Dinner</p>\n    </span>\n    <span>\n      <p>{{ (snack_cal | async) || 0 }}</p>\n      <p>Snack</p>\n    </span>\n  </div>\n\n  <!--  -->\n  <div\n    id=\"height\"\n    style=\"height: 100px; width: 100px; background-color:violet;\"\n  >\n    Animate me\n  </div>\n  <!--  -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-layout/main-layout.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-layout/main-layout.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-4\" style=\"background-color: #F5F5F5; height: 100vh;\">\n      <app-profile></app-profile>\n    </div>\n    <div class=\"col-8 px-0\">\n      <app-list></app-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile-stats\" class=\"row mt-3\">\n  <span>\n    <p class=\"fw350\">{{ weight | async }}</p>\n    <p class=\"font-weight-lighter fs50\">kg</p>\n  </span>\n  <img\n    class=\"circle\"\n    src=\"https://randomuser.me/api/portraits/women/32.jpg\"\n    alt=\"avatar\"\n  />\n  <span>\n    <p class=\"fw350\">{{ height | async }}</p>\n    <p class=\"font-weight-lighter fs50\">cm</p>\n  </span>\n</div>\n<div id=\"profile-name\" class=\"row mt-2 mb-5\">\n  <h2>{{ first_name | async }} {{ last_name | async }}</h2>\n</div>\n<hr />\n<app-macros></app-macros>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\" class=\"input-group\">\n  <div class=\"input-group-prepend\">\n    <!-- Search Icon -->\n    <div class=\"input-group-text\">\n      <i class=\"fas fa-search\"></i>\n    </div>\n  </div>\n  <!-- Search Input -->\n  <input\n    #searchBox\n    (input)=\"searchFood(searchBox.value)\"\n    id=\"search-box\"\n    class=\"form-control\"\n    placeholder=\"Search foods...\"\n    autocomplete=\"off\"\n  />\n</div>\n\n<!-- Search List -->\n<div class=\"mt-2\">\n  <!-- Common Foods -->\n  <ul\n    *ngFor=\"let food of foods$ | async\"\n    id=\"ul-search-list\"\n    class=\"my-0 pt-1 rounded-top\"\n  >\n    <p>COMMON</p>\n    <li\n      id=\"f-search-item\"\n      *ngFor=\"let f of food.common.splice(0, 5)\"\n      style=\"background-color: white;\"\n    >\n      <div id=\"f-search-col1\">\n        <img src=\"{{ f.photo.thumb }}\" style=\"height: 100%; width: 100%;\" />\n      </div>\n      <div class=\"f-search-col2\" id=\"\">\n        <p>{{ f.food_name | titlecase }}</p>\n      </div>\n    </li>\n  </ul>\n\n  <!-- Branded Foods -->\n  <ul\n    *ngFor=\"let food of foods$ | async\"\n    id=\"ul-search-list\"\n    class=\"my-0 py-1 border-top rounded-bottom\"\n  >\n    <p>BRANDED</p>\n    <li\n      id=\"f-search-item\"\n      *ngFor=\"let f of food.branded.splice(0, 5)\"\n      style=\"background-color: white;\"\n    >\n      <div id=\"f-search-col1\">\n        <img src=\"{{ f.photo.thumb }}\" style=\"height: 100%; width: 100%;\" />\n      </div>\n      <div class=\"f-search-col2 pt-1\" id=\"\">\n        <p>{{ f.food_name | titlecase }}</p>\n        <p class=\"subtitle-lighten\">{{ f.brand_name | titlecase }}</p>\n      </div>\n    </li>\n  </ul>\n</div>\n<!-- <li\n  id=\"f-search-item\"\n  class=\"\"\n  *ngFor=\"let f of food.splice(0, 5)\"\n  style=\"background-color: white;\"\n>\n  <div id=\"f-search-col1\" class=\"\">\n    <img src=\"{{ f.photo.thumb }}\" style=\"height: 100%; width: 100%;\" />\n  </div>\n  <div id=\"f-search-col2\" class=\"\">\n    <p>{{ f.food_name | titlecase }}</p>\n  </div>\n  <!-- <a routerLink=\"#\">food.food_name</a>\n</li> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"course-title\">\n  {{ course.cardIndex || '' + ' ' + course.description }}\n</div>\n\n<div class=\"course-description\">\n  Edit Title: <input #courseTitle [value]='description'\n  (keyup)='onTitleChanged(courseTitle.value)'\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-layout/main-layout.component */ "./src/app/components/main-layout/main-layout.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_macros_macros_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/macros/macros.component */ "./src/app/components/macros/macros.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");



//







var routes = [
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponent = [
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
    _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
    _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
    _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
    _components_macros_macros_component__WEBPACK_IMPORTED_MODULE_8__["MacrosComponent"],
    _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"]
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mock-data.service */ "./src/app/services/mock-data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_mockDataService) {
        this._mockDataService = _mockDataService;
        this.course = [
            {
                cardIndex: 1,
                description: 'Angular'
            },
            {
                cardIndex: 2,
                description: 'React'
            }
        ];
        // this._mockDataService.intake_list$.subscribe();
    }
    AppComponent.ctorParameters = function () { return [
        { type: _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mock-data.service */ "./src/app/services/mock-data.service.ts");
/* harmony import */ var _services_search_food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/search-food.service */ "./src/app/services/search-food.service.ts");






//

// Services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_7__["MockDataService"], _services_search_food_service__WEBPACK_IMPORTED_MODULE_8__["SearchFoodService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #6200ee;\n  padding: 0 33%;\n}\n\nheader > .date-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n}\n\n.fas {\n  cursor: pointer;\n}\n\n.noselect {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCLEVBQUUsZUFBZTtFQUM1Qyx5QkFBeUIsRUFBRSxXQUFXLEVBQ1osbUJBQW1CO0VBQzdDLHNCQUFzQixFQUFFLFlBQVk7RUFDcEMscUJBQXFCLEVBQUUsMkJBQTJCO0VBQ2xELGlCQUFpQixFQUFFO2lFQUM0QztBQUNqRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzYyMDBlZTtcbiAgcGFkZGluZzogMCAzMyU7XG59XG5cbmhlYWRlciA+IC5kYXRlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZhcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mock-data.service */ "./src/app/services/mock-data.service.ts");
/* harmony import */ var _services_mockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mockData */ "./src/app/services/mockData.js");




var HeaderComponent = /** @class */ (function () {
    // todayDate = this.mockDataService.dateObj$.setDate(
    //   this.mockDataService.dateObj$.getDate()
    // );
    // dateData$ = this.mockDataService.data$;
    function HeaderComponent(mockDataService) {
        this.mockDataService = mockDataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.shadow_date = this.mockDataService.dateObj$;
        this.date$ = this.mockDataService.dateObj$;
        // todayDate is synced with dateObj$, and used to conditionally render 'Today', if data === todayDate
        // console.log(this.todayDate, this.date); // 1562611504569 undefined
    };
    HeaderComponent.prototype.yesterday = function () {
        (this.date$ = this.mockDataService.yesDate()),
            // this.date = this.mockDataService.yesterday$();
            this.mockDataService.intake_list$.next(_services_mockData__WEBPACK_IMPORTED_MODULE_3__["diet"].data_points[(this.mockDataService.ind += 1)].intake_list);
    };
    HeaderComponent.prototype.tomorrow = function () {
        (this.date$ = this.mockDataService.tmrDate()),
            this.mockDataService.intake_list$.next(_services_mockData__WEBPACK_IMPORTED_MODULE_3__["diet"].data_points[(this.mockDataService.ind -= 1)].intake_list);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Food List items */\n\n#food-item {\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: minmax(auto, 100px) minmax(300px, 1fr);\n  grid-template-rows: minmax(auto, auto);\n}\n\n#f-item-col1 {\n  height: 100px;\n  width: 100px;\n  padding: 10px;\n  margin: 0 10px;\n}\n\n#f-item-col2 {\n  display: grid;\n  padding: 15px 50px 10px 0;\n  border-bottom: 1px solid grey;\n}\n\n#f-item-col1 > img {\n  border-radius: 8px;\n  /* background-position: center; Center the image */\n  background-size: contain;\n}\n\n.f-item {\n  padding: 0;\n  font-size: 1.5em;\n  line-height: 1;\n  display: flex;\n  justify-content: space-between;\n}\n\n.f-item > p {\n  margin: 0 0 0 0;\n  padding: 10px 0 0 0;\n}\n\n.f-item:last-child > p {\n  padding: 0;\n  color: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0Qsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vZCBMaXN0IGl0ZW1zICovXG5cbiNmb29kLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxMDBweCkgbWlubWF4KDMwMHB4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChhdXRvLCBhdXRvKTtcbn1cblxuI2YtaXRlbS1jb2wxIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuI2YtaXRlbS1jb2wyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTVweCA1MHB4IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59XG5cbiNmLWl0ZW0tY29sMSA+IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmYtaXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZi1pdGVtID4gcCB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgcGFkZGluZzogMTBweCAwIDAgMDtcbn1cblxuLmYtaXRlbTpsYXN0LWNoaWxkID4gcCB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBncmV5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mock-data.service */ "./src/app/services/mock-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ListComponent = /** @class */ (function () {
    function ListComponent(mockDataService) {
        this.mockDataService = mockDataService;
        this.intake_list$ = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return console.log(a); }));
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/macros/macros.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/macros/macros.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#macros-total {\n  justify-content: space-between;\n}\n\nspan {\n  font-size: 2em;\n  line-height: 0.7;\n}\n\nspan > p:last-child {\n  font-weight: 100;\n  font-size: 60%;\n  color: gray;\n}\n\n#prog-bar {\n  width: 100%;\n  background-color: #dac2fb;\n  border-radius: 0;\n  height: 0.5em;\n}\n\n#prog-bar > .progress-bar {\n  background-color: #6200ee;\n}\n\n#meal-cal {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-content: space-around;\n  justify-items: center;\n}\n\n#meal-cal > span {\n  text-align: center;\n}\n\n#meal-cal > span > p:first-child {\n  font-size: 80%;\n  font-weight: 550;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNyb3MvbWFjcm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWNyb3MvbWFjcm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFjcm9zLXRvdGFsIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjc7XG59XG5cbnNwYW4gPiBwOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDYwJTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbiNwcm9nLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFjMmZiO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDAuNWVtO1xufVxuXG4jcHJvZy1iYXIgPiAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyMDBlZTtcbn1cblxuI21lYWwtY2FsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI21lYWwtY2FsID4gc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21lYWwtY2FsID4gc3BhbiA+IHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/macros/macros.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/macros/macros.component.ts ***!
  \*******************************************************/
/*! exports provided: MacrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacrosComponent", function() { return MacrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mock-data.service */ "./src/app/services/mock-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MacrosComponent = /** @class */ (function () {
    function MacrosComponent(mockDataService) {
        this.mockDataService = mockDataService;
        this.daily_goal = this.mockDataService.daily_goal$;
        this.consumed_cal = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('nf_calories'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cal) { return acc + cal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cal) { return Math.round(cal); }));
        }));
        this.breakfast_cal = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.meal_type === 'breakfast'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('nf_calories'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cal) { return acc + cal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cal) { return Math.round(cal); }));
        }));
        this.lunch_cal = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.meal_type === 'lunch'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('nf_calories'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cal) { return acc + cal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cal) { return Math.round(cal); }));
        }));
        this.dinner_cal = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.meal_type === 'dinner'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('nf_calories'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cal) { return acc + cal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cal) { return Math.round(cal); }));
        }));
        this.snack_cal = this.mockDataService.intake_list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (arr) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.meal_type === 'snack'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('nf_calories'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, cal) { return acc + cal; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cal) { return Math.round(cal); }));
        }));
        this.percentage = Number(this.consumed_cal) / this.daily_goal;
        // Progress Bar
        // Unused alternate solution using ES6
        // consumed_cal2$ = this.mockDataService.consumed_cal2$.pipe(
        //   map(arr => arr.reduce((t, c) => Math.round(t + c)))
        //   map(a => Math.round(a))
        // );
        this.div = document.querySelector('.height');
    }
    MacrosComponent.prototype.ngOnInit = function () { };
    MacrosComponent.prototype.ngAfterViewInit = function () {
        // console.log(typeof this.percentage);
        // console.log(this.percentage);
        // console.log(this.consumed_cal);
        // console.log(typeof this.daily_goal);
        // animationFrameScheduler.schedule(
        //   height => {
        //     this.div.style.height = height + 'px';
        //     this.schedule(height + 1);
        //   },
        //   0,
        //   0
        // );
    };
    MacrosComponent.ctorParameters = function () { return [
        { type: _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"] }
    ]; };
    MacrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macros',
            template: __webpack_require__(/*! raw-loader!./macros.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/macros/macros.component.html"),
            styles: [__webpack_require__(/*! ./macros.component.css */ "./src/app/components/macros/macros.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], MacrosComponent);
    return MacrosComponent;
}());



/***/ }),

/***/ "./src/app/components/main-layout/main-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-layout/main-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () { };
    MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! raw-loader!.//main-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-layout/main-layout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-stats {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n#profile-stats > span {\n  text-align: center;\n  background-color: #7a7a7a;\n  border-radius: 50%;\n  font-size: 2em;\n  color: #ffffff;\n  height: 5rem;\n  width: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#profile-stats > span > p {\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n}\n\n#profile-stats > img {\n  height: 8.5rem;\n  width: 8.5rem;\n}\n\n#profile-name {\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvZmlsZS1zdGF0cyA+IHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTdhN2E7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3Byb2ZpbGUtc3RhdHMgPiBzcGFuID4gcCB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbn1cblxuI3Byb2ZpbGUtc3RhdHMgPiBpbWcge1xuICBoZWlnaHQ6IDguNXJlbTtcbiAgd2lkdGg6IDguNXJlbTtcbn1cblxuI3Byb2ZpbGUtbmFtZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mock-data.service */ "./src/app/services/mock-data.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(mockDataService) {
        this.mockDataService = mockDataService;
        // weight: number = diet.weight_kg;
        // height: number = diet.height_cm;
        // firstName: string = diet.first_name;
        // lastName: string = diet.last_name;
        this.first_name = this.mockDataService.first_name$;
        this.last_name = this.mockDataService.last_name$;
        this.height = this.mockDataService.height$;
        this.weight = this.mockDataService.weight$;
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__["MockDataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Search Input */\n#search-box:focus {\n  font-weight: 600;\n}\n#search-box:focus {\n  box-shadow: none;\n}\n/* Search Icon */\n.input-group-text {\n  background-color: #ffffff;\n  border: none;\n}\n.form-control {\n  border: none;\n}\n/* Search List */\n/* ul */\n#ul-search-list {\n  background-color: #ffffff;\n}\n/* ul p */\n#ul-search-list > p {\n  margin: 0;\n  background-color: #ffffff;\n  margin: 0.8em 0 0 1em;\n  color: gray;\n  font-size: 0.8em;\n  font-weight: 500;\n}\n#ul-search-list > li:last-child > div:last-child {\n  border-bottom: none;\n}\n/* li */\n#f-search-item {\n  display: grid;\n  grid-template-columns: minmax(auto, 100px) minmax(300px, 1fr);\n  grid-template-rows: minmax(auto, auto);\n}\n/* li col1 */\n#f-search-col1 {\n  height: 70px;\n  width: 70px;\n  padding: 10px;\n  margin: 5px;\n}\n/* li col1 img */\n#f-search-col1 > img {\n  border-radius: 8px;\n  /* background-position: center; Center the image */\n  background-size: cover;\n}\n/* li col2 */\n.f-search-col2 {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n}\n/* li col2 p */\n.f-search-col2 > p {\n  margin: 0;\n  font-weight: 600;\n}\n#ul-search-list:last-child > li > div:last-child {\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n}\n.subtitle-lighten {\n  font-weight: 400;\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLE9BQU87QUFDUDtFQUNFLGFBQWE7RUFDYiw2REFBNkQ7RUFDN0Qsc0NBQXNDO0FBQ3hDO0FBQ0EsWUFBWTtBQUNaO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCxzQkFBc0I7QUFDeEI7QUFDQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDtBQUNBLGNBQWM7QUFDZDtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWFyY2ggSW5wdXQgKi9cbiNzZWFyY2gtYm94OmZvY3VzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNzZWFyY2gtYm94OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogU2VhcmNoIEljb24gKi9cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogU2VhcmNoIExpc3QgKi9cbi8qIHVsICovXG4jdWwtc2VhcmNoLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLyogdWwgcCAqL1xuI3VsLXNlYXJjaC1saXN0ID4gcCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwLjhlbSAwIDAgMWVtO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI3VsLXNlYXJjaC1saXN0ID4gbGk6bGFzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyogbGkgKi9cbiNmLXNlYXJjaC1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMTAwcHgpIG1pbm1heCgzMDBweCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoYXV0bywgYXV0byk7XG59XG4vKiBsaSBjb2wxICovXG4jZi1zZWFyY2gtY29sMSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLyogbGkgY29sMSBpbWcgKi9cbiNmLXNlYXJjaC1jb2wxID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi8qIGxpIGNvbDIgKi9cbi5mLXNlYXJjaC1jb2wyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcbn1cbi8qIGxpIGNvbDIgcCAqL1xuLmYtc2VhcmNoLWNvbDIgPiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jdWwtc2VhcmNoLWxpc3Q6bGFzdC1jaGlsZCA+IGxpID4gZGl2Omxhc3QtY2hpbGQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zdWJ0aXRsZS1saWdodGVuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGdyYXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_search_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search-food.service */ "./src/app/services/search-food.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchFoodService) {
        var _this = this;
        this.searchFoodService = searchFoodService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.foods$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.searchFoodService.searchFood(term); }));
    }
    SearchComponent.prototype.searchFood = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.ctorParameters = function () { return [
        { type: src_app_services_search_food_service__WEBPACK_IMPORTED_MODULE_3__["SearchFoodService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_food_service__WEBPACK_IMPORTED_MODULE_3__["SearchFoodService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/mock-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mock-data.service.ts ***!
  \***********************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mockData */ "./src/app/services/mockData.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MockDataService = /** @class */ (function () {
    function MockDataService() {
        this.ind = 0;
        this.DataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_mockData__WEBPACK_IMPORTED_MODULE_3__["diet"]);
        // Profile component
        this.first_name$ = this.DataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('first_name'));
        this.last_name$ = this.DataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('last_name'));
        this.height$ = this.DataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('height_cm'));
        this.weight$ = this.DataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('weight_kg'));
        // Macros and List component
        this.daily_goal$ = this.DataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('daily_goal'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (a) { return console.log(typeof a); }));
        // Using rxjs operators
        this.intake_list$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_mockData__WEBPACK_IMPORTED_MODULE_3__["diet"].data_points[0].intake_list);
        // alternate; using ES6
        // intake_list2$ = new BehaviorSubject<number>(
        //   diet.data_points[1].intake_list.reduce((a, cal) => a + cal.nf_calories, 0)
        // );
        this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date());
        this.dateObj$ = new Date();
    }
    // Date controls
    MockDataService.prototype.yesDate = function () {
        return this.dateObj$.setDate(this.dateObj$.getDate() - 1);
    };
    MockDataService.prototype.tmrDate = function () {
        return this.dateObj$.setDate(this.dateObj$.getDate() + 1);
    };
    MockDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockDataService);
    return MockDataService;
}());



/***/ }),

/***/ "./src/app/services/mockData.js":
/*!**************************************!*\
  !*** ./src/app/services/mockData.js ***!
  \**************************************/
/*! exports provided: diet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diet", function() { return diet; });
const diet = {
  first_name: 'Jane',
  last_name: 'Appleseed',
  weight_kg: 57,
  height_cm: 163,
  daily_goal: 1500,
  data_points: [
    {
      //today's date
      date: '',
      //empty, let user do the input
      intake_list: []
    },
    {
      //yesterday's date
      date: '',
      intake_list: [
        {
          //branded food has nix_item_id, common food doesn't
          nix_item_id: '55c9298af0432259369100c4',
          food_name: 'Italian sausage',
          serving_unit: 'link',
          //weight of "serving_qty"
          serving_weight_grams: 75,
          //per unit of "nf_calories", see how Nutritionix website demo works
          serving_qty: 1,
          //that is per "serving_qty", see how Nutritionix website demo works
          nf_calories: 258,
          //that is how much user ate
          serving_size: 2,
          meal_type: 'breakfast',
          thumb:
            'https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg'
        },
        {
          food_name: 'salmon salad',
          serving_unit: 'cup',
          serving_weight_grams: 407.01,
          serving_qty: 1,
          nf_calories: 389.27,
          serving_size: 1.5,
          meal_type: 'lunch',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg'
        },
        {
          food_name: 'boneless skinless chicken breasts',
          serving_qty: 1,
          serving_unit: 'breast',
          serving_weight_grams: 120,
          nf_calories: 198,
          serving_size: 2,
          meal_type: 'dinner',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg'
        },
        {
          food_name: 'slice cheese',
          serving_qty: 1,
          serving_unit: 'slice',
          serving_weight_grams: 28,
          nf_calories: 113.12,
          serving_size: 2,
          meal_type: 'snack',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg'
        },
        {
          food_name: 'orange',
          serving_qty: 1,
          serving_unit: 'fruit (2-7/8" dia)',
          serving_weight_grams: 140,
          nf_calories: 68.6,
          serving_size: 2,
          meal_type: 'snack',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg'
        }
      ]
    },
    {
      //2 days ago
      date: '',
      intake_list: [
        {
          food_name: 'fried eggs',
          serving_qty: 1,
          serving_unit: 'large',
          serving_weight_grams: 46,
          nf_calories: 90.16,
          serving_size: 2,
          meal_type: 'breakfast',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg'
        },
        {
          food_name: 'chicken salad',
          serving_qty: 0.5,
          serving_unit: 'cup',
          serving_weight_grams: 112.1,
          nf_calories: 253.99,
          serving_size: 1,
          meal_type: 'lunch',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg'
        },
        {
          nix_item_id: '598c0695306b814040ff908b',
          food_name: 'Boneless Skinless Chicken Breasts',
          serving_unit: 'oz',
          serving_qty: 4,
          nf_calories: 110,
          serving_size: 1,
          meal_type: 'dinner',
          thumb:
            'https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg'
        },
        {
          food_name: 'slice cheese',
          serving_qty: 1,
          serving_unit: 'slice',
          serving_weight_grams: 28,
          nf_calories: 113.12,
          serving_size: 2,
          meal_type: 'snack',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg'
        },
        {
          food_name: 'orange',
          serving_qty: 1,
          serving_unit: 'fruit (2-7/8" dia)',
          serving_weight_grams: 140,
          nf_calories: 68.6,
          serving_size: 2,
          meal_type: 'snack',
          thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg'
        }
      ]
    }
  ]
};


/***/ }),

/***/ "./src/app/services/search-food.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/search-food.service.ts ***!
  \*************************************************/
/*! exports provided: SearchFoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFoodService", function() { return SearchFoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/*API* https://developer.nutritionix.com/docs/v2 */


//


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'x-app-id': '0c3c503f',
        'x-app-key': '9b1389ae13c30ed013b27fe139bf0ad1',
        'Content-Type': 'application/json'
    })
};
var BASE_URL = 'https://trackapi.nutritionix.com/v2/';
var SEARCH_INSTANT = 'search/instant';
var SearchFoodService = /** @class */ (function () {
    function SearchFoodService(http) {
        this.http = http;
    }
    SearchFoodService.prototype.searchFood = function (term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http
            .get(BASE_URL + SEARCH_INSTANT + "?query=" + encodeURIComponent(term) + "&common=true&branded=true", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (a) { return console.log(a); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (a) { return [a]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (a) { return console.log(a); }));
    };
    SearchFoodService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SearchFoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchFoodService);
    return SearchFoodService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent.prototype.onTitleChanged = function (newTitle) {
        this.course.description = newTitle;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestComponent.prototype, "course", void 0);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Doug/Projects/Traversy_Media/purple-calorie-tracker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map