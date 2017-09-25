import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	
   template: `<center><form name="myForm"> <section class="half-page">
   <input class="form-control" type="text" #firstname placeholder="Enter Name" required>
  
             <input class="form-control"type="text" #pin placeholder="Enter PIN" required>
           <textarea class="form-control"  #address placeholder="Enter address" required > </textarea>
            <input class="form-control btn btn-primary" type="submit" (click)='submitFunct(firstname.value, pin.value,address.value);
             firstname.value =""; pin.value="";address.value=""; ' >
            <br><br>
			
           </section>
            <section>
            
             <h2 class="well">{{result}}</h2>
			 </section>
			 </form>
			 </center>
   `, 
   directives: [ROUTER_DIRECTIVES],
   styles:[`
  section{
    margin:10px
  }
  .half-page {
     width:300px;
     margin:10px;
     
  }
  input[type="text"]{
      margin: 7px 0px;
    
  }
  input[type="submit"]{
      margin: 10px 0px;
    
  }
  `]
}) 

export class buy {
 result: string = "";
  submitFunct(firstname,pin,address): void {
    if( pin === "560031"||pin === "560032"){
      return(this.result = 'Your Name is:'+ " "+firstname + " " +"and your PIN No. is"+" "+ pin + " " +"Your address is:"+ " "+ address+"Thanks for ordering!!!"+"  "+"  "+"  "+"  "+"  "+"  "+"  " + "Your Pizza will be delivered to the specified location");
    }else{
    this.result = "Invalid PIN" ;
  }

}