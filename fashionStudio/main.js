(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/product/product-list/product-list.component */ "./src/app/component/product/product-list/product-list.component.ts");
/* harmony import */ var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _component_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/product/product-detail/product-detail.component */ "./src/app/component/product/product-detail/product-detail.component.ts");
/* harmony import */ var _component_view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/view-cart/view-cart.component */ "./src/app/component/view-cart/view-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'product/cart', component: _component_view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_5__["ViewCartComponent"] },
    { path: 'product/:name', component: _component_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
    { path: 'product/:name/:id', component: _component_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] },
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: '**', component: _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fashionStudio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/product/product.component */ "./src/app/component/product/product.component.ts");
/* harmony import */ var _component_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/product/product-list/product-list.component */ "./src/app/component/product/product-list/product-list.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_navbar_navbar_detail_navbar_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/navbar/navbar-detail/navbar-detail.component */ "./src/app/component/navbar/navbar-detail/navbar-detail.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _component_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/component.component */ "./src/app/component/component.component.ts");
/* harmony import */ var _component_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/product/product-detail/product-detail.component */ "./src/app/component/product/product-detail/product-detail.component.ts");
/* harmony import */ var _component_view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/view-cart/view-cart.component */ "./src/app/component/view-cart/view-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _component_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _component_navbar_navbar_detail_navbar_detail_component__WEBPACK_IMPORTED_MODULE_10__["NavbarDetailComponent"],
                _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _component_component_component__WEBPACK_IMPORTED_MODULE_13__["ComponentComponent"],
                _component_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"],
                _component_view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_15__["ViewCartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/component.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/component.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/component.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/component.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  component works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/component.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/component.component.ts ***!
  \**************************************************/
/*! exports provided: ComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentComponent", function() { return ComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentComponent = /** @class */ (function () {
    function ComponentComponent() {
    }
    ComponentComponent.prototype.ngOnInit = function () {
    };
    ComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component',
            template: __webpack_require__(/*! ./component.component.html */ "./src/app/component/component.component.html"),
            styles: [__webpack_require__(/*! ./component.component.css */ "./src/app/component/component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentComponent);
    return ComponentComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar-detail/navbar-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/component/navbar/navbar-detail/navbar-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a, div ul li a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar-detail/navbar-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/navbar/navbar-detail/navbar-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n<a class=\"navbar-brand\" href=\"#\">\n    <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i>\n  FashionStudio</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n   data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item mr-4\" *ngFor=\"let category of categories\">\n        <a class=\"nav-link\" [routerLink]=\"['product',category]\">{{category}}</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['product','cart']\">\n              <i class=\"fa fa-shopping-cart fa-lg\" aria-hidden=\"true\"></i>\n            View Cart\n          </a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar-detail/navbar-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/navbar/navbar-detail/navbar-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavbarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDetailComponent", function() { return NavbarDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarDetailComponent = /** @class */ (function () {
    function NavbarDetailComponent() {
    }
    NavbarDetailComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.categories.length; i++) {
            this.categories[i] = src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"][i];
            console.log(this.categories[i]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarDetailComponent.prototype, "categories", void 0);
    NavbarDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-detail',
            template: __webpack_require__(/*! ./navbar-detail.component.html */ "./src/app/component/navbar/navbar-detail/navbar-detail.component.html"),
            styles: [__webpack_require__(/*! ./navbar-detail.component.css */ "./src/app/component/navbar/navbar-detail/navbar-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarDetailComponent);
    return NavbarDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-detail [categories]=\"categories\"></app-navbar-detail>\n\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(categoryService) {
        this.categoryService = categoryService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.categories = this.categoryService.getCategories();
        console.log(this.categories);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/not-found/not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/component/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/component/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/component/product/product-detail/product-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/component/product/product-detail/product-detail.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select[name=quantity] {\r\n  box-shadow: none;\r\n}\r\nbutton[type=submit]:hover{\r\n  box-shadow: none;\r\n  \r\n}\r\ninput[type=radio]{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/product/product-detail/product-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/product/product-detail/product-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center mt-5\">\n    <div class=\"col-md-5\">\n      <h2>Product Details</h2>\n      </div>\n  </div>\n  <div class=\"row mt-4\">\n    <div class=\"col-md-5\">\n      <img class=\"card-img-top\" height=\"90%\" src=\"assets/img/phones/phone1.jpg\">\n    </div>\n    <div class=\"col-md-7\">\n      <h3> {{selectedProduct.name}}</h3>\n      <h5>{{selectedProduct.description}}</h5>\n      <h5 class=\"text-primary\">{{selectedProduct.price | currency : 'USD'}}</h5>\n      <span><a (click)=\"writeReview()\">Write a Review</a></span>\n      <div *ngIf=\"isShippingFree; else notFreeShipping\">\n          <h5>Free Shipping</h5>\n      </div>\n      <div *ngIf=\"selectedProduct.keyFeatures\">\n        <ul>\n          <li *ngFor=\"let feature of selectedProduct.keyFeatures\">{{feature}}</li>\n        </ul>\n      </div>\n      <div #notFreeShipping>\n          <h5>Payment for shipping</h5>\n      </div>\n      <input type=\"radio\" class=\"radio-inline\" name=\"modeOfPayment\" [(ngModel)]=\"modeOfPayment\" value=\"pod\">Pay on Delivery\n      <input type=\"radio\" class=\"radio-inline\" name=\"modeOfPayment\" [(ngModel)]=\"modeOfPayment\" value=\"cash\">Visa/Verve/Mastercard Payment\n      <h5>Arrival Date</h5>\n      <div class=\"form-group\">\n        <div>\n          <label for=\"quantity\">Quantity:</label>\n        <select name=\"quantity\" class=\"col-md-4 form-control\" [(ngModel)]=\"selectedProduct.quantity\">\n         <option [value]=\"i\" *ngFor=\"let i of quantity\">{{i}}</option>\n        </select>\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-danger\">Add to Cart</button>\n      <button type=\"submit\" class=\"btn btn-success ml-3\">BUY NOW</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/product/product-detail/product-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/product/product-detail/product-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.isShippingFree = false;
        this.quantity = [];
        this.modeOfPayment = "cash";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['name'] !== null) {
                if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_2__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_2__["Category"].Phones]) {
                    var id = +params['id'];
                    _this.selectedProduct = _this.productService.getProductById(src_app_models_category__WEBPACK_IMPORTED_MODULE_2__["Category"].Phones, id);
                    for (var i = 1; i <= _this.selectedProduct.quantity; i++) {
                        _this.quantity.push(i);
                    }
                    var noOfDays = 10;
                    console.log("productList", _this.selectedProduct);
                }
            }
        });
    };
    ProductDetailComponent.prototype.writeReview = function () { };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/component/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/component/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/product/product-list/product-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/product/product-list/product-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 80% !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/product/product-list/product-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/product/product-list/product-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-3\">\n    <div *ngFor=\"let product of productList\" >\n      <app-product  [product]=\"product\"></app-product>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/product/product-list/product-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/product/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['name'] !== null) {
                if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Phones]) {
                    _this.productList = _this.productService.getProducts(src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Phones);
                    console.log("productList", _this.productList);
                }
                else if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Gowns]) {
                    _this.productList = _this.productService.getProducts(src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Gowns);
                }
                else if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Sneakers]) {
                    _this.productList = _this.productService.getProducts(src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Sneakers);
                }
                else if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Bags]) {
                    _this.productList = _this.productService.getProducts(src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Bags);
                }
                else if (params['name'] === src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"][src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Shirts]) {
                    _this.productList = _this.productService.getProducts(src_app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"].Shirts);
                }
            }
        });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/component/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/component/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/component/product/product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/product/product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  box-shadow: none !important;\r\n}\r\ndiv img {\r\n  cursor: pointer;\r\n}\r\ndiv a,div a:hover {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/product/product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/product/product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 mb-3\">\n  <div class=\"card\" style=\"width: 19rem;\">\n    <div class=\"thumb-nail mt-3\">\n      <img class=\"card-img-top\" height=\"70%\" src=\"assets/img/{{product.imgUrl}}\">\n    </div>\n    <div class=\"card-body\">\n      <div class=\"card-text text-center\">\n        <h3>{{product.name}}</h3>\n        <p>{{product.description}}</p>\n        <h5>{{product.price | currency : 'USD'}}</h5>\n        <h5>Available Qty: {{product.quantity}}</h5>\n        <a  class=\"btn btn-primary btn-sm \" [routerLink]=\"['/product',productCategory,product.id]\">\n          View Details\n        </a>\n        <a  class=\"btn btn-danger btn-sm ml-3\" (click)=\" showDialog()\">\n          Add to Cart\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog [header]=\"product.name\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"370\" [minWidth]=\"200\" [minY]=\"90\"\n        [maximizable]=\"true\" [baseZIndex]=\"10000\">\n        <div>\n          <h6>Select the quantity of {{product.name}}</h6>\n          <span><select name=\"userQty\" [(ngModel)]=\"userQty\" >\n            <option *ngFor=\"let qty of productQty\" [value]=\"qty\" >{{qty}}</option>\n          </select>\n        </span>\n        </div>\n        <p-footer>\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"addToCart()\" label=\"Proceed\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n        </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/component/product/product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.display = false;
        this.productQty = [];
        this.counter = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.productCategory = src_app_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"][this.product.category];
        for (var i = 0; i <= this.product.quantity; i++) {
            this.productQty[i] = i;
        }
        this.userQty = this.product.quantity;
    };
    ProductComponent.prototype.addToCart = function () {
        var product = this.product;
        product.quantity = this.userQty;
        this.productService.addToCart(product);
        this.router.navigateByUrl('/product/cart');
    };
    ProductComponent.prototype.showDialog = function () {
        this.display = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/component/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/component/view-cart/view-cart.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/view-cart/view-cart.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 80%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/view-cart/view-cart.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/view-cart/view-cart.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n      <div *ngIf=\"totalPrice\" style=\"margin-left:83%; margin-top:3%;\"  >\n          <i class=\"fa fa-shopping-cart fa-lg\" aria-hidden=\"true\"></i>\n          <h5>Total Price: {{totalPrice | currency : 'USD'}}</h5>\n          <a href=\"#\" class=\"btn btn-primary\">Checkout</a>\n      </div>\n  </div>\n  <div class=\"row\" style=\"margin-top:-10%\" >\n      <div class=\"card col-md-3 mr-4 mt-3\" *ngFor=\"let product of cartItems\">\n          <div class=\"card-header\">\n            {{product.name}}\n          </div>\n          <div class=\"card-body\">\n            <div>\n                <img  height=\"250\" width=\"200\" src=\"assets/img/{{product.imgUrl}}\">\n            </div>\n            <h5 class=\"mt-3\">Description: {{product.description}}</h5>\n            <h5>Price: {{product.price | currency : 'USD'}} * {{product.quantity}}</h5>\n          </div>\n      </div>\n  </div>\n\n<div *ngIf=\"cartItems.length === 0\" style=\"margin-top:17%;\" >\n  <h4 class=\"text-center text-primary mt-4\">Oops!!! No Item in Cart to display</h4>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/view-cart/view-cart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/view-cart/view-cart.component.ts ***!
  \************************************************************/
/*! exports provided: ViewCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartComponent", function() { return ViewCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewCartComponent = /** @class */ (function () {
    function ViewCartComponent(productService) {
        this.productService = productService;
    }
    ViewCartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.productService.getCartItems();
        this.totalPrice = this.cartItems.reduce(function (accumulator, item) { return accumulator + (item.price * item.quantity); }, 0);
    };
    ViewCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-cart',
            template: __webpack_require__(/*! ./view-cart.component.html */ "./src/app/component/view-cart/view-cart.component.html"),
            styles: [__webpack_require__(/*! ./view-cart.component.css */ "./src/app/component/view-cart/view-cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ViewCartComponent);
    return ViewCartComponent;
}());



/***/ }),

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category;
(function (Category) {
    Category[Category["Gowns"] = 0] = "Gowns";
    Category[Category["Laptops"] = 1] = "Laptops";
    Category[Category["Shirts"] = 2] = "Shirts";
    Category[Category["Phones"] = 3] = "Phones";
    Category[Category["Sneakers"] = 4] = "Sneakers";
    Category[Category["Bags"] = 5] = "Bags";
})(Category || (Category = {}));


/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/category */ "./src/app/models/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.cartItems = [];
        this.categories = [
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Laptops,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Shirts,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Shirts,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers,
            _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Bags,
        ];
        this.phones = [
            { id: 1, name: 'IPhone X', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], quantity: 7, description: '64GB Android 7.0', price: 72277, imgUrl: 'phones/phone1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones, dateSold: null },
            { id: 2, name: 'Infinix Hot6', quantity: 5, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77337, imgUrl: 'phones/phone1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones, dateSold: null },
            { id: 3, name: 'Infinix Hot5', quantity: 3, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77117, imgUrl: 'phones/phone1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones, dateSold: null },
            { id: 4, name: 'IPhone 5s', quantity: 8, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 775437, imgUrl: 'phones/phone1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones, dateSold: null },
            { id: 5, name: 'IPhone 7s', quantity: 3, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77700, imgUrl: 'phones/phone1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones, dateSold: null },
        ];
        this.gowns = [
            { id: 1, name: 'Wedding Gown', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], quantity: 9, description: '64GB Android 7.0', price: 72277, imgUrl: 'gowns/wedding_dress1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns, dateSold: null },
            { id: 2, name: 'Casual Gowns', quantity: 10, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77337, imgUrl: 'gowns/wedding_dress1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns, dateSold: null },
            { id: 3, name: 'Dinner Gown', quantity: 11, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77117, imgUrl: 'gowns/wedding_dress1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns, dateSold: null },
            { id: 3, name: 'Redd Carpet Gown', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 775437, imgUrl: 'gowns/wedding_dress1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns, dateSold: null },
            { id: 4, name: 'Gown Tag', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77700, imgUrl: 'gowns/wedding_dress1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns, dateSold: null },
        ];
        this.sneakers = [
            { id: 1, name: 'Puma', quantity: 10, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 72277, imgUrl: 'sneakers/Sneakers7.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 2, name: 'Tom Hilfiger', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77337, imgUrl: 'sneakers/Sneakers7.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 3, name: 'ECCO', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77117, imgUrl: 'sneakers/Sneakers7.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 4, name: 'Mok Luks', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 775437, imgUrl: 'sneakers/Sneakers7.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 5, name: 'Larks', quantity: 7, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], description: '64GB Android 7.0', price: 77700, imgUrl: 'sneakers/Sneakers7.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
        ];
        this.bags = [
            { id: 1, name: 'Mini Bag', quantity: 7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], price: 72277, imgUrl: 'bags/bag1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 2, name: 'Bucket Bag', quantity: 7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], price: 77337, imgUrl: 'bags/bag1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 3, name: 'Clutches', quantity: 7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], price: 77117, imgUrl: 'bags/bag1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 4, name: 'Back Packs', quantity: 7, description: '64GB Android 7.0', keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], price: 775437, imgUrl: 'bags/bag1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
            { id: 5, name: 'Larks', quantity: 7, description: '64GB Android 7.0', price: 77700, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'], imgUrl: 'bags/bag1.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null },
        ];
        this.shirts = [
            { id: 1, name: 'Mini Shirt', quantity: 7, description: '64GB Android 7.0', price: 72277, imgUrl: 'shirts/FShirt2.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
            { id: 2, name: 'Bucket Bag', quantity: 7, description: '64GB Android 7.0', price: 77337, imgUrl: 'shirts/FShirt2.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
            { id: 3, name: 'Sweat Shirt', quantity: 7, description: '64GB Android 7.0', price: 77117, imgUrl: 'shirts/FShirt2.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
            { id: 4, name: 'Winter Shirt', quantity: 7, description: '64GB Android 7.0', price: 775437, imgUrl: 'shirts/FShirt2.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
            { id: 5, name: 'Summer Shirt', quantity: 7, description: '64GB Android 7.0', price: 77700, imgUrl: 'shirts/FShirt2.jpg', category: _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers, dateSold: null, keyFeatures: ['Display: 6-Inch HD', 'CPU: 1.3 GHz Quad Core', 'Memory: 16GB ROM + 1GB RAM (Expandable via microSD)'] },
        ];
    }
    ProductService.prototype.getCategories = function () {
        return this.categories;
    };
    ProductService.prototype.getProducts = function (category) {
        if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones) {
            return this.phones;
        }
        else if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Gowns) {
            return this.gowns;
        }
        else if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Sneakers) {
            return this.sneakers;
        }
        else if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Bags) {
            return this.bags;
        }
        else if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Shirts) {
            return this.shirts;
        }
    };
    ProductService.prototype.getProductById = function (category, id) {
        if (category === _models_category__WEBPACK_IMPORTED_MODULE_1__["Category"].Phones) {
            var phone = this.phones.find(function (phone) { return phone.id === id; });
            return phone;
        }
    };
    ProductService.prototype.addToCart = function (item) {
        if (item) {
            this.cartItems.push(item);
        }
    };
    ProductService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ogunboyejo\Documents\Fashion\fashionStudio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map