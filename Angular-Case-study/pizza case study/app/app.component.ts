import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {SchoolComponent} from './school.component';
import {StudentComponent} from './student.component';
import { toppings } from './topveg';
import { buy } from './app.buy';
import { thanks } from './app.thanks';
import { cart } from './app.cart';

@Component({
    selector: 'routing-example',
    templateUrl: 'app/app.component.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name: 'HOME', component: HomeComponent},
    {path:'/school', name: 'SCHOOL', component: SchoolComponent},
    {path:'/student', name: 'STUDENT', component: StudentComponent},
    {path:'/toppings', name: 'TOP', component: toppings},
    {path:'/buy', name: 'BUY', component: buy },
  //  {path:'/thanks', name: 'THANKS', component: thanks }
	{path:'/cart', name: 'CART', component: cart }
   
])
export class AppComponent { }
