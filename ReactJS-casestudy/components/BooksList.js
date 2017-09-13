import React from 'react';
import {Link} from 'react-router';

class BooksList extends React.Component{
  render(){
    return(
    	<div className="container-fluid"> 
            <div className="col-md-12">
            	<div>
            			<center>
            			<br/>
            			<br/>
        				<button className="btn btn-default btn-lg"><Link to="BooksList/DevBooks">Developer Books</Link></button>
        				<br/>
            			<br/>
        				<button className="btn btn-default btn-lg"><Link to="Bookslist/DesBooks">Designer Books</Link></button>
						</center>
				</div>
			</div>
		</div>
	)
  }
}
export default BooksList;