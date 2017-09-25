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
    var DevComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DevComponent = (function () {
                function DevComponent() {
                }
                DevComponent = __decorate([
                    core_1.Component({
                        template: "<center><h1 style = \"color:white\">DEVELOPER COURSES</h1></center>\n        <hr>\n        <div class=\"container\">                                         \n            <div class=\"col-md-12\">\n                <div class=\"col-md-4\">\n                <a [routerLink]=\"['JAVA']\">\n                    <img src=\"https://prismic-io.s3.amazonaws.com/avisi/ec8dd3ad84d3692bc0b6b02cbedadedb31ae8360_expertises-icon-java-500.png\" alt=\"java\" width=\"200px\" height=\"200px\">\n                    <br/>\n                    <h4>JAVA IN 1 MONTH</h4>\n                </a>    \n                </div>\n                \n                <div class=\"col-md-4\">\n                <a [routerLink]=\"['BOOTSTRAP']\">\n                    <img src=\"http://getbootstrap.com/assets/img/bootstrap-stack.png\" alt=\"bootstrap\" width=\"200px\" height=\"200px\"> \n                    <br/>\n                    <h4>BOOTSTRAP</h4>\n                </a>\n                </div>\n                <div class=\"col-md-4\">\n                <a [routerLink]=\"['ANGULAR']\">    \n                    <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png\" alt=\"angular\" width=\"200px\" height=\"200px\">\n                    <br/>\n                    <h4>ANGULARJS</h4>\n                </a>\n                </div>\n            </div>\n        </div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DevComponent);
                return DevComponent;
            }());
            exports_1("DevComponent", DevComponent);
        }
    }
});
//# sourceMappingURL=dev.component.js.map