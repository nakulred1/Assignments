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
            <img src="http://www.cubes-cad.com/wp-content/uploads/2015/03/Slider-CAD-Design-1140x450.jpg" alt="Image">
            <div class="carousel-caption">
            </div>      
          </div>
    
          <div class="item">
            <img src="https://www.ktr.com/fileadmin/user_upload/cad_header.jpg" alt="Image">
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
    <h2>CAD DRAWING</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="col-md-12">
          <div class="col-md-6">
              <h5><span class="glyphicon glyphicon-ok green"></span> Create custom 3D models for use with games, movies, and 3D printing.</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> Merge basic shapes to create more complex shapes.</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> Create "hole" objects for merging with solid objects to create unique shapes and designs.</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> Apply custom colors to custom 3D objects on the workspace.</h5>
              <h5><span class="glyphicon glyphicon-ok green"></span> Shrink and enlarge 3D models -- choose metric or US/Imperial measurement system.</h5>
          </div>
          <div class="col-md-6">
          <h5><span class="glyphicon glyphicon-ok green"></span> Rotate 3D objects on the workspace and blend them with existing objects.</h5>
          <h5><span class="glyphicon glyphicon-ok green"></span> Align and stack objects perfectly along an edge or axis.</h5>
          <h5><span class="glyphicon glyphicon-ok green"></span> Create duplicates of a 3D model or create mirror versions.</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12">
        <div class="col-md-6">
            <h3> Course Duration: 6 Months</h3>
            <h3 value="65000"> Cost: 65000/- </h3>
            <h3>Rating <span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span><span class="glyphicon glyphicon-star green"></span></h3>
        </div>
        <div class="col-md-6">
        <h3><span class="glyphicon glyphicon-ok green"></span> Certificate</h3>
        <h3><span class="glyphicon glyphicon-ok-circle gold"></span> Industry Standard</h3>
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
export class CadComponent {
  public total:number = 65000;
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
