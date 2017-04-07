//import libraries
import React, { Component } from 'react';

//create class based component by extending React.Component
class AdminLogin extends Component {

	constructor(props) {
		super(props);
		//set initial state of contact form
		this.state ={
			password: ''
		}
	}

	render() {
		return (
			<input type="text" 
			value={this.state.password}
			onChange={ event => this.onInputChange(event.target.value) }
			></input>
		)
	}

	//declare event handler and pass it to an HTML element
	onInputChange(text){
		// this.setState();
		console.log(text);
	}

	validateAdminPass(){
		//validate stuff here 
	}
}

//export component for other parts of the application to use
export default ContactForm;