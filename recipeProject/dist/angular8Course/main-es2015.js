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

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n      <!-- <app-recipes *ngIf=\"page === 'recipes'\"></app-recipes>\n      <app-shopping-list\n        (pageChange)=\"onNavigate($event)\"\n        *ngIf=\"page === 'shoppingList'\"\n      ></app-shopping-list> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Recipe Book</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/recipes\" #recipes *ngIf=\"isAuthenticated\">Recipes</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/shoppinglist\" *ngIf=\"isAuthenticated\"\n            >Shopping List</a\n          >\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a routerLink=\"/login\" *ngIf=\"!isAuthenticated\">Login</a>\n        </li>\n        <li>\n          <a routerLink=\"/login\" *ngIf=\"isAuthenticated\" (click)=\"onLogout()\"\n            >Logout</a\n          >\n        </li>\n        <li class=\"dropdown\" appDropdown>\n          <a\n            style=\"cursor: pointer;\"\n            class=\"dropdown-toggle\"\n            role=\"button\"\n            *ngIf=\"isAuthenticated\"\n            >Manage<span class=\"caret\"></span\n          ></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a>\n              <a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/alert/alert.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/alert/alert.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" (click)=\"onClose()\"></div>\n<div class=\"alert-box\">\n  <p>\n    {{ message }}\n  </p>\n  <div class=\"alert-box-actions\">\n    <button class=\"btn btn-primary\" (click)=\"onClose()\">Close</button>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const appRoutes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "recipes",
        loadChildren: () => Promise.all(/*! import() | recipes-recipes-module */[__webpack_require__.e("default~auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("recipes-recipes-module")]).then(__webpack_require__.bind(null, /*! ./recipes/recipes.module */ "./src/app/recipes/recipes.module.ts")).then((module) => module.RecipesModule),
    },
    {
        path: "shoppinglist",
        loadChildren: () => Promise.all(/*! import() | shopping-list-shopping-list-module */[__webpack_require__.e("default~auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("shopping-list-shopping-list-module")]).then(__webpack_require__.bind(null, /*! ./shopping-list/shopping-list.module */ "./src/app/shopping-list/shopping-list.module.ts")).then((module) => module.ShoppingListModule),
    },
    {
        path: "login",
        loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~recipes-recipes-module~shopping-list-shopping-list-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then((module) => module.AuthModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = "angular8Course";
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.module */ "./src/app/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _basicHighlight_basic_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basicHighlight/basic-highlight.directive */ "./src/app/basicHighlight/basic-highlight.directive.ts");
/* harmony import */ var _betterHighlight_better_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./betterHighlight/better-highlight.directive */ "./src/app/betterHighlight/better-highlight.directive.ts");
/* harmony import */ var _unless_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unless.directive */ "./src/app/unless.directive.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _basicHighlight_basic_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["BasicHighlightDirective"],
            _betterHighlight_better_highlight_directive__WEBPACK_IMPORTED_MODULE_10__["BetterHighlightDirective"],
            _unless_directive__WEBPACK_IMPORTED_MODULE_11__["UnlessDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((user) => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("auth", user.token),
            });
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    signup(email, password) {
        return this.http
            .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey}`, { email: email, password: password, returnSecureToken: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((resData) => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http
            .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey}`, { email: email, password: password, returnSecureToken: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((resData) => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData) {
            return;
        }
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout() {
        this.user.next(null);
        localStorage.removeItem("user");
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem("user", JSON.stringify(user));
    }
    handleError(errorRes) {
        let errorMessage = "An unknown error has occured!";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "This email already exists, please try another.";
                break;
            case "INVALID_PASSWORD":
                errorMessage =
                    "You have entered an invalid password, please try again.";
                break;
            case "EMAIL_NOT_FOUND":
                errorMessage =
                    "You have entered an invalid email address, please try again";
                break;
            case "USER_DISABLED":
                errorMessage =
                    "You have entered an incorrect password to many times and the account has been temporarily suspended.";
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
User.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Date }
];


/***/ }),

/***/ "./src/app/basicHighlight/basic-highlight.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/basicHighlight/basic-highlight.directive.ts ***!
  \*************************************************************/
/*! exports provided: BasicHighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicHighlightDirective", function() { return BasicHighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicHighlightDirective = class BasicHighlightDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngOnInit() {
        this.elRef.nativeElement.style.backgroundColor = "red";
    }
};
BasicHighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
BasicHighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[basicHighlight]",
    })
], BasicHighlightDirective);



/***/ }),

/***/ "./src/app/betterHighlight/better-highlight.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/betterHighlight/better-highlight.directive.ts ***!
  \***************************************************************/
/*! exports provided: BetterHighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetterHighlightDirective", function() { return BetterHighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BetterHighlightDirective = class BetterHighlightDirective {
    constructor() {
        this.defaultColor = "transparent";
        this.highlightColor = "lightblue";
        this.backgroundColor = this
            .defaultColor;
    }
    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }
    mouseOver(eventData) {
        this.backgroundColor = this.highlightColor;
        this.transition = "500ms";
    }
    mouseExit(eventData) {
        this.backgroundColor = this.defaultColor;
        this.transition = "500ms";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BetterHighlightDirective.prototype, "defaultColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appBetterHighlight")
], BetterHighlightDirective.prototype, "highlightColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.backgroundColor")
], BetterHighlightDirective.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.transition")
], BetterHighlightDirective.prototype, "transition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter")
], BetterHighlightDirective.prototype, "mouseOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
], BetterHighlightDirective.prototype, "mouseExit", null);
BetterHighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appBetterHighlight]",
    })
], BetterHighlightDirective);



/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"],
            _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptorService"],
                multi: true,
            },
        ],
    })
], CoreModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HeaderComponent = class HeaderComponent {
    constructor(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.isAuthenticated = false;
        this.color = "lightgreen";
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user) => {
            this.dataStorageService.fetchRecipes().subscribe();
            this.isAuthenticated = !!user;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }
    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
    onLogout() {
        this.authService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("recipes", { static: false })
], HeaderComponent.prototype, "recipe", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let RecipeService = class RecipeService {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // private recipes: Recipe[] = [
        //   new Recipe(
        //     "Lasagne",
        //     "Italian classic",
        //     "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
        //     [new Ingredient("Tinned tomatoes", 2), new Ingredient("Cheese", 1)]
        //   ),
        //   new Recipe(
        //     "Paella",
        //     "Spanish classic",
        //     "https://cdn.pixabay.com/photo/2016/01/29/14/02/paella-1168003_1280.jpg",
        //     [new Ingredient("Risotto Rice", 1), new Ingredient("Chorizo", 1)]
        //   ),
        // ];
        this.recipes = [];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        console.log(this.recipes);
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return [...this.recipes];
    }
    getRecipe(id) {
        return this.recipes[id];
    }
    addIngredientsToShoppingList(ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index, recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
};
RecipeService.ctorParameters = () => [
    { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], RecipeService);



/***/ }),

/***/ "./src/app/shared/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/alert/alert.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 50;\n}\n\n.alert-box {\n  position: fixed;\n  top: 30vh;\n  left: 20vw;\n  width: 60vw;\n  padding: 60px;\n  z-index: 100;\n  background: white;\n  box-shadow: 2px 2px 8px;\n}\n\n.alert-box-actions {\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmFsZXJ0LWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMHZoO1xuICBsZWZ0OiAyMHZ3O1xuICB3aWR0aDogNjB2dztcbiAgcGFkZGluZzogNjBweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHg7XG59XG5cbi5hbGVydC1ib3gtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() {
        this.onCloseError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClose() {
        this.onCloseError.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlertComponent.prototype, "onCloseError", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-alert",
        template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/alert/alert.component.html"),
        styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/alert/alert.component.css")]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let DataStorageService = class DataStorageService {
    constructor(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put("https://ng-course-recipe-book-75db7.firebaseio.com/recipes.json", recipes)
            .subscribe((res) => {
            console.log(res);
        });
    }
    fetchRecipes() {
        return this.http
            .get("https://ng-course-recipe-book-75db7.firebaseio.com/recipes.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((recipes) => {
            return recipes.map((recipe) => {
                return Object.assign({}, recipe, { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((recipes) => {
            this.recipeService.setRecipes(recipes);
        }));
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: "root",
    })
], DataStorageService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    onClick() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open")
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], DropdownDirective.prototype, "onClick", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appDropdown]",
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}
Ingredient.ctorParameters = () => [
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: rgb(245, 211, 17);\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(24px, 0);\n            transform: translate(24px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(24px, 0);\n            transform: translate(24px, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMkRBQW1EO1VBQW5ELG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsU0FBUztFQUNULDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFNBQVM7RUFDVCw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsVUFBVTtFQUNWLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBUEE7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFDRjtBQVBBO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1lbGxpcHNpcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1lbGxpcHNpcyBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyMTEsIDE3KTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcbn1cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG59XG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzMnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDU2cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
};
LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-loading-spinner",
        template: `<div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div> `,
        styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/shared/loading-spinner/loading-spinner.component.css")]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
            _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");




let ShoppingListService = class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]("Tinned Tomatoes", 10),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]("Mature Cheddar", 2),
        ];
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    updateIngredient(updatedIngredient, index) {
        this.ingredients[index] = updatedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addNewIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    removeIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
};
ShoppingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ShoppingListService);



/***/ }),

/***/ "./src/app/unless.directive.ts":
/*!*************************************!*\
  !*** ./src/app/unless.directive.ts ***!
  \*************************************/
/*! exports provided: UnlessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlessDirective", function() { return UnlessDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnlessDirective = class UnlessDirective {
    constructor(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    set appUnless(condition) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.vcRef.clear();
        }
    }
};
UnlessDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UnlessDirective.prototype, "appUnless", null);
UnlessDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appUnless]",
    })
], UnlessDirective);



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
    production: false,
    firebaseAPIKey: "AIzaSyDK_g92mNN82AGlKI-_HGEHw0Ae9XQT620",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/matthewwendzina/Documents2/coding/angular8Course/recipeProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map