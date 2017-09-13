import React from 'react';
import {Link} from 'react-router';

class Dev extends React.Component{
  render(){
    return(
	     <ul className="dev">
        <li><Link to="DevBooks">Developer Books</Link></li>
      </ul>
	)
  }
}
export default Dev;