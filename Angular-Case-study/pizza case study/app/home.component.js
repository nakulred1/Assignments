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
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.imageLink = "https://dallasnews.imgix.net/EARNS_YUM_3713880.jpg";
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"container\">\n  <h1 align=\"center\">GOUD'S PIZZA SHOP</h1>  \n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n\t  \n        <img src=\"https://dallasnews.imgix.net/EARNS_YUM_3713880.jpg\" alt=\"try your pizza\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n\t  <a [routerLink]=\"['SCHOOL']\">\n        <img src=\"http://2.bp.blogspot.com/-YWTHZEIL2Iw/UO8N99oZwoI/AAAAAAAAOck/imE4-WtMfi4/s1600/Veggie+Pizza+1.jpg\" alt=\"veg\" style=\"width:100%;\">\n      </a></div>\n    \n      <div class=\"item\">\n\t  <a [routerLink]=\"['STUDENT']\">\n        <img src=\"https://s-media-cache-ak0.pinimg.com/originals/fb/73/74/fb737469973b5bc5b3382ad4d9dbeca2.jpg\" alt=\"nonveg\" style=\"width:100%;\">\n     </a> </div>\n\t  \n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map