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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/album-details/album-details.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/album-details/album-details.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n  <div>\n    <p id=\"informations\">\n      <img [src]=\"'assets/'+album.imageUrl\">L'Album {{album.nom}} de {{album.auteur}}</p>\n  </div>\n  <div class=\"form-group mb-2\">\n    <label for=\"note\" class=\"sr-only\">Choix de la note</label>\n    <select [(ngModel)]=\"album.note\" name=\"note\"class=\"col-4\">\n      <option>0</option>\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n      <option>6</option>\n      <option>7</option>\n      <option>8</option>\n      <option>9</option>\n      <option>10</option>\n    </select>\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" [hidden]=\"!isValid()\" (click)=\"onClick()\">Enregistrer</button>\n  </div>\n  <div>\n    <p [style.color]=\"getColor()\"> note : {{album.note}}</p>\n  </div>\n  <div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"/src/assets/When-we-sleep.jpg\" class=\"card-img-top\" alt=\"When We Sleep : Billie Eilish\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{album.nom}}</h5>\n      <p class=\"card-text\">L'Album {{album.nom}} de {{album.auteur}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/navbar/navbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/navbar/navbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top memariani-gradient\">\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n    aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/album\">Album</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/new-album\">Nouveau</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"></a>\n      </li>\n    </ul>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"onLogOut()\" *ngIf=\"isAuth\">Logout</button>\n      <p class=\"my-2 my-sm-0\">{{user.nom}} - {{user.lastLogin | date: 'EEEE dd LLLL yyy'}}</p>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let album of albums\" class=\"col-12 col-sm-6 col-md-4 col-lg-3\">\n            <a [routerLink]=\"['/album-details',album.id]\">\n                <img *ngIf=\"album.imageUrl\" [src]=\"'assets/'+album.imageUrl\">\n                <img *ngIf=\"!album.imageUrl\" [src]=\"'assets/denis.jpg'\">\n            </a>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"selectedAlbum\">\n    <app-album-details *ngIf=\"selectedAlbum\" [album]=\"selectedAlbum\"></app-album-details>\n    <button type=\"button\" (click)=\"unselect()\">Retour</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<app-album-details *ngIf=\"album\" [album]=\"album\" (save)=\"onSave($event)\"></app-album-details>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n    <form class=\"form-inline\">\n        <label for=\"email\" class=\"mr-sm-2\">Nom d'utilisateur : </label>\n        <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"text\">\n        <label for=\"pwd\" class=\"mr-sm-2\">Password : </label>\n        <input type=\"password\" class=\"form-control mb-2 mr-sm-2\" id=\"pwd\">\n        <div class=\"form-check mb-2 mr-sm-2\">\n            <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n            </label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2\" (click)=\"onLogIn()\" *ngIf=\"!isAuth\">Submit</button>\n    </form>\n</div> -->\n<div class=\"login-form\">\n    <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n        <div class=\"avatar\">\n            <img [src]=\"'assets/avatar.png'\" alt=\"avatar\" />\n        </div>\n        <h2 class=\"text-center\">Login</h2>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"nom\" ngModel placeholder=\"Nom\"\n                #nom=\"ngModel\" required minlength=\"3\">\n            <div *ngIf=\"nom.invalid && (nom.touched || nom.dirty)\">\n                <p *ngIf=\"nom.errors.required\" class=\"text-center invalid\">\n                Username is required\n                </p>\n                <p *ngIf=\"nom.errors.minlength\" class=\"text-center invalid\">\n                    min length is 3\n                </p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel placeholder=\"Password\" required>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Sign in</button>\n        </div>\n        <p *ngIf=\"error\">{{error}}</p>\n        <div class=\"clearfix text-center\">\n            <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <input type=\"text\" placeholder=\"Nom de l'album\" formControlName=\"name\">\n    <input type=\"text\" placeholder=\"Nom de l'auteur\" formControlName=\"auteur\">\n    <select name=\"note\" placeholder=\"Note de l'album\" formControlName=\"note\">\n        <option>0</option>\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n    </select>\n    <div formArrayName=\"songs\">\n        <div *ngFor=\"let control of songs.controls;let i = index\">\n            <div [formGroupName]=\"i\">\n                <input type=\"text\" formControlName=\"name\">\n                <input type=\"text\" formControlName=\"length\">\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" (click)=\"addSong()\">Nouvelle chanson</button>\n    <button type=\"submit\" [disabled]=\"form.invalid\">Save</button>\n</form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <input type=\"text\" name=\"nom\" placeholder=\"Nom de l'album\" ngModel required>\n        <input type=\"text\" name=\"auteur\" placeholder=\"Nom de l'auteur\" ngModel required>\n    <select name=\"note\" placeholder=\"Note de l'album\" ngModel>\n        <option>0</option>\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n    </select>\n    <button type=\"submit\" [disabled]=\"f.invalid\">Save</button>\n</form> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/album/album.module.ts":
/*!***************************************!*\
  !*** ./src/app/album/album.module.ts ***!
  \***************************************/
/*! exports provided: AlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumModule", function() { return AlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_album_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/album/album.component */ "./src/app/album/pages/album/album.component.ts");
/* harmony import */ var _components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/album-details/album-details.component */ "./src/app/album/components/album-details/album-details.component.ts");
/* harmony import */ var _pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/album-liste/album-liste.component */ "./src/app/album/pages/album-liste/album-liste.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/new-album/new-album.component */ "./src/app/album/pages/new-album/new-album.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/album/components/navbar/navbar.component.ts");











let AlbumModule = class AlbumModule {
};
AlbumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_album_album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"],
            _components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__["AlbumDetailsComponent"],
            _pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_5__["AlbumListeComponent"],
            _pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_9__["NewAlbumComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]
    })
], AlbumModule);



/***/ }),

/***/ "./src/app/album/components/album-details/album-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/album/components/album-details/album-details.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2NvbXBvbmVudHMvYWxidW0tZGV0YWlscy9hbGJ1bS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/album/components/album-details/album-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/album/components/album-details/album-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlbumDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailsComponent", function() { return AlbumDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");




let AlbumDetailsComponent = class AlbumDetailsComponent {
    constructor(activatedRoute, albumService, router) {
        this.activatedRoute = activatedRoute;
        this.albumService = albumService;
        this.router = router;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((map) => {
            const id = +map.get('id');
            this.albumService.getAlbum(id).subscribe(album => this.album = album);
        });
    }
    nbChanson() {
        return this.album.listeChanson.length;
    }
    getColor() {
        if (this.album.note === 5) {
            return "#64b3f4";
        }
        else if (this.album.note === 0) {
            return "#e35d5b";
        }
        else if (this.album.note === 10) {
            return "#11998e";
        }
        return 'black';
    }
    isValid() {
        if (this.album.note >= 0 && this.album.note <= 10) {
            return true;
        }
    }
    onClick() {
        this.albumService.saveAlbum(this.album).subscribe(() => this.router.navigate(['/album']), (err) => console.error(err));
        console.log('save', this.album.note);
        this.save.emit(this.album.note);
    }
};
AlbumDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlbumDetailsComponent.prototype, "album", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlbumDetailsComponent.prototype, "save", void 0);
AlbumDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/album-details/album-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-details.component.css */ "./src/app/album/components/album-details/album-details.component.css")).default]
    })
], AlbumDetailsComponent);



/***/ }),

/***/ "./src/app/album/components/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/album/components/navbar/navbar.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".memariani-gradient{\r\n    background-image: linear-gradient(to right,#aa4b6b,#6b6b83,#3b8d99);\r\n}\r\n.active {\r\n    color: azure !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtRUFBbUU7QUFDdkU7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWFyaWFuaS1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYWE0YjZiLCM2YjZiODMsIzNiOGQ5OSk7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYXp1cmUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/album/components/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/album/components/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.title = 'Album Dumbledore';
        this.isAuth = false;
    }
    ngOnInit() {
        this.userService.getUser().subscribe((user) => { this.user = user; });
        this.isAuth = this.authService.isLoggedIn();
    }
    onLogOut() {
        this.authService.logOut();
        this.isAuth = this.authService.isLoggedIn();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/album/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/album/pages/album-liste/album-liste.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/album/pages/album-liste/album-liste.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL2FsYnVtLWxpc3RlL2FsYnVtLWxpc3RlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/album/pages/album-liste/album-liste.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/album/pages/album-liste/album-liste.component.ts ***!
  \******************************************************************/
/*! exports provided: AlbumListeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListeComponent", function() { return AlbumListeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _logger_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logger-service.service */ "./src/app/logger-service.service.ts");
/* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");




let AlbumListeComponent = class AlbumListeComponent {
    constructor(loggerService, albumService) {
        this.loggerService = loggerService;
        this.albumService = albumService;
    }
    ngOnInit() {
        this.albumService.getAlbums().subscribe((albums) => {
            this.albums = albums;
        });
    }
    selectAlbum(album) {
        this.selectedAlbum = album;
        this.loggerService.logDebug(`album selected ${this.selectedAlbum.nom}`);
    }
    unselect() {
        delete this.selectedAlbum;
    }
};
AlbumListeComponent.ctorParameters = () => [
    { type: _logger_service_service__WEBPACK_IMPORTED_MODULE_2__["LoggerServiceService"] },
    { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"] }
];
AlbumListeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-liste',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-liste.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-liste.component.css */ "./src/app/album/pages/album-liste/album-liste.component.css")).default]
    })
], AlbumListeComponent);



/***/ }),

/***/ "./src/app/album/pages/album/album.component.css":
/*!*******************************************************!*\
  !*** ./src/app/album/pages/album/album.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/album/pages/album/album.component.ts":
/*!******************************************************!*\
  !*** ./src/app/album/pages/album/album.component.ts ***!
  \******************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/album */ "./src/app/album/shared/album.ts");



let AlbumComponent = class AlbumComponent {
    constructor() { }
    ngOnInit() {
        this.album = _shared_album__WEBPACK_IMPORTED_MODULE_2__["ALBUM"][0];
    }
    onSave(value) {
        console.log('save done', value);
    }
};
AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.css */ "./src/app/album/pages/album/album.component.css")).default]
    })
], AlbumComponent);



/***/ }),

/***/ "./src/app/album/pages/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/album/pages/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\r\n    min-height: 41px;\r\n    background: #fff;\r\n    box-shadow: none !important;\r\n    border-color: #e3e3e3;\r\n}\r\n.form-control:focus {\r\n    border-color: #70c5c0;\r\n}\r\n.form-control, .btn {        \r\n    border-radius: 2px;\r\n}\r\n.login-form {\r\n    width: 350px;\r\n    margin: 0 auto;\r\n    padding: 100px 0 30px;\t\t\r\n}\r\n.login-form form {\r\n    color: #7a7a7a;\r\n    border-radius: 2px;\r\n    margin-bottom: 15px;\r\n    font-size: 13px;\r\n    background: #ececec;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\t\r\n    position: relative;\t\r\n}\r\n.login-form h2 {\r\n    font-size: 22px;\r\n    margin: 35px 0 25px;\r\n}\r\n.login-form .avatar {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: -50px;\r\n    width: 95px;\r\n    height: 95px;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n    background: #70c5c0;\r\n    padding: 15px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.login-form .avatar img {\r\n    width: 100%;\r\n}\r\n.login-form input[type=\"checkbox\"] {\r\n    margin-top: 2px;\r\n}\r\n.login-form .btn {        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #70c5c0;\r\n    border: none;\r\n    margin-bottom: 20px;\r\n}\r\n.login-form .btn:hover, .login-form .btn:focus {\r\n    background: #50b8b3;\r\n    outline: none !important;\r\n}\r\n.login-form a {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.login-form a:hover {\r\n    text-decoration: none;\r\n}\r\n.login-form form a {\r\n    color: #7a7a7a;\r\n    text-decoration: none;\r\n}\r\n.login-form form a:hover {\r\n    text-decoration: underline;\r\n}\r\n.invalid {\r\n    color: red;\r\n}\r\n.ng-invalid input {\r\n    border: 1px solid red;\r\n}\r\n.ng-valid {\r\n    border: 1px solid #70c5c0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzBjNWMwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwIDMwcHg7XHRcdFxyXG59XHJcbi5sb2dpbi1mb3JtIGZvcm0ge1xyXG4gICAgY29sb3I6ICM3YTdhN2E7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHRcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxyXG59XHJcbi5sb2dpbi1mb3JtIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMzVweCAwIDI1cHg7XHJcbn1cclxuLmxvZ2luLWZvcm0gLmF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzBjNWMwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4ubG9naW4tZm9ybSAuYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVx0XHJcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLmxvZ2luLWZvcm0gLmJ0biB7ICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogIzcwYzVjMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvZ2luLWZvcm0gLmJ0bjpob3ZlciwgLmxvZ2luLWZvcm0gLmJ0bjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTBiOGIzO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59ICAgIFxyXG4ubG9naW4tZm9ybSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmxvZ2luLWZvcm0gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxvZ2luLWZvcm0gZm9ybSBhIHtcclxuICAgIGNvbG9yOiAjN2E3YTdhO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5sb2dpbi1mb3JtIGZvcm0gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uaW52YWxpZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5uZy1pbnZhbGlkIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ubmctdmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwYzVjMCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/album/pages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/album/pages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    ngOnInit() {
    }
    /*   login(f:NgForm) {
        this.authService.logIn();
        this.isAuth = this.authService.isLoggedIn();
      } */
    onLogOut() {
        this.authService.logOut();
        this.isAuth = this.authService.isLoggedIn();
    }
    login(f) {
        this.authService.logIn(f.value, (error) => this.error = error);
        this.isAuth = this.authService.isLoggedIn();
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/album/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/album/pages/new-album/new-album.component.css":
/*!***************************************************************!*\
  !*** ./src/app/album/pages/new-album/new-album.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL25ldy1hbGJ1bS9uZXctYWxidW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/album/pages/new-album/new-album.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/album/pages/new-album/new-album.component.ts ***!
  \**************************************************************/
/*! exports provided: NewAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumComponent", function() { return NewAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NewAlbumComponent = class NewAlbumComponent {
    constructor(albumService, router) {
        this.albumService = albumService;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('new album', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'auteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('auteur', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'note': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'songs': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                    'length': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])
                })
            ])
        });
    }
    onSubmit() {
        console.log(this.form.value);
    }
    get songs() {
        return this.form.get('songs');
    }
    addSong() {
        this.songs.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'length': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)])
        }));
    }
};
NewAlbumComponent.ctorParameters = () => [
    { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NewAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-album.component.css */ "./src/app/album/pages/new-album/new-album.component.css")).default]
    })
], NewAlbumComponent);



/***/ }),

/***/ "./src/app/album/shared/album.ts":
/*!***************************************!*\
  !*** ./src/app/album/shared/album.ts ***!
  \***************************************/
/*! exports provided: Album, ALBUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBUM", function() { return ALBUM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chanson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chanson */ "./src/app/album/shared/chanson.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enum */ "./src/app/album/shared/enum.ts");



class Album {
    constructor(args = {}) {
        this.id = args.id;
        this.nom = args.nom;
        this.auteur = args.auteur;
        this.note = args.note;
        this.listeChanson = args.listeChanson;
        this.genre = args.genre;
        this.imageUrl = args.imageUrl;
    }
}
const ALBUM = [
    new Album({ id: 0, nom: "When we fall Asleep, Where Do We Go?", auteur: "Billie Eilish", note: 9, listeChanson: [new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "Bad Guy", duree: 3.14 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "xanny", duree: 4.04 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "you should see me in a crown", duree: 3.01 })], genre: _enum__WEBPACK_IMPORTED_MODULE_2__["Genre"].POP, imageUrl: 'When-we-sleep.jpg' }),
    new Album({ id: 1, nom: "Beerbongs & Bentleys", auteur: "Post Malone", note: 8, listeChanson: [new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "rockstar", duree: 3.38 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "Better Now", duree: 3.51 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "Psycho", duree: 3.42 })], genre: _enum__WEBPACK_IMPORTED_MODULE_2__["Genre"].POP }),
    new Album({ id: 2, nom: "Astroworld", auteur: "Travis Scott", note: 8, listeChanson: [new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "STARGAZING", duree: 4.31 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "SICKO MODE", duree: 5.13 }), new _chanson__WEBPACK_IMPORTED_MODULE_1__["Chanson"]({ titre: "WAKE UP", duree: 3.52 })], genre: _enum__WEBPACK_IMPORTED_MODULE_2__["Genre"].POP }),
];


/***/ }),

/***/ "./src/app/album/shared/albums.service.ts":
/*!************************************************!*\
  !*** ./src/app/album/shared/albums.service.ts ***!
  \************************************************/
/*! exports provided: AlbumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function() { return AlbumsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album */ "./src/app/album/shared/album.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AlbumsService = class AlbumsService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.albums = [
            this.album = _album__WEBPACK_IMPORTED_MODULE_2__["ALBUM"][0],
            this.album = _album__WEBPACK_IMPORTED_MODULE_2__["ALBUM"][1],
            this.album = _album__WEBPACK_IMPORTED_MODULE_2__["ALBUM"][2]
        ];
        this.url = 'albums';
    }
    getAlbums() {
        return this.httpclient.get(this.url + '/all'); // => GET localhost:4200/api/album
    }
    getAlbum(id) {
        return this.httpclient.get(`${this.url}/${id}`); // => GET localhost:4200/api/album/1  || ((this.url + '/' + id)) => autre syntaxe pour l'url
    }
    saveAlbum(album) {
        console.log('save', album);
        return this.httpclient.post(this.url, album); // => POST localhost:4200/api/album
    }
};
AlbumsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AlbumsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlbumsService);



/***/ }),

/***/ "./src/app/album/shared/chanson.ts":
/*!*****************************************!*\
  !*** ./src/app/album/shared/chanson.ts ***!
  \*****************************************/
/*! exports provided: Chanson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chanson", function() { return Chanson; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Chanson {
    constructor(args = {}) {
        this.titre = args.titre;
        this.duree = args.duree;
    }
}


/***/ }),

/***/ "./src/app/album/shared/enum.ts":
/*!**************************************!*\
  !*** ./src/app/album/shared/enum.ts ***!
  \**************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Genre;
(function (Genre) {
    Genre[Genre["POP"] = 0] = "POP";
    Genre[Genre["GENRE2"] = 1] = "GENRE2";
    Genre[Genre["GENRE3"] = 2] = "GENRE3";
})(Genre || (Genre = {}));


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _album_pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/pages/album-liste/album-liste.component */ "./src/app/album/pages/album-liste/album-liste.component.ts");
/* harmony import */ var _album_components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./album/components/album-details/album-details.component */ "./src/app/album/components/album-details/album-details.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _album_pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album/pages/new-album/new-album.component */ "./src/app/album/pages/new-album/new-album.component.ts");
/* harmony import */ var _album_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./album/pages/login/login.component */ "./src/app/album/pages/login/login.component.ts");









const routes = [
    {
        path: 'login', component: _album_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'album', component: _album_pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_4__["AlbumListeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'album-details/:id', component: _album_components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_5__["AlbumDetailsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'new-album', component: _album_pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_7__["NewAlbumComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: '**', redirectTo: 'album'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Album Dumbledore';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _album_shared_albums_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/shared/albums.service */ "./src/app/album/shared/albums.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _album_album_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./album/album.module */ "./src/app/album/album.module.ts");
/* harmony import */ var _album_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./album/pages/login/login.component */ "./src/app/album/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_6___default.a, 'fr');
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _album_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _album_album_module__WEBPACK_IMPORTED_MODULE_8__["AlbumModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [_album_shared_albums_service__WEBPACK_IMPORTED_MODULE_4__["AlbumsService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: "fr-FR" }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.isAuth = false;
        this.url = 'albums';
    }
    isLoggedIn() {
        this.isAuth = JSON.parse(localStorage.getItem('auth'));
        return this.isAuth;
    }
    /*   logIn() {
            this.isAuth = true;
            this.router.navigate(['/album'])
    
      } */
    logIn(user, cb) {
        console.log(user);
        this.httpClient.post(this.url + '/log', user).subscribe((status) => {
            if (status) {
                this.isAuth = true;
                this.router.navigate(['/album']);
                localStorage.setItem('auth', 'true');
            }
            else {
                cb("Identifiants incorrects");
            }
        }, (err) => cb("Identifiants incorrects"));
    }
    logOut() {
        this.isAuth = false;
        localStorage.removeItem('auth');
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/logger-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/logger-service.service.ts ***!
  \*******************************************/
/*! exports provided: LoggerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerServiceService", function() { return LoggerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoggerServiceService = class LoggerServiceService {
    constructor() { }
    logDebug(log) {
        console.log(log);
    }
    logError(log) {
        console.error(log);
    }
};
LoggerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoggerServiceService);



/***/ }),

/***/ "./src/app/shared/user.ts":
/*!********************************!*\
  !*** ./src/app/shared/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(nom) {
        this.nom = nom;
        this.lastLogin = new Date();
    }
}


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let UserService = class UserService {
    constructor() {
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]('Erwan');
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.user);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: 'localhost:7070'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANGULARSPACE\album\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map