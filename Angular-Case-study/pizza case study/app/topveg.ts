import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    
    template: `<center>
        <h1> TOPPINGS </h1>
      <form>
	  
        <input type="checkbox" name="extra cheese" value="30" (change)="nmo($event)"> Extra cheese=Rs.30 <br /> 
        <input type="checkbox" name="paneer" value="35" (change)="abc($event)"> Paneer=Rs.35 <br />
        <input type="checkbox" name="pa" value="30" (change)="pqr($event)"> Capsicum=Rs.30<br/><br/>
		<a [routerLink]="['HOME']">
		<button class="btn btn-warning">
        Back
        </button>
		</a>
        <a [routerLink]="['BUY']">
        <button class="btn btn-primary">
        Proceed
        </button>
		</a>
		<button class="btn btn-danger" (click)="onSelect()">Add</button>
		<div *ngIf="showTotal == true">
		<h1>Extra cost for toppings is {{total}} </h1>
        </div>
		
		
        </form> 
    </center>`,
    directives: [ROUTER_DIRECTIVES]   
})


    export class toppings {
	public total:number = 0;
	public showTotal = false;
	onSelect(){
		this.showTotal = true;
	}
        nmo(e)
		{
		var isChecked = e.target.checked;
if(isChecked==true){
	this.total = this.total + 30;
}
else{
	this.total = this.total - 30;

}
}
abc(e)
		{
		var isChecked = e.target.checked;
if(isChecked==true){
	this.total = this.total + 35;
}
else{
	this.total = this.total - 35;

}
}
pqr(e)
		{
		var isChecked = e.target.checked;
if(isChecked==true){
	this.total = this.total + 30;
}
else{
	this.total = this.total - 30;

}
}
    } 