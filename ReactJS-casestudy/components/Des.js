import React from 'react';
import {Link} from 'react-router';

class Des extends React.Component{
  render(){
    return(
	     <ul className="des">
        <li><Link to="Des">Designer Books</Link></li>
      </ul>
	)
  }
}
export default Des;