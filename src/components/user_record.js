//import libraries
import React from 'react';

//component that displays a single record of user submitted data
const UserRecord= (props) =>  {
	return (
		<tr className="userRecord"> 
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.birthday}</td>
			<td>{props.submissionDate}</td>
			<td>{props.IP}</td>
		</tr>
	)
}

//export component for other parts of the application to use
export default UserRecord;