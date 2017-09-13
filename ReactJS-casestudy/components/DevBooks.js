import React from 'react';
import {Link} from 'react-router';

class DevBooks extends React.Component{
  render(){
    return(
	     <div className="container">
	     	<div className="row">
	     		<div className="col-md-12">
	     			<center>
	     					<br/>
	     					<br/>
	     					<img src="https://www.packtpub.com/sites/default/files/ReactJSEssentials.png" alt="reactjs" width="400px" height="450px"/>
	     					<h3>Book Id: 1</h3>
	     					<h4>Book Name: ReactJS Essentials</h4>
	     					<h4>Book Price: 250/-</h4>
	     					<h4>Publishing Date: 27th July 2015</h4>
	     			</center>
	     		</div>
	     	</div>
	     </div>
	)
  }
}
export default DevBooks;