import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DevComponent } from "./dev.component";
import { FitComponent } from './fit.component';
import { DesComponent } from './des.component';
import { JavaComponent } from './java.component';
import { BootComponent } from './boot.component';
import { AngularComponent } from './angular.component';
import { PhotoComponent } from './photo.component';
import { AfterComponent } from './after.component';
import { CadComponent } from './cad.component';
import { AceComponent } from './ace.component';
import { NasmComponent } from './nasm.component';
import { CrossComponent } from './cross.component';
import { ThanksComponent } from './thanks.component';

@Component({
    selector: 'routing-example',
    templateUrl: 'app/app.component.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/dev', name: 'DEVELOPER', component: DevComponent},
    {path:'/des', name: 'DESIGNER', component: DesComponent},
    {path:'/fit', name: 'FITNESS', component: FitComponent},
    {path:'/java', name: 'JAVA', component: JavaComponent},
    {path:'/bootstrap', name: 'BOOTSTRAP', component: BootComponent},
    {path:'/angular', name: 'ANGULAR', component: AngularComponent},
    {path:'/photoshop', name: 'PHOTOSHOP', component: PhotoComponent},
    {path:'/aftereffects', name: 'AFTEREFFECTS', component: AfterComponent},
    {path:'/cad', name: 'CAD', component: CadComponent},
    {path:'/ace', name: 'ACE', component: AceComponent},
    {path:'/nasm', name: 'NASM', component: NasmComponent},
    {path:'/crossfit', name: 'CROSSFIT', component: CrossComponent},
    {path:'/thanks', name: 'THANKS', component: ThanksComponent}
    
])
export class AppComponent { }
