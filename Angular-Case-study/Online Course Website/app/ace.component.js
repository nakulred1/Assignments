System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AceComponent = (function () {
                function AceComponent() {
                    this.total = 30000;
                    this.showTotal = false;
                }
                AceComponent.prototype.onSelect = function () {
                    this.showTotal = true;
                };
                AceComponent.prototype.abc = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 200;
                    }
                    else {
                        this.total = this.total - 200;
                    }
                };
                AceComponent.prototype.pqr = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 400;
                    }
                    else {
                        this.total = this.total - 400;
                    }
                };
                AceComponent.prototype.nmo = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 200;
                    }
                    else {
                        this.total = this.total - 200;
                    }
                };
                AceComponent = __decorate([
                    core_1.Component({
                        template: "\n        <style>\n        .carousel-inner > .item > img,\n        .carousel-inner > .item > a > img {\n            width:   658px;\n            height:  219px;   \n            margin: auto;\n        }\n        </style>\n        <br/>\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        \n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        </ol>\n    \n       \n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"item active\">\n            <img src=\"https://www.acefitness.org/images/layout/2013/hex-header-CertExam.jpg\" alt=\"Image\">\n            <div class=\"carousel-caption\">\n            </div>      \n          </div>\n    \n          <div class=\"item\">\n            <img src=\"https://acewebcontent.azureedge.net/marquees/core/2013/Renewal-Header.jpg\" alt=\"Image\">\n            <div class=\"carousel-caption\">\n            </div>      \n          </div>\n        </div>\n    \n       \n        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n    <div class=\"container\">\n    <h2>ACE CERTIFICATION</h2>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"col-md-12\">\n          <div class=\"col-md-6\">\n              <h5><span class=\"glyphicon glyphicon-ok green\"></span> Beginners - You are able to learn new striking techniques and prepare your body to be ready for more advanced martial arts practice</h5>\n              <h5><span class=\"glyphicon glyphicon-ok green\"></span> Develop and improve martial arts skills, stamina and flexibility</h5>\n          </div>\n          <div class=\"col-md-6\">\n          <h5><span class=\"glyphicon glyphicon-ok green\"></span> Current Martial Artists - These daily routines will help maintain and improve your existing martial arts skills</h5>\n          <h5><span class=\"glyphicon glyphicon-ok green\"></span> Learn New Techniques - These routines include martial arts techniques from kickboxing, karate, kung fu, muay thai and more!</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\">\n            <h3> Course Duration: 6 Months</h3>\n            <h3 value=\"30000\"> Cost: 30000/- </h3>\n            <h3> Rating <span class=\"glyphicon glyphicon-star green\"></span><span class=\"glyphicon glyphicon-star green\"></span></h3>\n        </div>\n        <div class=\"col-md-6\">\n        <h3><span class=\"glyphicon glyphicon-ok green\"></span> Certificate</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n  <h3>Extra Facilities</h3>\n  <form>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" value=\"200\" id=\"live\" #live (change)=\"nmo($event)\">Live sessions(200/-)</label>\n    </div>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" value=\"400\" id=\"study\" #study (change)=\"pqr($event)\">Study Material(CD+BOOK)(400/-)</label>\n    </div>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" id=\"digital\" #digital (change)=\"abc($event)\">Digital Certificate(200/-)</label>\n    </div>\n    <center><button type=\"button\" (click)=\"onSelect()\" class=\"btn btn-success btn-lg\">Enroll Me!</button>\n    <a [routerLink]=\"['DEVELOPER']\"><button type=\"button\" class=\"btn btn-danger btn-lg\">Go Back</button></a></center>\n  </form>\n  <div *ngIf=\"showTotal == true\"> \n  <h3>Thank you for registering. Your course fees is {{total}}/-</h3>\n  </div>\n</div>\n</div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AceComponent);
                return AceComponent;
            }());
            exports_1("AceComponent", AceComponent);
        }
    }
});
//# sourceMappingURL=ace.component.js.map