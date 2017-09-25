import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
	template: `
	<center>
	<a [routerLink]="['BUY']">
	<button class="btn btn-primary">Proceed to pay </button>
	</a>
	</center>`,
    directives: [ROUTER_DIRECTIVES]
})

export class cart{};