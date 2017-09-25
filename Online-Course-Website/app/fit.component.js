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
    var FitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FitComponent = (function () {
                function FitComponent() {
                }
                FitComponent = __decorate([
                    core_1.Component({
                        template: "<center><h1 style = \"color:white\">FITNESS COURSES</h1></center>\n\t\t<hr>\n\t\t<div class=\"container\">                                         \n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<a [routerLink]=\"['ACE']\">\n\t\t\t\t\t<img src=\"http://drdhananjaymore.com/wp-content/uploads/2017/01/ACE-LOGO.jpg\" alt=\"ace\" width=\"200px\" height=\"200px\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<h4>ACE TRAINING</h4>\n\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<a [routerLink]=\"['NASM']\">\n\t\t\t\t\t<img src=\"https://impossiblept.com/resources/NASM_cert_logo.jpg\" alt=\"NASM\" width=\"200px\" height=\"200px\"> \n\t\t\t\t\t<br/>\n\t\t\t\t\t<h4>NASM CERTIFICATION COURSE</h4>\n\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<a [routerLink]=\"['CROSSFIT']\">\n\t\t\t\t\t<img src=\"https://sme-badges.crossfit.com/Badges/level-1.png\" alt=\"cross\" width=\"200px\" height=\"200px\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<h4>CROSSFIT LVL 1 CERTIFICATION COURSE</h4>\n\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FitComponent);
                return FitComponent;
            }());
            exports_1("FitComponent", FitComponent);
        }
    }
});
//# sourceMappingURL=fit.component.js.map