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
    var buy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            buy = (function () {
                function buy() {
                    this.result = "";
                }
                buy.prototype.submitFunct = function (firstname, pin, address) {
                    if (pin === "560031" || pin === "560032") {
                        return (this.result = 'Your Name is:' + " " + firstname + " " + "and your PIN No. is" + " " + pin + " " + "Your address is:" + " " + address + "Thanks for ordering!!!" + "  " + "  " + "  " + "  " + "  " + "  " + "  " + "Your Pizza will be delivered to the specified location");
                    }
                    else {
                        this.result = "Invalid PIN";
                    }
                };
                buy = __decorate([
                    core_1.Component({
                        template: "<center><form name=\"myForm\"> <section class=\"half-page\">\n   <input class=\"form-control\" type=\"text\" #firstname placeholder=\"Enter Name\" required>\n  \n             <input class=\"form-control\"type=\"text\" #pin placeholder=\"Enter PIN\" required>\n           <textarea class=\"form-control\"  #address placeholder=\"Enter address\" required > </textarea>\n            <input class=\"form-control btn btn-primary\" type=\"submit\" (click)='submitFunct(firstname.value, pin.value,address.value);\n             firstname.value =\"\"; pin.value=\"\";address.value=\"\"; ' >\n            <br><br>\n\t\t\t\n           </section>\n            <section>\n            \n             <h2 class=\"well\">{{result}}</h2>\n\t\t\t </section>\n\t\t\t </form>\n\t\t\t </center>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n  section{\n    margin:10px\n  }\n  .half-page {\n     width:300px;\n     margin:10px;\n     \n  }\n  input[type=\"text\"]{\n      margin: 7px 0px;\n    \n  }\n  input[type=\"submit\"]{\n      margin: 10px 0px;\n    \n  }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], buy);
                return buy;
            }());
            exports_1("buy", buy);
        }
    }
});
//# sourceMappingURL=app.buy.js.map