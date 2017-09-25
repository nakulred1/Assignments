import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	template: `
	<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
	   <center>
	   <h1>{{details[0].pizzaname}}</h1>
            <img bind-src="imageLink" height="450" width="750" />
            <h3>pizzaID:{{details[0].pizzaId}}</h3>
            
			
			
			<button class="btn btn-primary" (click)="abd()">
			Add to Cart
			</button>
			<div *ngIf="showTotal == true"> 
			<h3> Order details:</h3>
			<h3>{{details[0].pizzaname}} pizza</h3>
			<h3>{{details[0].price}} Rupees </h3>

			</div>
			<a [routerLink]="['TOP']">
			<button class="btn btn-primary"  >
			proceed
			</button>
			</a>
			
			</center>
			 </div>
			 
			 <div class="col-lg-12">
           <center>  
        <h1>{{details[1].pizzaname}}</h1>
        <img bind-src="imageLink1" height="450" width="750" />
            <h3>pizzaID:{{details[1].pizzaId}}</h3>
            
			
		
			<button class="btn btn-primary" (click)="abc()">
			Add to Cart
			</button>
			
			<div *ngIf="sTotal == true"> 
			<h3> Order details:</h3>
			<h3>{{details[1].pizzaname}} pizza</h3>
			<h3>{{details[1].price}} Rupees </h3>

			</div>
			<a [routerLink]="['TOP']">
			<button class="btn btn-primary" >
			proceed
			</button>
			</a>
			


			
			</center>
        
        </div>
    </div>
            <br/><br/>
    
</div>`
,
    directives: [ROUTER_DIRECTIVES]
})
export class SchoolComponent implements OnInit{ 
    public details = [{pizzaId:"12357",pizzaname:"VEGGIE CHEESE",price:"230"},{pizzaId:"12457",pizzaname:"EXORTICA LARGE",price:"260"}];
	constructor(){
		
			this.imageLink="app/aa.jpg" ;
            this.imageLink1="app/bb.jpg";
            
           
	}
public showTotal = false;
	
	
    abd(){
        
             alert('Veg pizza with ID 12357 is added to cart');
			this.showTotal = true;
          } 
		  public sTotal = false;
    abc(){
                        
              alert('Veg pizza with ID 12457 is added to cart');
			  this.sTotal = true;

          }
   
}
