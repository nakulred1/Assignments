import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
    <div class="container">
           <center>
           <br/>
           <br/>
           <br/> <br/> <br/> <br/>
            <h1>Thanks for ordering...<br />
            Your Pizza will be delivered to the specified location
            </h1>
            </center>
            </div> `,
directives: [ROUTER_DIRECTIVES]
})

export class thanks {
    
}