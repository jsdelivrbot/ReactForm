//import libraries
import React, { Component } from 'react';

//import components
import UserRecord from './user_record';

//component that takes array of user submitted data and renders it into a table
const UserRecordList = (props) => {

	//map all data to UserRecord component
	const listOfRecords = props.onNewUserData.map((el, index) => {
		return <UserRecord
			key={index}
			name={el.name}
			email={el.email}
			birthday={el.birthday}
			submissionDate={el.submissionDate}
			IP={el.IP}
			/>
	});
	
	//return table of updated data
	return (
		<table className="table">
			<thead><tr> 
				<th>Name</th> 
				<th>Email</th> 
				<th>Birthday</th>
				<th>Submission Date</th>
				<th>User IP Address</th>
				</tr> 
			</thead>
			<tbody>
				{listOfRecords}
			</tbody>
		</table>
	)

}

//export component for other parts of the application to use
export default UserRecordList;