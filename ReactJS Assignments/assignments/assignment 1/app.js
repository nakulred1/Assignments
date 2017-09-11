import React from 'react';

export default class Form extends React.Component{
		
		constructor(props) {
        super(props);
        this.state ={
        	arr: []
        }
   }
   		onChange(e){
   			var newArray = this.state.arr();
   			newArray.push("new value");
   			this.setState({arr:newArray})
   		}


		render(){	
			
		return(

			<div>
					First Name:<input type="text"/>
					<br/>
					<br/>
					Last Name:<input type="text"/>
					<br/>
					<br/>
					City:<input type="text"/>
					<br/>
					<br/>
					<button onClick={alert('Cutomer added')}>Add Customer</button>
					<br/>
					<br/>
					<button onClick={alert('Customer deleted')}>Delete Customer</button>
					<br/>
					<br/>
					<p>{this.state.arr}</p>
			</div>
			);
	}
}




