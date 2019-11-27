(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/album-details/album-details.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/components/album-details/album-details.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p id=\"nom\">Nom: {{albumFils.nom}}</p>\n<p>Auteur: {{albumFils.auteur | uppercase}}</p>\n<input type=\"number\" name=\"note\" [(ngModel)]=\"albumFils.note\">\n\n<p [style.color]=\"getColor()\">Note : {{albumFils.note}}</p>\n<button type=\"button\" (click)=\"onClick()\" [disabled]=\"albumFils.note < 0 || albumFils.note>5\">Enregistrer</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!-- for each -->\n<div *ngFor=\"let a of albums; let i = index;\"> \n\n   <a [routerLink]=\"['/album-details', a.id]\">\n    \n    {{a.id}} - {{a.nom}}\n\n    </a>\n\n    </div> \n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-album-details *ngIf=\"album\" [albumFils]=\"album\" (save)=\"onSave($event)\"></app-album-details>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <label>Nom</label>\n    <input type=\"text\" name=\"nom\" placeholder=\"Nom de l'album\" ngModel required><br>\n    <label>Auteur</label>\n    <input type=\"text\" name=\"auteur\" placeholder=\"Auteur de l'album\" ngModel required><br>\n    <label>Note</label>\n    <input type=\"number\" name=\"note\" placeholder=\"0\" ngModel required min=\"0\" max=\"5\"><br>\n\n    <button type=\"submit\" [disabled]=\"f.invalid\">Sauver</button>\n\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Le site Angular des ALBUMS</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" routerLinkActive=\"highlight\" routerLink=\"/album\">Albums</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"highlight\" routerLink=\"/new-album\">Nouveau</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"onLogIn()\" *ngIf=\"!isAuth\">log in</button>\r\n        <app-utilisateur *ngIf=\"isAuth\"></app-utilisateur>\r\n\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"onLogOut()\" *ngIf=\"isAuth\">log out</button>\r\n        <button type=\"button\" class=\"btn btn-info btn-sm\" *ngIf=\"!isAuth\">Non connecté</button>\r\n   \r\n      </nav>\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/erreur/erreur.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/erreur/erreur.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Vous devez vous connecter pour accéder à cette page!</h1>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilisateur/utilisateur.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilisateur/utilisateur.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-warning btn-sm\">{{user.prenom}} {{user.nom}}</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/album/album.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/album/album.module.ts ***!
          \***************************************/
        /*! exports provided: AlbumModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumModule", function () { return AlbumModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/album-details/album-details.component */ "./src/app/album/components/album-details/album-details.component.ts");
            /* harmony import */ var _pages_album_album_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/album/album.component */ "./src/app/album/pages/album/album.component.ts");
            /* harmony import */ var _pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/album-liste/album-liste.component */ "./src/app/album/pages/album-liste/album-liste.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/new-album/new-album.component */ "./src/app/album/pages/new-album/new-album.component.ts");
            var AlbumModule = /** @class */ (function () {
                function AlbumModule() {
                }
                return AlbumModule;
            }());
            AlbumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__["AlbumDetailsComponent"],
                        _pages_album_album_component__WEBPACK_IMPORTED_MODULE_5__["AlbumComponent"],
                        _pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_6__["AlbumListeComponent"],
                        _pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_9__["NewAlbumComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                    ]
                })
            ], AlbumModule);
            /***/ 
        }),
        /***/ "./src/app/album/components/album-details/album-details.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/album/components/album-details/album-details.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2NvbXBvbmVudHMvYWxidW0tZGV0YWlscy9hbGJ1bS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/album/components/album-details/album-details.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/album/components/album-details/album-details.component.ts ***!
          \***************************************************************************/
        /*! exports provided: AlbumDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailsComponent", function () { return AlbumDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");
            var AlbumDetailsComponent = /** @class */ (function () {
                function AlbumDetailsComponent(activatedRoute, albumsService, router) {
                    this.activatedRoute = activatedRoute;
                    this.albumsService = albumsService;
                    this.router = router;
                    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                AlbumDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.paramMap.subscribe(function (map) {
                        var id = +map.get('id');
                        _this.albumsService.getAlbum(id).subscribe(function (album) { return _this.albumFils = album; });
                    });
                };
                AlbumDetailsComponent.prototype.onClick = function () {
                    var _this = this;
                    this.albumsService.saveAlbum(this.albumFils).subscribe(function () {
                        _this.router.navigate(['/album']),
                            console.log('ok');
                    }, function (err) { return console.error(err); });
                    console.log('save done', this.albumFils.note);
                    this.save.emit(this.albumFils.note);
                };
                AlbumDetailsComponent.prototype.getColor = function () {
                    if (this.albumFils.note < 0) {
                        return 'red';
                    }
                    else {
                        return 'black';
                    }
                };
                return AlbumDetailsComponent;
            }());
            AlbumDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AlbumDetailsComponent.prototype, "albumFils", void 0);
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
            /***/ 
        }),
        /***/ "./src/app/album/pages/album-liste/album-liste.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/album/pages/album-liste/album-liste.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL2FsYnVtLWxpc3RlL2FsYnVtLWxpc3RlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/album/pages/album-liste/album-liste.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/album/pages/album-liste/album-liste.component.ts ***!
          \******************************************************************/
        /*! exports provided: AlbumListeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListeComponent", function () { return AlbumListeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Album */ "./src/app/album/shared/Album.ts");
            /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../logger.service */ "./src/app/logger.service.ts");
            /* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");
            var AlbumListeComponent = /** @class */ (function () {
                function AlbumListeComponent(loggerService, albumService) {
                    this.loggerService = loggerService;
                    this.albumService = albumService;
                }
                AlbumListeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.albumService.getAlbums().subscribe(function (albums) { return _this.albums = albums.map(function (album) { return new _shared_Album__WEBPACK_IMPORTED_MODULE_2__["Album"](album.id, album.auteur, album.nom, album.note); }); }, function (err) { return _this.loggerService.logError(err); });
                };
                AlbumListeComponent.prototype.selectAlbum = function (album) {
                    this.selectedAlbum = album;
                    this.loggerService.logDebug("albmum selected " + this.selectedAlbum.nom);
                };
                AlbumListeComponent.prototype.unselect = function () {
                    delete this.selectedAlbum;
                };
                return AlbumListeComponent;
            }());
            AlbumListeComponent.ctorParameters = function () { return [
                { type: _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] },
                { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_4__["AlbumsService"] }
            ]; };
            AlbumListeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-album-liste',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-liste.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album-liste/album-liste.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-liste.component.css */ "./src/app/album/pages/album-liste/album-liste.component.css")).default]
                })
            ], AlbumListeComponent);
            /***/ 
        }),
        /***/ "./src/app/album/pages/album/album.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/album/pages/album/album.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/album/pages/album/album.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/album/pages/album/album.component.ts ***!
          \******************************************************/
        /*! exports provided: AlbumComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () { return AlbumComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Album */ "./src/app/album/shared/Album.ts");
            var AlbumComponent = /** @class */ (function () {
                function AlbumComponent() {
                }
                AlbumComponent.prototype.ngOnInit = function () {
                    this.album = new _shared_Album__WEBPACK_IMPORTED_MODULE_2__["Album"](4, 'Hey you', 'The Beatltes', 4);
                };
                AlbumComponent.prototype.onSave = function (value) {
                    console.log('save done', value);
                };
                return AlbumComponent;
            }());
            AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-album',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/album/album.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.css */ "./src/app/album/pages/album/album.component.css")).default]
                })
            ], AlbumComponent);
            /***/ 
        }),
        /***/ "./src/app/album/pages/new-album/new-album.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/album/pages/new-album/new-album.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3BhZ2VzL25ldy1hbGJ1bS9uZXctYWxidW0uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/album/pages/new-album/new-album.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/album/pages/new-album/new-album.component.ts ***!
          \**************************************************************/
        /*! exports provided: NewAlbumComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumComponent", function () { return NewAlbumComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_albums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/albums.service */ "./src/app/album/shared/albums.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NewAlbumComponent = /** @class */ (function () {
                function NewAlbumComponent(albumService, router) {
                    this.albumService = albumService;
                    this.router = router;
                }
                NewAlbumComponent.prototype.ngOnInit = function () {
                };
                NewAlbumComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.albumService.saveAlbum(form.value).subscribe(function () { return _this.router.navigate(['/album']); });
                };
                return NewAlbumComponent;
            }());
            NewAlbumComponent.ctorParameters = function () { return [
                { type: _shared_albums_service__WEBPACK_IMPORTED_MODULE_2__["AlbumsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            NewAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-new-album',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/pages/new-album/new-album.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-album.component.css */ "./src/app/album/pages/new-album/new-album.component.css")).default]
                })
            ], NewAlbumComponent);
            /***/ 
        }),
        /***/ "./src/app/album/shared/Album.ts": 
        /*!***************************************!*\
          !*** ./src/app/album/shared/Album.ts ***!
          \***************************************/
        /*! exports provided: Album */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function () { return Album; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Album = /** @class */ (function () {
                function Album(id, nom, auteur, note) {
                    this.id = id;
                    this.nom = nom;
                    this.auteur = auteur;
                    this.note = note;
                }
                return Album;
            }());
            /***/ 
        }),
        /***/ "./src/app/album/shared/albums.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/album/shared/albums.service.ts ***!
          \************************************************/
        /*! exports provided: AlbumsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function () { return AlbumsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Album */ "./src/app/album/shared/Album.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AlbumsService = /** @class */ (function () {
                function AlbumsService(httpclient) {
                    this.httpclient = httpclient;
                    this.albums = [
                        new _Album__WEBPACK_IMPORTED_MODULE_2__["Album"](0, 'On the road', 'The Beatles', 4),
                        new _Album__WEBPACK_IMPORTED_MODULE_2__["Album"](1, 'Greatest hits', 'Queen', 5),
                        new _Album__WEBPACK_IMPORTED_MODULE_2__["Album"](2, 'The wall', 'Pink floyd', 4)
                    ];
                    this.url = 'albums';
                }
                AlbumsService.prototype.getAlbums = function () {
                    return this.httpclient.get(this.url + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.map(function (album) { return new _Album__WEBPACK_IMPORTED_MODULE_2__["Album"](album.id, album.auteur, album.nom, album.note); }); }));
                };
                AlbumsService.prototype.getAlbum = function (id) {
                    return this.httpclient.get(this.url + '/' + id); //GET localhost:4200/api/albums/id
                };
                AlbumsService.prototype.saveAlbum = function (album) {
                    console.log('save du service de', album);
                    return this.httpclient.post(this.url + '/new', album); //POST localhost:4200/api/albums
                };
                return AlbumsService;
            }());
            AlbumsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            AlbumsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AlbumsService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _album_pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album/pages/album-liste/album-liste.component */ "./src/app/album/pages/album-liste/album-liste.component.ts");
            /* harmony import */ var _album_components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/components/album-details/album-details.component */ "./src/app/album/components/album-details/album-details.component.ts");
            /* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
            /* harmony import */ var _erreur_erreur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./erreur/erreur.component */ "./src/app/erreur/erreur.component.ts");
            /* harmony import */ var _album_pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album/pages/new-album/new-album.component */ "./src/app/album/pages/new-album/new-album.component.ts");
            var routes = [
                {
                    path: 'album', component: _album_pages_album_liste_album_liste_component__WEBPACK_IMPORTED_MODULE_3__["AlbumListeComponent"]
                },
                {
                    path: 'album-details/:id', component: _album_components_album_details_album_details_component__WEBPACK_IMPORTED_MODULE_4__["AlbumDetailsComponent"]
                },
                {
                    path: 'notlogged', component: _erreur_erreur_component__WEBPACK_IMPORTED_MODULE_6__["ErreurComponent"]
                },
                {
                    path: 'new-album', component: _album_pages_new_album_new_album_component__WEBPACK_IMPORTED_MODULE_7__["NewAlbumComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
                },
                {
                    path: '**', redirectTo: 'album'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".highlight{\r\ncolor:deepskyblue !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw0QkFBNEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHR7XHJcbmNvbG9yOmRlZXBza3libHVlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                    this.title = 'app2';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.isAuth = this.authService.isLoggedIn();
                };
                AppComponent.prototype.onLogIn = function () {
                    this.authService.logIn();
                    this.isAuth = this.authService.isLoggedIn();
                };
                AppComponent.prototype.onLogOut = function () {
                    this.authService.logOut();
                    this.isAuth = this.authService.isLoggedIn();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _utilisateur_utilisateur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilisateur/utilisateur.component */ "./src/app/utilisateur/utilisateur.component.ts");
            /* harmony import */ var _erreur_erreur_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erreur/erreur.component */ "./src/app/erreur/erreur.component.ts");
            /* harmony import */ var _album_album_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./album/album.module */ "./src/app/album/album.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _utilisateur_utilisateur_component__WEBPACK_IMPORTED_MODULE_6__["UtilisateurComponent"],
                        _erreur_erreur_component__WEBPACK_IMPORTED_MODULE_7__["ErreurComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _album_album_module__WEBPACK_IMPORTED_MODULE_8__["AlbumModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth-guard.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/auth-guard.service.ts ***!
          \***************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuardService.prototype.canActivate = function (route, state) {
                    if (!this.authService.isLoggedIn()) {
                        this.router.navigate(['/notlogged']);
                    }
                    return this.authService.isLoggedIn();
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(router) {
                    this.router = router;
                    this.isAuth = false;
                }
                AuthService.prototype.isLoggedIn = function () {
                    return this.isAuth;
                };
                AuthService.prototype.logIn = function () {
                    this.isAuth = true;
                };
                AuthService.prototype.logOut = function () {
                    this.isAuth = false;
                    this.router.navigate(['/album']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/erreur/erreur.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/erreur/erreur.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VycmV1ci9lcnJldXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/erreur/erreur.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/erreur/erreur.component.ts ***!
          \********************************************/
        /*! exports provided: ErreurComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErreurComponent", function () { return ErreurComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErreurComponent = /** @class */ (function () {
                function ErreurComponent() {
                }
                ErreurComponent.prototype.ngOnInit = function () {
                };
                return ErreurComponent;
            }());
            ErreurComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-erreur',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./erreur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/erreur/erreur.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./erreur.component.css */ "./src/app/erreur/erreur.component.css")).default]
                })
            ], ErreurComponent);
            /***/ 
        }),
        /***/ "./src/app/logger.service.ts": 
        /*!***********************************!*\
          !*** ./src/app/logger.service.ts ***!
          \***********************************/
        /*! exports provided: LoggerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function () { return LoggerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoggerService = /** @class */ (function () {
                function LoggerService() {
                }
                LoggerService.prototype.logDebug = function (log) {
                    console.log(log);
                };
                LoggerService.prototype.logError = function (log) {
                    console.error(log);
                };
                return LoggerService;
            }());
            LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoggerService);
            /***/ 
        }),
        /***/ "./src/app/shared/Utilisateur.ts": 
        /*!***************************************!*\
          !*** ./src/app/shared/Utilisateur.ts ***!
          \***************************************/
        /*! exports provided: Utilisateur */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilisateur", function () { return Utilisateur; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Utilisateur = /** @class */ (function () {
                function Utilisateur(args) {
                    if (args === void 0) { args = {}; }
                    this.nom = args.nom;
                    this.prenom = args.prenom;
                    this.lastLogin = new Date();
                }
                return Utilisateur;
            }());
            /***/ 
        }),
        /***/ "./src/app/utilisateur/utilisateur.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/utilisateur/utilisateur.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpc2F0ZXVyL3V0aWxpc2F0ZXVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/utilisateur/utilisateur.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/utilisateur/utilisateur.component.ts ***!
          \******************************************************/
        /*! exports provided: UtilisateurComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurComponent", function () { return UtilisateurComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_Utilisateur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Utilisateur */ "./src/app/shared/Utilisateur.ts");
            var UtilisateurComponent = /** @class */ (function () {
                function UtilisateurComponent() {
                }
                UtilisateurComponent.prototype.ngOnInit = function () {
                    this.user = new _shared_Utilisateur__WEBPACK_IMPORTED_MODULE_2__["Utilisateur"]();
                    this.user.nom = "Kucuk";
                    this.user.prenom = "Denis";
                };
                return UtilisateurComponent;
            }());
            UtilisateurComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-utilisateur',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./utilisateur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utilisateur/utilisateur.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./utilisateur.component.css */ "./src/app/utilisateur/utilisateur.component.css")).default]
                })
            ], UtilisateurComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Adminl\Documents\jc\app2\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map