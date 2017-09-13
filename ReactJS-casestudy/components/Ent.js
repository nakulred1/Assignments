import React from 'react';
import {Link} from 'react-router';

class Ent extends React.Component{
  render(){
    return(
	     <ul className="edu">
        <li><Link to="EntBooks">Entertainment DVDs</Link></li>
      </ul>
	)
  }
}
export default Ent;