import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { 
   Injectable 
} from '@angular2/core';  







@Injectable()
export class appService {  
   getApp(): string { 
      return "Hello world"; 
   } 
}