(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-list-shopping-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs 12\">\n    <form (ngSubmit)=\"addOrUpdateIngredient(form)\" #form=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            name=\"name\"\n            ngModel\n            required\n          />\n        </div>\n        <div class=\"col-sm-2\">\n          <label for=\"amount\"> Amount </label>\n          <input\n            type=\"number\"\n            id=\"number\"\n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\"\n          />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n          >\n            {{ editMode ? \"Update\" : \"Add\" }}\n          </button>\n          <button\n            class=\"btn btn-danger\"\n            type=\"button\"\n            (click)=\"removeIngredient()\"\n            *ngIf=\"editMode\"\n          >\n            Delete\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            type=\"button\"\n            (click)=\"clearIngredients()\"\n          >\n            Clear\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-edit></app-shopping-edit>\n    <hr />\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer;\"\n        *ngFor=\"let ingredient of ingredients; let i = index\"\n        (click)=\"onEditItem(i)\"\n      >\n        {{ ingredient.name }}, [{{ ingredient.amount }}]\n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.col-xs-12 button {\n  margin: 0 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29sLXhzLTEyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.editMode = false;
    }
    ngOnInit() {
        this.startedEditingSub = this.shoppingListService.startedEditing.subscribe((index) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.shoppingListForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount,
            });
        });
    }
    ngOnDestroy() {
        this.startedEditingSub.unsubscribe();
    }
    addOrUpdateIngredient(form) {
        const value = form.value;
        if (this.editMode) {
            this.shoppingListService.updateIngredient(new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](value.name, value.amount), this.editedItemIndex);
        }
        else {
            const newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](value.name, value.amount);
            this.shoppingListService.addNewIngredient(newIngredient);
        }
        this.editMode = false;
        this.shoppingListForm.reset();
    }
    clearIngredients() {
        this.shoppingListForm.reset();
        this.editMode = false;
    }
    removeIngredient() {
        this.shoppingListService.removeIngredient(this.editedItemIndex);
        this.editMode = false;
        this.shoppingListForm.reset();
    }
};
ShoppingEditComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("form", { static: false })
], ShoppingEditComponent.prototype, "shoppingListForm", void 0);
ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-shopping-edit",
        template: __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
        styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
    })
], ShoppingEditComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListRoutingModule", function() { return ShoppingListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const routes = [
    {
        path: "",
        component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListComponent"],
    },
];
let ShoppingListRoutingModule = class ShoppingListRoutingModule {
};
ShoppingListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], ShoppingListRoutingModule);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ShoppingListComponent = class ShoppingListComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.ingredients = [];
    }
    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    ngOnDestroy() {
        this.ingredientsChangedSub.unsubscribe();
    }
    onEditItem(index) {
        this.shoppingListService.startedEditing.next(index);
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-shopping-list",
        template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list-routing.module */ "./src/app/shopping-list/shopping-list-routing.module.ts");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");







let ShoppingListModule = class ShoppingListModule {
};
ShoppingListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponent"], _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingEditComponent"]],
        imports: [_shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShoppingListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
    })
], ShoppingListModule);



/***/ })

}]);
//# sourceMappingURL=shopping-list-shopping-list-module-es2015.js.map