webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ACCOUNT</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create/create.module": [
		273,
		1
	],
	"../pages/profile/profile.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__create_create__["a" /* CreatePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="md-add-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="md-contact"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      INFO\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.numbero = [1, 2, 3, 4];
        this.voteCasted = false;
        this.no = 'No';
        this.doughnutChartLabels = ['Yes', 'No', 'Maybe'];
        this.doughnutChartData = [4, 10, 1];
        this.doughnutChartType = 'doughnut';
    }
    HomePage.prototype.showContent = function (el, smel) {
        console.log(el.style.visibility);
        if (el.style.opacity == "1") {
            el.style.opacity = '0';
            this.renderer.removeClass(smel, 'cardAllActive');
            this.renderer.addClass(smel, 'cardAllPassive');
            this.renderer.removeClass(el, 'cardContentActive');
            this.renderer.addClass(el, 'cardContentPassive');
        }
        else {
            el.style.opacity = '1';
            this.renderer.removeClass(smel, 'cardAllPassive');
            this.renderer.addClass(smel, 'cardAllActive');
            this.renderer.removeClass(el, 'cardContentPassive');
            this.renderer.addClass(el, 'cardContentActive');
        }
    };
    HomePage.prototype.logAll = function () {
        console.log(this.answer);
        this.voteCasted = true;
    };
    // events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('entireCard'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], HomePage.prototype, "el1", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>HOME</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-color: #f5f6fa;">\n\n<ion-card *ngFor="let nr of numbero" #entireCard class="cardContent cardAllPassive">\n\n\n\n  <ion-card-header style="cursor:pointer; text-align: center;" (click)="showContent(contentBox, entireCard)">\n\n    Sollte ich raus gehen?\n\n  </ion-card-header>\n\n\n\n  <ion-card-content class="cardContent cardContentPassive" style="opacity: 0;" #contentBox>\n\n    <div class="answersContainer">\n\n      <div class="chartContainer" style="display: block" *ngIf="voteCasted">\n\n        <canvas baseChart\n\n                [data]="doughnutChartData"\n\n                [labels]="doughnutChartLabels"\n\n                [chartType]="doughnutChartType"\n\n                (chartHover)="chartHovered($event)"\n\n                (chartClick)="chartClicked($event)">\n\n        </canvas>\n\n      </div>\n\n      <div class="voteContainer" *ngIf="!voteCasted">\n\n        <ion-list class="answerList" radio-group #formAnswer [(ngModel)]="answer">\n\n          <ion-item>\n\n            <ion-label>Yes</ion-label>\n\n            <ion-radio checked="true" value="go"></ion-radio>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>No</ion-label>\n\n            <ion-radio value="{{no}}"></ion-radio>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label>Maybe</ion-label>\n\n            <ion-radio value="python"></ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button class="abstimmenButton" ion-button color="light" outline (click)="logAll()">Abstimmen</button>\n\n      </div>\n\n    </div>\n\n  </ion-card-content>\n\n<div style="width:100%; height:30px; background-color: #c7ecee; display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 0 10px 0 10px;">\n\n  <div>\n\n    <ion-icon name="ios-checkbox-outline" style="color: gray;"></ion-icon>\n\n  </div>\n\n  <div>\n\n\n\n    0<ion-icon name="chatboxes" style="color: gray;"></ion-icon>\n\n  </div>\n\n</div>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_create__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 289,
	"./af.js": 289,
	"./ar": 290,
	"./ar-dz": 291,
	"./ar-dz.js": 291,
	"./ar-kw": 292,
	"./ar-kw.js": 292,
	"./ar-ly": 293,
	"./ar-ly.js": 293,
	"./ar-ma": 294,
	"./ar-ma.js": 294,
	"./ar-sa": 295,
	"./ar-sa.js": 295,
	"./ar-tn": 296,
	"./ar-tn.js": 296,
	"./ar.js": 290,
	"./az": 297,
	"./az.js": 297,
	"./be": 298,
	"./be.js": 298,
	"./bg": 299,
	"./bg.js": 299,
	"./bm": 300,
	"./bm.js": 300,
	"./bn": 301,
	"./bn.js": 301,
	"./bo": 302,
	"./bo.js": 302,
	"./br": 303,
	"./br.js": 303,
	"./bs": 304,
	"./bs.js": 304,
	"./ca": 305,
	"./ca.js": 305,
	"./cs": 306,
	"./cs.js": 306,
	"./cv": 307,
	"./cv.js": 307,
	"./cy": 308,
	"./cy.js": 308,
	"./da": 309,
	"./da.js": 309,
	"./de": 310,
	"./de-at": 311,
	"./de-at.js": 311,
	"./de-ch": 312,
	"./de-ch.js": 312,
	"./de.js": 310,
	"./dv": 313,
	"./dv.js": 313,
	"./el": 314,
	"./el.js": 314,
	"./en-au": 315,
	"./en-au.js": 315,
	"./en-ca": 316,
	"./en-ca.js": 316,
	"./en-gb": 317,
	"./en-gb.js": 317,
	"./en-ie": 318,
	"./en-ie.js": 318,
	"./en-il": 319,
	"./en-il.js": 319,
	"./en-nz": 320,
	"./en-nz.js": 320,
	"./eo": 321,
	"./eo.js": 321,
	"./es": 322,
	"./es-do": 323,
	"./es-do.js": 323,
	"./es-us": 324,
	"./es-us.js": 324,
	"./es.js": 322,
	"./et": 325,
	"./et.js": 325,
	"./eu": 326,
	"./eu.js": 326,
	"./fa": 327,
	"./fa.js": 327,
	"./fi": 328,
	"./fi.js": 328,
	"./fo": 329,
	"./fo.js": 329,
	"./fr": 330,
	"./fr-ca": 331,
	"./fr-ca.js": 331,
	"./fr-ch": 332,
	"./fr-ch.js": 332,
	"./fr.js": 330,
	"./fy": 333,
	"./fy.js": 333,
	"./gd": 334,
	"./gd.js": 334,
	"./gl": 335,
	"./gl.js": 335,
	"./gom-latn": 336,
	"./gom-latn.js": 336,
	"./gu": 337,
	"./gu.js": 337,
	"./he": 338,
	"./he.js": 338,
	"./hi": 339,
	"./hi.js": 339,
	"./hr": 340,
	"./hr.js": 340,
	"./hu": 341,
	"./hu.js": 341,
	"./hy-am": 342,
	"./hy-am.js": 342,
	"./id": 343,
	"./id.js": 343,
	"./is": 344,
	"./is.js": 344,
	"./it": 345,
	"./it.js": 345,
	"./ja": 346,
	"./ja.js": 346,
	"./jv": 347,
	"./jv.js": 347,
	"./ka": 348,
	"./ka.js": 348,
	"./kk": 349,
	"./kk.js": 349,
	"./km": 350,
	"./km.js": 350,
	"./kn": 351,
	"./kn.js": 351,
	"./ko": 352,
	"./ko.js": 352,
	"./ky": 353,
	"./ky.js": 353,
	"./lb": 354,
	"./lb.js": 354,
	"./lo": 355,
	"./lo.js": 355,
	"./lt": 356,
	"./lt.js": 356,
	"./lv": 357,
	"./lv.js": 357,
	"./me": 358,
	"./me.js": 358,
	"./mi": 359,
	"./mi.js": 359,
	"./mk": 360,
	"./mk.js": 360,
	"./ml": 361,
	"./ml.js": 361,
	"./mn": 362,
	"./mn.js": 362,
	"./mr": 363,
	"./mr.js": 363,
	"./ms": 364,
	"./ms-my": 365,
	"./ms-my.js": 365,
	"./ms.js": 364,
	"./mt": 366,
	"./mt.js": 366,
	"./my": 367,
	"./my.js": 367,
	"./nb": 368,
	"./nb.js": 368,
	"./ne": 369,
	"./ne.js": 369,
	"./nl": 370,
	"./nl-be": 371,
	"./nl-be.js": 371,
	"./nl.js": 370,
	"./nn": 372,
	"./nn.js": 372,
	"./pa-in": 373,
	"./pa-in.js": 373,
	"./pl": 374,
	"./pl.js": 374,
	"./pt": 375,
	"./pt-br": 376,
	"./pt-br.js": 376,
	"./pt.js": 375,
	"./ro": 377,
	"./ro.js": 377,
	"./ru": 378,
	"./ru.js": 378,
	"./sd": 379,
	"./sd.js": 379,
	"./se": 380,
	"./se.js": 380,
	"./si": 381,
	"./si.js": 381,
	"./sk": 382,
	"./sk.js": 382,
	"./sl": 383,
	"./sl.js": 383,
	"./sq": 384,
	"./sq.js": 384,
	"./sr": 385,
	"./sr-cyrl": 386,
	"./sr-cyrl.js": 386,
	"./sr.js": 385,
	"./ss": 387,
	"./ss.js": 387,
	"./sv": 388,
	"./sv.js": 388,
	"./sw": 389,
	"./sw.js": 389,
	"./ta": 390,
	"./ta.js": 390,
	"./te": 391,
	"./te.js": 391,
	"./tet": 392,
	"./tet.js": 392,
	"./tg": 393,
	"./tg.js": 393,
	"./th": 394,
	"./th.js": 394,
	"./tl-ph": 395,
	"./tl-ph.js": 395,
	"./tlh": 396,
	"./tlh.js": 396,
	"./tr": 397,
	"./tr.js": 397,
	"./tzl": 398,
	"./tzl.js": 398,
	"./tzm": 399,
	"./tzm-latn": 400,
	"./tzm-latn.js": 400,
	"./tzm.js": 399,
	"./ug-cn": 401,
	"./ug-cn.js": 401,
	"./uk": 402,
	"./uk.js": 402,
	"./ur": 403,
	"./ur.js": 403,
	"./uz": 404,
	"./uz-latn": 405,
	"./uz-latn.js": 405,
	"./uz.js": 404,
	"./vi": 406,
	"./vi.js": 406,
	"./x-pseudo": 407,
	"./x-pseudo.js": 407,
	"./yo": 408,
	"./yo.js": 408,
	"./zh-cn": 409,
	"./zh-cn.js": 409,
	"./zh-hk": 410,
	"./zh-hk.js": 410,
	"./zh-tw": 411,
	"./zh-tw.js": 411
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 442;

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreatePage = /** @class */ (function () {
    function CreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.numbers = [1];
    }
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    CreatePage.prototype.addInput = function () {
        var nr = this.numbers.length + 1;
        if (nr < 5) {
            this.numbers.push(nr);
        }
        else {
            alert('Antwortenlimit erreicht!');
        }
    };
    CreatePage.prototype.removeInput = function () {
        this.numbers.splice(-1, 1);
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create',template:/*ion-inline-start:"C:\Users\favorite\Desktop\voty\voty\src\pages\create\create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>VOTE ERSTELLEN</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: #f5f6fa;">\n\n  <div class="pageContent">\n\n    <h3>Frage</h3>\n\n    <ion-item>\n\n      <ion-label floating>Frage</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <div class="headerContainer">\n\n      <h3>Antwortmöglichkeiten</h3>\n\n      <ion-icon *ngIf="numbers.length>1" style="width:25px; height:25px; font-size:25px;" name="ios-remove-circle-outline" (click)="removeInput()"></ion-icon> \n\n      <ion-icon style="width:25px; height:25px; font-size:25px;" name="ios-add-circle-outline" (click)="addInput()"></ion-icon>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item *ngFor="let nr of numbers">\n\n        <ion-label floating>Antwortmöglichkeit</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button class="abstimmenButton" ion-button color="light" outline (click)="logAll()">Posten</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\favorite\Desktop\voty\voty\src\pages\create\create.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], CreatePage);
    return CreatePage;
    var _a, _b;
}());

//# sourceMappingURL=create.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map