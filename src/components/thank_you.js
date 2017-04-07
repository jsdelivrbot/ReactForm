//import libraries
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//a thank you message that displays for 10 seconds, closes and returns to the data form
class ThankYou extends Component  {
	constructor(props) {
		super(props);
		this.state ={
			time: 10
		}
		this.countDown = this.countDown.bind(this);
	}

	componentDidMount() {
		//start timer on load of component
		this.countDown();
	}

	//countdown timer for the thank you message
	countDown(){
		let counter = setInterval(()=>{
			let seconds = this.state.time;
			seconds--;
			console.log()
			this.setState({time: seconds});
			if(seconds==0) {
				clearInterval(counter);
			}
		}, 1000);
		
	}
	//render component to page
	render() {
		return (
			<div>
				<div className="thankYou">
					<h3 >Thank you, {this.props.thanks} for submitting your info!</h3>
					<p>We are currently <del>playing with</del> processing your data.</p>
					<img className="thankYouImg" src="../../img/thankyou.gif"/>
					<p className="counter">(In {this.state.time} seconds you can give us some more)</p>
				</div>
			</div>
		)
	}

}

//export component for other parts of the application to use
export default ThankYou;