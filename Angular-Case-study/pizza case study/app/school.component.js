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
    var SchoolComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SchoolComponent = (function () {
                function SchoolComponent() {
                    this.details = [{ pizzaId: "12357", pizzaname: "VEGGIE CHEESE", price: "230" }, { pizzaId: "12457", pizzaname: "EXORTICA LARGE", price: "260" }];
                    this.showTotal = false;
                    this.sTotal = false;
                    this.imageLink = "app/aa.jpg";
                    this.imageLink1 = "app/bb.jpg";
                }
                SchoolComponent.prototype.abd = function () {
                    alert('Veg pizza with ID 12357 is added to cart');
                    this.showTotal = true;
                };
                SchoolComponent.prototype.abc = function () {
                    alert('Veg pizza with ID 12457 is added to cart');
                    this.sTotal = true;
                };
                SchoolComponent = __decorate([
                    core_1.Component({
                        template: "\n\t<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\t   <center>\n\t   <h1>{{details[0].pizzaname}}</h1>\n            <img bind-src=\"imageLink\" height=\"450\" width=\"750\" />\n            <h3>pizzaID:{{details[0].pizzaId}}</h3>\n            \n\t\t\t\n\t\t\t\n\t\t\t<button class=\"btn btn-primary\" (click)=\"abd()\">\n\t\t\tAdd to Cart\n\t\t\t</button>\n\t\t\t<div *ngIf=\"showTotal == true\"> \n\t\t\t<h3> Order details:</h3>\n\t\t\t<h3>{{details[0].pizzaname}} pizza</h3>\n\t\t\t<h3>{{details[0].price}} Rupees </h3>\n\n\t\t\t</div>\n\t\t\t<a [routerLink]=\"['TOP']\">\n\t\t\t<button class=\"btn btn-primary\"  >\n\t\t\tproceed\n\t\t\t</button>\n\t\t\t</a>\n\t\t\t\n\t\t\t</center>\n\t\t\t </div>\n\t\t\t \n\t\t\t <div class=\"col-lg-12\">\n           <center>  \n        <h1>{{details[1].pizzaname}}</h1>\n        <img bind-src=\"imageLink1\" height=\"450\" width=\"750\" />\n            <h3>pizzaID:{{details[1].pizzaId}}</h3>\n            \n\t\t\t\n\t\t\n\t\t\t<button class=\"btn btn-primary\" (click)=\"abc()\">\n\t\t\tAdd to Cart\n\t\t\t</button>\n\t\t\t\n\t\t\t<div *ngIf=\"sTotal == true\"> \n\t\t\t<h3> Order details:</h3>\n\t\t\t<h3>{{details[1].pizzaname}} pizza</h3>\n\t\t\t<h3>{{details[1].price}} Rupees </h3>\n\n\t\t\t</div>\n\t\t\t<a [routerLink]=\"['TOP']\">\n\t\t\t<button class=\"btn btn-primary\" >\n\t\t\tproceed\n\t\t\t</button>\n\t\t\t</a>\n\t\t\t\n\n\n\t\t\t\n\t\t\t</center>\n        \n        </div>\n    </div>\n            <br/><br/>\n    \n</div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SchoolComponent);
                return SchoolComponent;
            }());
            exports_1("SchoolComponent", SchoolComponent);
        }
    }
});
//# sourceMappingURL=school.component.js.map