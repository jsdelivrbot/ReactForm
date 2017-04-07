//import node modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import components from filepath
import DataForm from './components/data_form';
import ThankYou from './components/thank_you';
import UserRecord from './components/user_record';
import UserRecordList from './components/user_record_list';

//main component
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            formSubmitted: false,
            userData: [],
            isAdmin: false,
        }

        //bind functions
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.showAdminLogin = this.showAdminLogin.bind(this);

    }

    //takes data from DataForm component and saves it to internal state
	handleFormSubmit(data){

		//add to userData state array
		let newData = this.state.userData.concat(data);

		//update state, display ThankYou component, pass data to UserRecordList component
		this.setState({
			formSubmitted: !this.state.formSubmitted,  
			userData: newData }, () => {
			setTimeout(()=>{ this.setState({
				formSubmitted: !this.state.formSubmitted
			})}, 10000 );
		});
	}

	//toggle admin panel
	showAdminLogin(){
			this.setState({
				isAdmin:  !this.state.isAdmin 
			});
	}

	//render components to page
	//adminPanel is currently displayed via a link toggle
	//future build out of this feature would encapsulate it into its own component with proper password access 
	render() {

		return(
			<div>
				{ !this.state.formSubmitted && 
					<DataForm onFormSubmit={this.handleFormSubmit}/>
				}
				{ this.state.formSubmitted && 
					<ThankYou thanks={this.state.userData[this.state.userData.length-1].name}/>
				}

				<div className="adminPanel">
					<a className="adminLoginToggle" onClick={this.showAdminLogin}>admin login</a>

					{ this.state.isAdmin && 
						<UserRecordList onNewUserData={this.state.userData}/>
					}
				</div>
			</div>
		)
	}
}

//render app to the DOM
ReactDOM.render( < App / > , document.querySelector('.container'));