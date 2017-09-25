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
    var toppings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            toppings = (function () {
                function toppings() {
                    this.total = 0;
                    this.showTotal = false;
                }
                toppings.prototype.onSelect = function () {
                    this.showTotal = true;
                };
                toppings.prototype.nmo = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 30;
                    }
                    else {
                        this.total = this.total - 30;
                    }
                };
                toppings.prototype.abc = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 35;
                    }
                    else {
                        this.total = this.total - 35;
                    }
                };
                toppings.prototype.pqr = function (e) {
                    var isChecked = e.target.checked;
                    if (isChecked == true) {
                        this.total = this.total + 30;
                    }
                    else {
                        this.total = this.total - 30;
                    }
                };
                toppings = __decorate([
                    core_1.Component({
                        template: "<center>\n        <h1> TOPPINGS </h1>\n      <form>\n\t  \n        <input type=\"checkbox\" name=\"extra cheese\" value=\"30\" (change)=\"nmo($event)\"> Extra cheese=Rs.30 <br /> \n        <input type=\"checkbox\" name=\"paneer\" value=\"35\" (change)=\"abc($event)\"> Paneer=Rs.35 <br />\n        <input type=\"checkbox\" name=\"pa\" value=\"30\" (change)=\"pqr($event)\"> Capsicum=Rs.30<br/><br/>\n\t\t<a [routerLink]=\"['HOME']\">\n\t\t<button class=\"btn btn-warning\">\n        Back\n        </button>\n\t\t</a>\n        <a [routerLink]=\"['BUY']\">\n        <button class=\"btn btn-primary\">\n        Proceed\n        </button>\n\t\t</a>\n\t\t<button class=\"btn btn-danger\" (click)=\"onSelect()\">Add</button>\n\t\t<div *ngIf=\"showTotal == true\">\n\t\t<h1>Extra cost for toppings is {{total}} </h1>\n        </div>\n\t\t\n\t\t\n        </form> \n    </center>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], toppings);
                return toppings;
            }());
            exports_1("toppings", toppings);
        }
    }
});
//# sourceMappingURL=topveg.js.map