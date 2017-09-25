System.register(['angular2/core', 'angular2/router', "./dev.component", './fit.component', './des.component', './java.component', './boot.component', './angular.component', './photo.component', './after.component', './cad.component', './ace.component', './nasm.component', './cross.component', './thanks.component'], function(exports_1, context_1) {
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
    var core_1, router_1, dev_component_1, fit_component_1, des_component_1, java_component_1, boot_component_1, angular_component_1, photo_component_1, after_component_1, cad_component_1, ace_component_1, nasm_component_1, cross_component_1, thanks_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dev_component_1_1) {
                dev_component_1 = dev_component_1_1;
            },
            function (fit_component_1_1) {
                fit_component_1 = fit_component_1_1;
            },
            function (des_component_1_1) {
                des_component_1 = des_component_1_1;
            },
            function (java_component_1_1) {
                java_component_1 = java_component_1_1;
            },
            function (boot_component_1_1) {
                boot_component_1 = boot_component_1_1;
            },
            function (angular_component_1_1) {
                angular_component_1 = angular_component_1_1;
            },
            function (photo_component_1_1) {
                photo_component_1 = photo_component_1_1;
            },
            function (after_component_1_1) {
                after_component_1 = after_component_1_1;
            },
            function (cad_component_1_1) {
                cad_component_1 = cad_component_1_1;
            },
            function (ace_component_1_1) {
                ace_component_1 = ace_component_1_1;
            },
            function (nasm_component_1_1) {
                nasm_component_1 = nasm_component_1_1;
            },
            function (cross_component_1_1) {
                cross_component_1 = cross_component_1_1;
            },
            function (thanks_component_1_1) {
                thanks_component_1 = thanks_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'routing-example',
                        templateUrl: 'app/app.component.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/dev', name: 'DEVELOPER', component: dev_component_1.DevComponent },
                        { path: '/des', name: 'DESIGNER', component: des_component_1.DesComponent },
                        { path: '/fit', name: 'FITNESS', component: fit_component_1.FitComponent },
                        { path: '/java', name: 'JAVA', component: java_component_1.JavaComponent },
                        { path: '/bootstrap', name: 'BOOTSTRAP', component: boot_component_1.BootComponent },
                        { path: '/angular', name: 'ANGULAR', component: angular_component_1.AngularComponent },
                        { path: '/photoshop', name: 'PHOTOSHOP', component: photo_component_1.PhotoComponent },
                        { path: '/aftereffects', name: 'AFTEREFFECTS', component: after_component_1.AfterComponent },
                        { path: '/cad', name: 'CAD', component: cad_component_1.CadComponent },
                        { path: '/ace', name: 'ACE', component: ace_component_1.AceComponent },
                        { path: '/nasm', name: 'NASM', component: nasm_component_1.NasmComponent },
                        { path: '/crossfit', name: 'CROSSFIT', component: cross_component_1.CrossComponent },
                        { path: '/thanks', name: 'THANKS', component: thanks_component_1.ThanksComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map