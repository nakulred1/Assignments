import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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
    
</div>
`
,
    directives: [ROUTER_DIRECTIVES]
})

export class StudentComponent {
	public details = [{pizzaId:"12378",pizzaname:"CHICKEN GRILLED PIZZA",price:"330"},{pizzaId:"12999",pizzaname:"PEPPERONI",price:"360"}];  
	constructor(){
	
		this.imageLink="http://pizzamiashepshed.com/admin/data/images/slider/Img_6e955817e27ef29b3590a6f8cf1d8774_1486561325.png";
		this.imageLink1="https://wallpaperscraft.com/image/pizza_vegetables_cheese_pastries_71693_1920x1080.jpg";
	
	 }
	 public showTotal = false;
	 abd(){
        
             alert('Non-Veg pizza with ID 12378 is added to cart');
			 this.showTotal = true;
          } 
		   public sTotal = false;
    abc(){
                        
              alert('Non-Veg pizza with ID 12999 is added to cart');
			    this.sTotal = true;
		  }
		  
	
 }
