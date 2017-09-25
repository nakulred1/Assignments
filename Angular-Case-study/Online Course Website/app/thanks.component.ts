import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
        template: `
            <center><h1>Thanks for enrolling into the course</h1>
                    <h1>All the best</h1>
            </center>
        
        `,
    directives: [ROUTER_DIRECTIVES]
})
export class ThanksComponent { }
