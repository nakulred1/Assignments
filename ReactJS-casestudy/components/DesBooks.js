import React from 'react';
import {Link} from 'react-router';

class DesBooks extends React.Component{
  render(){
    return(
	     <div className="container">
	     	<div className="row">
	     		<div className="col-md-12">
	     			<center>
	     					<br/>
	     					<br/>
	     					<img src="http://www.adobepress.com/ShowCover.asp?isbn=0134663454" alt="angularjs" width="400px" height="450px"/>
	     					<h3>Book Id: 2</h3>
	     					<h4>Book Name: Photoshop CC Guide</h4>
	     					<h4>Book Price: 500/-</h4>
	     					<h4>Publishing Date: 23rd March 2009</h4>
	     			</center>
	     		</div>
	     	</div>
	     </div>
	)
  }
}
export default DesBooks;