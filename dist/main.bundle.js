webpackJsonp([1,4],{

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(403);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Character */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Character = (function () {
    function Character() {
    }
    return Character;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.characters = CHARACTERS;
    }
    AppComponent.prototype.showCharacter = function (item) {
        this.currentCharacter = item;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__(461),
            styles: [__webpack_require__(457)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var CHARACTERS = [
    {
        "name": "Crash Bandicoot",
        "firstApp": "1996",
        "franchise": "Crash Bandicoot",
        "shortname": "crash",
        "allies": "Tawna Bandicoot",
        "bio": "Anthropomorphic bandicoot whose quiet life on Wumpa Island is often interrupted by Doctor Neo Cortex, who created Crash and now wants him dead. In most games, Crash must defeat Cortex and foil his plans for world domination."
    }, {
        "name": "Lara Croft",
        "firstApp": "1996",
        "franchise": "Tomb Raider",
        "shortname": "laracroft",
        "allies": "Winston Smith and Kurtis Trent",
        "bio": "Beautiful, intelligent, and athlethic English archaeologist-adventurer who ventures into ancient, hazardous tombs and ruins around the world. Fluent in many languages and fighting styles, she's one female not to be taken lightly."
    }, {
        "name": "Kratos",
        "firstApp": "2005",
        "franchise": "God of War",
        "shortname": "kratos",
        "allies": "Athena and Gaia",
        "bio": "Spartan warrior who embarks on a series of adventures in attempts to avert disaster or to change his fate. Storylines loosely based on Greek Mythology. Vengence is usually a central theme, which is questionable behavior for a supposed protagonist."
    }, {
        "name": "Mario",
        "firstApp": "1981",
        "franchise": "Super Mario",
        "shortname": "mario",
        "allies": "Luigi and Yoshi",
        "bio": "Short, pudgy plumber who lives in Mushroom Kingdom. His adventures generally center upon rescuing Princess Peach from Koopa villain Bowser. Has commonly been mistaken in pop culture for breaking bricks with head, when in fact, he punches through them. "
    }, {
        "name": "Pac-Man",
        "firstApp": "1980",
        "franchise": "PAC-MAN",
        "shortname": "pacman",
        "allies": "Mrs. Pacman",
        "bio": "Spherical character who players control through a maze, in which the objective is to eat pac-dots. He must also avoid touching his four enemies, named Blinky, Pinky, Inky, and Clyde. Power pellets give him the ability to eat his enemies. "
    }, {
        "name": "Master Chief",
        "firstApp": "2001",
        "franchise": "Halo",
        "shortname": "masterchief",
        "allies": "Cortana and comrades",
        "bio": "A towering and faceless biochemically and cybernetically-enhanced supersoldier, who was raised and trained from an early age to be a weapon. He is almost never seen without his green-colored armor and helmet. He is commonly referred to by his naval rank, 'Chief', rather than his given birth-name or serial-designation. "
    }, {
        "name": "Fox McCloud",
        "firstApp": "1993",
        "franchise": "Star Fox",
        "shortname": "starfox",
        "allies": "Falco Lombardi, Peppy Hare and Slippy Toad",
        "bio": " Part of an elite mercenary Star Fox team to defeat Andross, a scientist, who has fled to Planet Venom after being banished from Planet Corneria. Star Fox uses a prototype high-performance fighter aircraft called 'star fox voyager'. Game differs from most shooter games, as it is a rail shooter in a third-person and first-person 3D perspective."
    }, {
        "name": "Sonic the Hedgehog",
        "firstApp": "1991",
        "franchise": "Sonic the Hedgehog",
        "shortname": "sonic",
        "allies": "Tails, Knuckles, and Amy Rose",
        "bio": "Anthropomorphic blue hedgehog whose peaceful life is often interrupted by the series' main antagonist, Doctor Eggman. Typically, Sonic, and usually along with some of his friends, must stop Eggman and foil any plans of world domination. The games focused on Sonic's ability to run and jump at high speeds with the use of springs, checkpoints, and loops. "
    }, {
        "name": "Link",
        "firstApp": "1986",
        "franchise": "The Legend of Zelda",
        "shortname": "link",
        "allies": "Zelda and Navi",
        "bio": " Depicted as a child, teenager, or young adult of the Hylian race. Originates from the fictional land of Hyrule. Link often travels through Hyrule, defeating creatures, evil forces, and the series' primary antagonist, Ganon, while attempting to save Princess Zelda and Hyrule. To defeat Ganon, Link usually requires the mystic Master Sword, or a similar legendary weapon, obtained after many trials and battles."
    }
];
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_character_item__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_character_details__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_search__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__component_character_item__["a" /* CharacterItemComponent */], __WEBPACK_IMPORTED_MODULE_6__component_character_details__["a" /* CharacterDetailsComponent */], __WEBPACK_IMPORTED_MODULE_7__pipe_search__["a" /* SearchPipe */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterDetailsComponent = (function () {
    function CharacterDetailsComponent() {
    }
    CharacterDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'character-details',
            template: __webpack_require__(462),
            styles: [__webpack_require__(458)],
            inputs: ['character']
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterDetailsComponent);
    return CharacterDetailsComponent;
}());
//# sourceMappingURL=component.character-details.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterItemComponent = (function () {
    function CharacterItemComponent() {
    }
    CharacterItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'character-item',
            template: __webpack_require__(463),
            styles: [__webpack_require__(459)],
            inputs: ['character']
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterItemComponent);
    return CharacterItemComponent;
}());
//# sourceMappingURL=component.character-item.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (pipeData, pipeModifier) {
        return pipeData.filter(function (eachItem) {
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['shortname'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */])({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=pipe.search.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, "\n/* -------------- */\n/* app.css Styles */\n/* -------------- */\n\n.search {\n  width: 100%;\n  font-weight: 300;\n  min-width: 320px;\n  max-width: 500px;\n  margin: 0 auto;\n  margin-top: 30px;\n  padding: 20px 30px;\n  z-index: 20;\n  background-color: #1639dc;\n}\n\n.search .search-headline {\n  margin-bottom: 10px;\n  text-align: center;\n  text-align: -webkit-center;\n  font-family: 'Press Start 2P', cursive;\n}\n\n.search .search-label {\n    font-weight: 400;\n    font-size: 1rem;\n    text-align: left;\n    font-family: inherit;\n    border: 3px solid black;\n    background-color: black;\n    color: white;\n    font-family: monospace;\n}\n\n.search .search-input {\n  width: 95%;\n  display: inline-block;\n  font-weight: 100;\n  padding: 15px;\n  margin: 5px 0;\n  font-size: 1.3rem;\n  color: #475B62;\n  border: 1px solid #C5C5C5;\n  border-radius: 4px;\n  outline: 0;\n  font-family: -webkit-pictograph;\n}\n\n/* ------------------ */\n/* Artist List Styles */\n/* ------------------ */\n\n.characterlist {\n  position: absolute;\n  width: 100%;\n  min-width:320px;\n  max-width: 400px;\n  left: 0;\n  right: 0;\n  margin-bottom: 30px;\n  background: white;\n  box-shadow: 0 1px 0 rgba(0,0,0,.25);\n  z-index: 10;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.characterlist-item {\n  padding: 10px 10px 0 10px;\n  border-bottom: 1px solid #999;\n  opacity: .9;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  display: -webkit-box;\n  text-align: -webkit-center;\n}\n\n.characterlist-item:hover {\n  cursor: pointer;\n  background: #FDF6E3;\n  opacity: 1;\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n.characterlist-item:last-child  {\n    border-bottom:none;\n}\n\nul.characterlist.cf {\n    list-style-type: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, ".character-details {\n  position: absolute;\n  background: white;\n  width: 100%;\n  max-width: 850px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  padding: 30px 40px;\n  position: relative;\n  opacity: 1;\n  border: 1px solid #e8e8e8;\n  box-shadow: 0 1px 0 rgba(0,0,0,.25);\n}\n\n.character-details .character-name{\n  font-size: 3em;\n  margin-bottom: 3px;\n  text-align: center;\n  font-variant: small-caps;\n  font-family: monospace;\n  text-decoration: underline;\n}\n\n.character-details .character-shortname {\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin-bottom: 20px;\n}\n\n\n.character-details .character-img {\n  width: 40%;\n  max-width: 130px;\n  float: left;\n  margin-right: 20px;\n  border-radius: 10px;\n}\n\n.character-details .character-longbio {\n  font-size: 1rem;\n  line-height: 160%;\n  width: 80%;\n  font-family: sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, "/* ---------------------- */\n/* character-item.css Styles */\n/* ---------------------- */\n\n.character-img {\n  width: 60px;\n  border-radius: 12px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  float: left;\n}\n\n.character-info {\n  display: block;\n  margin: 5px 0;\n}\n\n.character-info .character-name {\n  font-size: 1.4rem; \n  margin-top: 10px;\n  display: inline-block;\n  display: webkit-inline-block;\n  text-align: center;\n}\n\n.character-info .character-shortname {\n  font-size: 1.1rem;\n  font-weight: 400;\n  margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"card search\">\n  <h1 class=\"search-headline\">Video Game Character Directory</h1>\n  <label class=\"search-label\">search\n    <span *ngIf=\"query\"\n      [innerHTML]=\"' for: ' + query\"></span></label>\n    <input class=\"search-input\"\n      [(ngModel)]=\"query\" placeholder=\"type in search term here\">\n</div><!-- card search -->\n\n<ul class=\"characterlist cf\"\n  *ngIf=\"query\">\n  <li class=\"characterlist-item cf\"\n    (click)=\"showCharacter(item); query=''\"\n    *ngFor=\"let item of (characters | search: query)\">\n    <character-item class=\"content\" [character]=item></character-item>\n  </li>\n</ul>\n\n<character-details \n  *ngIf=\"currentCharacter\"\n  [character]=\"currentCharacter\"></character-details>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<section class=\"card character-details\">\n    <h1 class=\"character-name\">{{character.name}}</h1>\n    <div class=\"info\">\n      <h3 class=\"character-firstapp\">First Appearance: {{ character.firstApp}}</h3>\n      <h3 class=\"character-firstApp\"> Franchise: {{ character.franchise }}</h3>\n      <img class=\"character-img\" src=\"src/images/{{character.shortname}}_tn.jpg\" alt=\"{{character.name}}\">\n      <div class=\"character-longbio\">{{character.bio}}</div>\n    </div><!--info-->\n</section><!--characterdetails-->"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<img class=\"character-img\" \n  src=\"src/images/{{character.shortname}}_tn.jpg\"\n  alt=\"{{character.name}} photo\">\n<div class=\"character-info\">\n  <h2 class=\"character-name\">{{ character.name }}</h2>\n\n</div>"

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[476]);
//# sourceMappingURL=main.bundle.js.map