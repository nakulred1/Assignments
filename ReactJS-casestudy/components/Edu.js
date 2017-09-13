import React from 'react';
import {Link} from 'react-router';

class Edu extends React.Component{
  render(){
    return(
	     <ul className="edu">
        <li><Link to="EduBooks">Education DVDs</Link></li>
      </ul>
	)
  }
}
export default Edu;