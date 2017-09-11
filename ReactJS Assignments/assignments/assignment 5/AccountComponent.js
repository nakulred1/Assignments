import React from 'react';

class AccountComponent extends React.Component{
   render(){
     return(
	   <div>
	   Pin:<input type="text" name="pin"/><br/><br/>
	   Registration:<input type="date" name="from"/> To:<input type="date" name="to"/><br/><br/>
	   Account:<br/><textarea rows="4" cols="30"></textarea><br/><br/>
	   <button>Retrieve</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary">Reset</button>
	   </div>	
	 		)
   			}
}
export default AccountComponent;






