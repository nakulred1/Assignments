import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	template: `<center><h1 style = "color:white">DESIGNER COURSES</h1></center>
	<hr>
	<div class="container">                                         
		<div class="col-md-12">
			<div class="col-md-4">
			<a [routerLink]="['AFTEREFFECTS']">	
				<img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_After_Effects_CS6_Icon.png" alt="AE" width="200px" height="200px">
				<br/>
				<h4>PROCESS VIDEOS LIKE A PRO WITH ADOBE AFTER EFFECTS</h4>
			</a>	
			</div>
			<div class="col-md-4">
			<a [routerLink]="['PHOTOSHOP']">
				<img src="http://www.freepngimg.com/download/photoshop_logo/8-2-photoshop-logo-png-hd.png" alt="photoshop" width="200px" height="200px"> 
				<br/>
				<h4>PROCESSING IMAGES WITH PHOTOSHOP</h4>
			</a>
			</div>
			<div class="col-md-4">
			<a [routerLink]="['CAD']">
				<img src="http://blog.scoopz.com/wp-content/uploads/2011/09/Autocad_logo.png" alt="autocad" width="200px" height="200px">
				<br/>
				<h4>AUTOCAD BEGINNER'S GUIDE</h4>
			</a>
			</div>
		</div>
	</div>`,

    directives: [ROUTER_DIRECTIVES]
})
export class DesComponent{ 
   
}
