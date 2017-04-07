//import libraries
import React, { Component } from 'react';
import _ from 'lodash';

//component for form that handles user data
class DataForm extends Component {

	//set initial state of data form
	constructor(props) {
		super(props);
		this.state ={
			name: '',
			email: '',
			birthday: '',
			nameError: '',
			emailError: '',
			birthdayError: '',
			spamCheck: ''
		}

		//bind functions
		this.submitForm = this.submitForm.bind(this);
		this.validateName = this.validateName.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validateBirthday = this.validateBirthday.bind(this);
	}

	//validates name input
	validateName(name){
		const nameVal = name;
	        if(nameVal != '') {
	        	this.setState({name: nameVal, nameError: ""});
	        	return true;
	        } else {
	        	this.setState({name: nameVal, nameError: "invalid"});
	    		return false;
	        }
	}
	//validates email input
	//validation regex taken from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	validateEmail(email){
		const emailVal = email;
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(emailVal)){
			this.setState({email: emailVal, emailError: ""});
			return true;
		} else {
			this.setState({email: emailVal, emailError: "invalid"})
			return false;
		}
	}
	//validates birthday input
	validateBirthday(birthday){
		const birthdayVal = birthday;
		if(birthdayVal != ''){
			this.setState({birthday: birthdayVal, birthdayError: ""});
			return true;
		} else {
			this.setState({birthday: birthdayVal, birthdayError: "invalid"})
			return false;
		}
	}
	//bot and spam checker  - if this hidden input is filled, flag the input as invalid
	onSpamChange(spam){
		const spamVal = spam;
		this.setState({spamCheck: spamVal});
	}

	//validate all fields and submit form
	submitForm(e){
		e.preventDefault();
		const validName = this.validateName(this.state.name);
		const validEmail = this.validateEmail(this.state.email);
		const validBirthday = this.validateBirthday(this.state.birthday);
		const spamCheck = (this.state.spamCheck == '' ? true : false);

		if(	validName && validEmail && validBirthday && spamCheck ) {

			//if all data is valid, add submission date and IP and submit to parent component
			const submissionData = {
				name: this.state.name, 
				email: this.state.email,
				birthday: this.state.birthday,
				submissionDate: (new Date()).toString(),
				IP: myip
			}
			this.props.onFormSubmit(submissionData);
		}
	}

	render() {

		//debounced versions of validation functions
		const validateName = _.debounce((name) => {this.validateName(name)}, 300);
		const validateEmail = _.debounce((email) => {this.validateEmail(email)}, 300);
		const validateBirthday = _.debounce((birthday) => {this.validateBirthday(birthday)}, 300);

		//return form
		return (
			<div className="userFormWrapper">
				<div className="header">
					<h2>This is a form.</h2>
					<p>(put some stuff in it)</p>
				</div>
				<form className="userForm" onSubmit={this.submitForm}>
					<div className="form-group field">
						<label htmlFor="nameInput">Name</label>
						<input type="text" id="nameInput" className="form-control"

						onChange={ event => validateName(event.target.value)}></input>

					<div className="error">
						<p className={this.state.nameError}>
							Name cannot be empty
						</p>
					</div>

					</div>
					<div className="form-group field">
						<label htmlFor="emailInput">Email</label>
						<input type="email" id="emailInput" className="form-control"
						onChange={ event => validateEmail(event.target.value)}></input>
					</div>

					<div className="error">
						<p className={this.state.emailError}>
							Please enter a valid email
						</p>
					</div>

					<div className="form-group field">
						<label htmlFor="birthdayInput">Birthday</label>
						<input type="date" id="birthdayInput" className="form-control" 
						onChange={ event => validateBirthday(event.target.value)}></input>
					</div>
					<div className="error">
						<p className={this.state.birthdayError}>
							Please enter a valid birthday
						</p>
					</div>
					<input type="text" id="spamjam" onChange={event => this.onSpamChange(event.target.value)}></input>
			       	<button type="submit" className="btn btn-primary submitBtn">Submit</button>
				</form>
			</div>
		)
	}
}

//export component for other parts of the application to use
export default DataForm;