import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
        template: `<div class="container">
  <h1 align="center">GOUD'S PIZZA SHOP</h1>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
	  
        <img src="https://dallasnews.imgix.net/EARNS_YUM_3713880.jpg" alt="try your pizza" style="width:100%;">
      </div>

      <div class="item">
	  <a [routerLink]="['SCHOOL']">
        <img src="http://2.bp.blogspot.com/-YWTHZEIL2Iw/UO8N99oZwoI/AAAAAAAAOck/imE4-WtMfi4/s1600/Veggie+Pizza+1.jpg" alt="veg" style="width:100%;">
      </a></div>
    
      <div class="item">
	  <a [routerLink]="['STUDENT']">
        <img src="https://s-media-cache-ak0.pinimg.com/originals/fb/73/74/fb737469973b5bc5b3382ad4d9dbeca2.jpg" alt="nonveg" style="width:100%;">
     </a> </div>
	  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    constructor(){
            this.imageLink="https://dallasnews.imgix.net/EARNS_YUM_3713880.jpg";

        }

}
