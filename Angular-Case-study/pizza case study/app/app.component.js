System.register(['angular2/core', 'angular2/router', './home.component', './school.component', './student.component', './topveg', './app.buy', './app.cart'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, school_component_1, student_component_1, topveg_1, app_buy_1, app_cart_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (school_component_1_1) {
                school_component_1 = school_component_1_1;
            },
            function (student_component_1_1) {
                student_component_1 = student_component_1_1;
            },
            function (topveg_1_1) {
                topveg_1 = topveg_1_1;
            },
            function (app_buy_1_1) {
                app_buy_1 = app_buy_1_1;
            },
            function (app_cart_1_1) {
                app_cart_1 = app_cart_1_1;
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
                        { path: '/home', name: 'HOME', component: home_component_1.HomeComponent },
                        { path: '/school', name: 'SCHOOL', component: school_component_1.SchoolComponent },
                        { path: '/student', name: 'STUDENT', component: student_component_1.StudentComponent },
                        { path: '/toppings', name: 'TOP', component: topveg_1.toppings },
                        { path: '/buy', name: 'BUY', component: app_buy_1.buy },
                        //  {path:'/thanks', name: 'THANKS', component: thanks }
                        { path: '/cart', name: 'CART', component: app_cart_1.cart }
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