import React, {Component} from 'react';
import User from './User';

class UserList extends Component{

	render(){

		const UsersToRender = [{
			id : '1',
			firstName: 'Dupont',
			lastName : 'Dupuis'
		},
		{
			id : '2',
			firstName : 'Data',
			lastName : 'Jones'
		}]
		console.log(UsersToRender);

		return(
			<div>
				{
					UsersToRender.map(user =>(<User key = {user.id} user ={user}/>))
				}
				</div>
			)
	}
}
export default UserList;