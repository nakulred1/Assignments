import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
        template: `<style>
        .carousel-inner > .item > img,
        .carousel-inner > .item > a > img {
            width:   658px;
            height:  219px;   
            margin: auto;
        }
        </style>
        <br/>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
    
       
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="http://wwwimages.adobe.com/content/dam/acom/en/products/aftereffects/max2016/images/ae-marquee-1440x660.jpg" alt="Image">
            <div class="carousel-caption">
            </div>      
          </div>
    
          <div class="item">
            <img src="https://udemy-images.udemy.com/course/750x422/61188_4fb2_9.jpg" alt="Image">
            <div class="carousel-caption">
            </div>      
          </div>
        </div>
    
       
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="container">
    <h2>ADOBE AFTER EFFECTS CC</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="col-md-12">
          <div class="col-md-6">
              <h5><span class="glyphicon glyphicon-ok green"></span> All of Adobe After Effects – in a dynamic, hands on approach</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> Video Visual Effects, Motion Graphics and Compositing to Create Awesome Videos</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> A powerful step by step system to immediately start creating Animation and adding Visual Effects</h5>
          </div>
          <div class="col-md-6">
          <h5><span class="glyphicon glyphicon-ok green"></span> Dive right in and start creating animation and visual effects</h5>
          <h5><span class="glyphicon glyphicon-ok green"></span> How to Create Motion Graphics to Enhance your Videos</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12">
        <div class="col-md-6">
            <h3> Course Duration: 3 Months</h3>
            <h3 value="950"> Cost: 950/- </h3>
            <h3>Rating <span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span></h3>
        </div>
        <div class="col-md-6">
        <h3><span class="glyphicon glyphicon-ok green"></span> Certificate</h3>
      </div>
    </div>
  </div>
</div>
<div class="container">
<div class="panel panel-default">
  <div class="panel-body">
  <h3>Extra Facilities</h3>
  <form>
    <div class="checkbox">
    <label><input type="checkbox" value="200" id="live" #live (change)="nmo($event)">Live sessions(200/-)</label>
    </div>
    <div class="checkbox">
    <label><input type="checkbox" value="400" id="study" #study (change)="pqr($event)">Study Material(CD+BOOK)(400/-)</label>
    </div>
    <div class="checkbox">
    <label><input type="checkbox" id="digital" #digital (change)="abc($event)">Digital Certificate(200/-)</label>
    </div>
    <center><button type="button" (click)="onSelect()" class="btn btn-success btn-lg">Enroll Me!</button>
    <a [routerLink]="['DEVELOPER']"><button type="button" class="btn btn-danger btn-lg">Go Back</button></a></center>
  </form>
  <div *ngIf="showTotal == true"> 
  <h3>Thank you for registering. Your course fees is {{total}}/-</h3>
  </div>
</div>
</div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class AfterComponent { 
  public total:number = 950;
  public showTotal = false;
  onSelect(){
    this.showTotal = true;

  }
  
  abc(e){
    var isChecked = e.target.checked;
  if(isChecked==true){
   this.total = this.total+200;
  }
   else{
     this.total = this.total-200;
   }
  
  }
  pqr(e){
    var isChecked = e.target.checked;
    if(isChecked==true){
     this.total = this.total+400;
    }
    else{
      this.total = this.total-400;
    }
   }
  nmo(e){
    var isChecked = e.target.checked;
    if(isChecked==true){
     this.total = this.total+200;
    }
     else{
     this.total = this.total-200;
   }
   }
}
