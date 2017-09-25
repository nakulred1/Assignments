import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
        template: `<center><h1 style = "color:white">FITNESS COURSES</h1></center>
		<hr>
		<div class="container">                                         
			<div class="col-md-12">
				<div class="col-md-4">
				<a [routerLink]="['ACE']">
					<img src="http://drdhananjaymore.com/wp-content/uploads/2017/01/ACE-LOGO.jpg" alt="ace" width="200px" height="200px">
					<br/>
					<h4>ACE TRAINING</h4>
				</a>
				</div>
				<div class="col-md-4">
				<a [routerLink]="['NASM']">
					<img src="https://impossiblept.com/resources/NASM_cert_logo.jpg" alt="NASM" width="200px" height="200px"> 
					<br/>
					<h4>NASM CERTIFICATION COURSE</h4>
				</a>
				</div>
				<div class="col-md-4">
				<a [routerLink]="['CROSSFIT']">
					<img src="https://sme-badges.crossfit.com/Badges/level-1.png" alt="cross" width="200px" height="200px">
					<br/>
					<h4>CROSSFIT LVL 1 CERTIFICATION COURSE</h4>
				</a>
				</div>
			</div>
		</div>`
,
    directives: [ROUTER_DIRECTIVES]
})
export class FitComponent { }
