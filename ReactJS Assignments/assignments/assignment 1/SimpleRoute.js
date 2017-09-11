import React from 'react';
import Form from './app.js';
import {Link,IndexLink} from 'react-router';
export default class SimpleRoute extends React.Component{
	render(){
		return(
			<div>
			<h1>Registration form</h1>
				<button>Submit</button>
				<div className="content">
					{this.props.children}
				</div>
			</div>
			)
	}
}