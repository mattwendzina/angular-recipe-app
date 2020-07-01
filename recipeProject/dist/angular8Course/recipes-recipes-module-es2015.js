(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img\n      [src]=\"recipe.imagePath\"\n      alt=\"\"\n      class=\"img-responsive\"\n      style=\"max-height: 300px;\"\n    />\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs 12\">\n    <h1>{{ recipe.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs 12\">\n    <div appDropdown class=\"btn-group\">\n      <button class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a (click)=\"addToShoppingList()\" style=\"cursor: pointer;\"\n            >Add to shopping list\n          </a>\n        </li>\n        <li>\n          <a (click)=\"onEditRecipe()\" style=\"cursor: pointer;\">\n            Edit Recipe\n          </a>\n        </li>\n        <li>\n          <a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">\n            Delete Recipe\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3>{{ recipe.description }}</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"list-group\">\n        <li\n          class=\"list-group-item\"\n          *ngFor=\"let ingredient of recipe.ingredients\"\n        >\n          <span class=\"ingredient\"> Ingredient - {{ ingredient.name }}</span>\n          <span class=\"amount\"> Amount - {{ ingredient.amount }}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3>Edit Recipe</h3>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"recipeForm\">\n      <div class=\"row\" class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 buttons\">\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary\"\n              [disabled]=\"recipeForm.invalid\"\n            >\n              Save\n            </button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">\n              Cancel\n            </button>\n          </div>\n        </div>\n        <hr />\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label for=\"name\">Name</label>\n            <input id=\"name\" class=\"form-control\" formControlName=\"name\" />\n          </div>\n\n          <div class=\"col-sm-12\">\n            <label for=\"description\">Description</label>\n            <textarea\n              id=\"description\"\n              class=\"form-control\"\n              rows=\"6\"\n              formControlName=\"description\"\n            ></textarea>\n          </div>\n          <div class=\"col-sm-4\">\n            <label for=\"imagePath\">Image URL</label>\n            <input\n              id=\"imagePath\"\n              class=\"form-control\"\n              formControlName=\"imagePath\"\n              #imagePath\n            />\n          </div>\n          <div class=\"col-sm-8\">\n            <img [src]=\"imagePath.value\" alt=\"\" class=\"img-responsive\" />\n          </div>\n\n          <div class=\"col-sm-12 ingredients\" formArrayName=\"ingredients\">\n            <h5>Ingredients</h5>\n            <div\n              class=\"row ingredient\"\n              *ngFor=\"let ingredientCtrl of ingredientsControls; let i = index\"\n              [formGroupName]=\"i\"\n            >\n              <div class=\"col-sm-8\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"name\"\n                />\n              </div>\n              <div class=\"col-sm-2\">\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  formControlName=\"amount\"\n                />\n              </div>\n              <div class=\"col-sm-2\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-danger\"\n                  (click)=\"onDeleteIngredient(i)\"\n                >\n                  Delete\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12\">\n            <button\n              type=\"button\"\n              class=\"btn btn-success\"\n              (click)=\"onAddIngredient()\"\n            >\n              Add Ingredient\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  [routerLink]=\"[index]\"\n  style=\"cursor: pointer;\"\n  class=\"list-group-item clearfix\"\n  routerLinkActive=\"active\"\n>\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img\n      [src]=\"recipe.imagePath\"\n      alt=\"{{ recipe.imagePath }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 50px;\"\n    />\n  </span>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button (click)=\"onNewRecipe()\" class=\"btn btn-success\">New Recipe</button>\n  </div>\n</div>\n<hr />\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item\n      *ngFor=\"let recipeEl of recipes; let i = index\"\n      [index]=\"i\"\n      [recipe]=\"recipeEl\"\n    ></app-recipe-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a recipe</h3>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row recipe-container\">\n  <div class=\"col-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n    <!-- <app-recipe-detail\n      *ngIf=\"selectedRecipe; else infoText\"\n      [recipe]=\"selectedRecipe\"\n    ></app-recipe-detail>\n    <ng-template #infoText><p>Please select a recipe!</p></ng-template> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(["/login"]);
        }));
        //   tap((isAuth) => {
        //     if (!isAuth) {
        //       this.router.navigate(["/login"]);
        //     }
        //   })
        //   );
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".amount,\n.ingredient {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbW91bnQsXG4uaW5ncmVkaWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params.id;
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(["edit"], { relativeTo: this.route });
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(["/recipes"]);
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-recipe-detail",
        template: __webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.ingredients {\n  margin: 10px 0;\n}\n\ndiv.buttons button {\n  margin: 5px;\n}\n\ndiv.ingredient {\n  margin: 5px 0;\n}\n\ninput.ng-invalid,\ntextarea.ng-invalid {\n  border: 2px solid red;\n}\n\nimg {\n  max-height: 150px;\n  margin: 10px;\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5pbmdyZWRpZW50cyB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5kaXYuYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuZGl2LmluZ3JlZGllbnQge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLFxudGV4dGFyZWEubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    get ingredientsControls() {
        return this.recipeForm.get("ingredients").controls;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params.id;
            if (this.id || this.id === 0) {
                this.editMode = true;
            }
            this.initForm();
        });
    }
    initForm() {
        let recipeName = "";
        let recipeImagePath = "";
        let recipeDescription = "";
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe["ingredients"]) {
                for (let ingredient of recipe.ingredients) {
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](ingredient.amount, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[1-9]+[0-9]*$/),
                        ]),
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ingredients: recipeIngredients,
        });
    }
    onAddIngredient() {
        this.recipeForm.get("ingredients").push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[1-9]+[0-9]*$/),
            ]),
        }));
    }
    onSubmit() {
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.router.navigate(["../"], { relativeTo: this.route });
    }
    onCancel() {
        this.router.navigate(["../"], { relativeTo: this.route });
    }
    onDeleteIngredient(index) {
        this.recipeForm.get("ingredients").removeAt(index);
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-recipe-edit",
        template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"),
        styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeItemComponent = class RecipeItemComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recipe-item",
        template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
        styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
    })
], RecipeItemComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.recipesSub = this.recipeService.recipesChanged.subscribe((recipes) => {
            this.recipes = recipes;
        });
    }
    ngOnDestroy() {
        this.recipesSub.unsubscribe();
    }
    onNewRecipe() {
        this.router.navigate(["new"], { relativeTo: this.route });
    }
};
RecipeListComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recipe-list",
        template: __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
    })
], RecipeListComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeStartComponent = class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-start',
        template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html"),
        styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
    })
], RecipeStartComponent);



/***/ }),

/***/ "./src/app/recipes/recipes-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes/recipes-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: RecipesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesResolverService", function() { return RecipesResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.service */ "./src/app/recipes/recipe.service.ts");




let RecipesResolverService = class RecipesResolverService {
    constructor(dataStorageService, recipesService) {
        this.dataStorageService = dataStorageService;
        this.recipesService = recipesService;
    }
    resolve(route, state) {
        const recipes = this.recipesService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
};
RecipesResolverService.ctorParameters = () => [
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] }
];
RecipesResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], RecipesResolverService);



/***/ }),

/***/ "./src/app/recipes/recipes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function() { return RecipesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes-resolver.service */ "./src/app/recipes/recipes-resolver.service.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");









const routes = [
    {
        path: "",
        component: _recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            { path: "", component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"] },
            { path: "new", component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"] },
            {
                path: ":id",
                component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"],
                resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_3__["RecipesResolverService"]],
            },
            {
                path: ":id/edit",
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"],
                resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_3__["RecipesResolverService"]],
            },
        ],
    },
];
let RecipesRoutingModule = class RecipesRoutingModule {
};
RecipesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], RecipesRoutingModule);



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-container {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipesComponent = class RecipesComponent {
    constructor() { }
    ngOnInit() { }
};
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recipes",
        template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html"),
        styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
    })
], RecipesComponent);



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes-routing.module */ "./src/app/recipes/recipes-routing.module.ts");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");











let RecipesModule = class RecipesModule {
};
RecipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"],
            _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__["RecipeListComponent"],
            _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"],
            _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__["RecipeItemComponent"],
            _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_9__["RecipeStartComponent"],
            _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_10__["RecipeEditComponent"],
        ],
        imports: [_recipes_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        exports: [],
    })
], RecipesModule);



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module-es2015.js.map