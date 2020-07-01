(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\n    <div style=\"text-align: center;\">\n      <app-loading-spinner *ngIf=\"isLoading\"></app-loading-spinner>\n    </div>\n    <!-- <div class=\"alert alert-danger\" style=\"text-align: center;\" *ngIf=\"error\">\n      <h5>{{ error }}</h5>\n    </div> -->\n    <app-alert\n      [message]=\"error\"\n      *ngIf=\"error\"\n      (onCloseError)=\"closeError()\"\n    ></app-alert>\n    <form\n      (ngSubmit)=\"onSubmit(authForm)\"\n      style=\"margin: 10px 0;\"\n      #authForm=\"ngForm\"\n      *ngIf=\"!isLoading\"\n    >\n      <div class=\"form-group\">\n        <label for=\"email\">E-mail</label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          class=\"form-control\"\n          ngModel\n          name=\"email\"\n          required\n          email\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          class=\"form-control\"\n          ngModel\n          name=\"password\"\n          required\n          minlength=\"6\"\n        />\n      </div>\n      <div>\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          style=\"margin-right: 10px;\"\n          [disabled]=\"authForm.invalid\"\n        >\n          {{ isLoginMode ? \"Login\" : \"Sign Up\" }}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSwitchMode()\">\n          {{ isLoginMode ? \"Switch to Sign Up\" : \"Switch to Login\" }}\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");




var routes = [{ path: "", component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.onSwitchMode = function () {
        this.isLoginMode = !this.isLoginMode;
    };
    AuthComponent.prototype.onSubmit = function (authForm) {
        var _this = this;
        this.isLoading = true;
        if (!authForm.valid) {
            return;
        }
        var email = authForm.value.email;
        var password = authForm.value.password;
        var authObs;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(function (response) {
            console.log(response);
            _this.isLoading = false;
            _this.router.navigate(["/recipes"]);
        }, function (errorMessage) {
            console.log("errorMessage ", errorMessage);
            _this.error = errorMessage;
            _this.isLoading = false;
        });
        authForm.reset();
    };
    AuthComponent.prototype.closeError = function () {
        this.error = null;
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-auth",
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map