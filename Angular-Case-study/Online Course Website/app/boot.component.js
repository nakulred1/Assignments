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
    var BootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BootComponent = (function () {
                function BootComponent() {
                    this.total = 500;
                    this.showTotal = false;
                }
                BootComponent.prototype.onSelect = function () {
                    this.showTotal = true;
                };
                BootComponent.prototype.abc = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 200;
                    }
                    else {
                        this.total = this.total - 200;
                    }
                };
                BootComponent.prototype.pqr = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 400;
                    }
                    else {
                        this.total = this.total - 400;
                    }
                };
                BootComponent.prototype.nmo = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 200;
                    }
                    else {
                        this.total = this.total - 200;
                    }
                };
                BootComponent = __decorate([
                    core_1.Component({
                        template: "<style>\n        .carousel-inner > .item > img,\n        .carousel-inner > .item > a > img {\n            width:   658px;\n            height:  219px;   \n            margin: auto;\n        }\n        </style>\n        <br/>\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        \n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        </ol>\n    \n       \n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"item active\">\n            <img src=\"http://getbootstrap.com/assets/brand/bootstrap-social.png\" alt=\"Image\">\n            <div class=\"carousel-caption\">\n            </div>      \n          </div>\n    \n          <div class=\"item\">\n            <img src=\"http://s3.amazonaws.com/selfteachme/wp-content/uploads/2016/11/28140941/Twitter-Bootstrap.png\" alt=\"Image\">\n            <div class=\"carousel-caption\">\n            </div>      \n          </div>\n        </div>\n    \n       \n        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n    <div class=\"container\">\n    <h2>BOOTSTRAP</h2>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"col-md-12\">\n          <div class=\"col-md-6\">\n              <h5><span class=\"glyphicon glyphicon-ok green\"></span> You will hand code and create a professional, clean & modern bootstrap responsive landing page</h5>\n              <h5><span class=\"glyphicon glyphicon-ok green\"></span> Learn skill & knowledge to start building your own pages, and templates</h5>\n          </div>\n          <div class=\"col-md-6\">\n          <h5><span class=\"glyphicon glyphicon-ok green\"></span> Project files to download and work with offline</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\">\n            <h3> Course Duration: 7 Days</h3>\n            <h3 value=\"500\"> Cost: 500/- </h3>\n            <h3>Rating <span class=\"glyphicon glyphicon-star green\"></span><span class=\"glyphicon glyphicon-star green\"></span><span class=\"glyphicon glyphicon-star green\"></span><span class=\"glyphicon glyphicon-star green\"></span><span class=\"glyphicon glyphicon-star green\"></span></h3>\n        </div>\n        <div class=\"col-md-6\">\n            <h3><span class=\"glyphicon glyphicon-remove red\"></span> Certificate</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n  <h3>Extra Facilities</h3>\n  <form>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" value=\"200\" id=\"live\" #live (change)=\"nmo($event)\">Live sessions(200/-)</label>\n    </div>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" value=\"400\" id=\"study\" #study (change)=\"pqr($event)\">Study Material(CD+BOOK)(400/-)</label>\n    </div>\n    <div class=\"checkbox\">\n    <label><input type=\"checkbox\" id=\"digital\" #digital (change)=\"abc($event)\">Digital Certificate(200/-)</label>\n    </div>\n    <center><button type=\"button\" (click)=\"onSelect()\" class=\"btn btn-success btn-lg\">Enroll Me!</button>\n    <a [routerLink]=\"['DEVELOPER']\"><button type=\"button\" class=\"btn btn-danger btn-lg\">Go Back</button></a></center>\n  </form>\n  <div *ngIf=\"showTotal == true\"> \n  <h3>Thank you for registering. Your course fees is {{total}}/-</h3>\n  </div>\n</div>\n</div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootComponent);
                return BootComponent;
            }());
            exports_1("BootComponent", BootComponent);
        }
    }
});
//# sourceMappingURL=boot.component.js.map