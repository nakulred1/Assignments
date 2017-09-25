import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
        template: `<center><h1 style = "color:white">DEVELOPER COURSES</h1></center>
        <hr>
        <div class="container">                                         
            <div class="col-md-12">
                <div class="col-md-4">
                <a [routerLink]="['JAVA']">
                    <img src="https://prismic-io.s3.amazonaws.com/avisi/ec8dd3ad84d3692bc0b6b02cbedadedb31ae8360_expertises-icon-java-500.png" alt="java" width="200px" height="200px">
                    <br/>
                    <h4>JAVA IN 1 MONTH</h4>
                </a>    
                </div>
                
                <div class="col-md-4">
                <a [routerLink]="['BOOTSTRAP']">
                    <img src="http://getbootstrap.com/assets/img/bootstrap-stack.png" alt="bootstrap" width="200px" height="200px"> 
                    <br/>
                    <h4>BOOTSTRAP</h4>
                </a>
                </div>
                <div class="col-md-4">
                <a [routerLink]="['ANGULAR']">    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png" alt="angular" width="200px" height="200px">
                    <br/>
                    <h4>ANGULARJS</h4>
                </a>
                </div>
            </div>
        </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class DevComponent { }
