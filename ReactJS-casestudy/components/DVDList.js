import React from 'react';
import {Link} from 'react-router';

class DVDList extends React.Component{
  render(){
    return(
    	<div className="container-fluid"> 
            <div className="col-md-12">
            	<div>
            			<center>
            			<br/>
            			<br/>
        				<button className="btn btn-default btn-lg"><Link to="DVDList/EduBooks">Education DVD</Link></button>
        				<br/>
            			<br/>
        				<button className="btn btn-default btn-lg"><Link to="DVDList/EntBooks">Entertainment DVD</Link></button>
						</center>
				</div>
			</div>
		</div>
	    
	)
  }
}
export default DVDList;