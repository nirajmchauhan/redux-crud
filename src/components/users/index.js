import React from 'react';

class Users extends React.Component {

	getNames() {
		if (this.props.users) {
			return this.props.users.map((user, i) => <li key={ i }>{ user.firstName }</li>);
		}
		return null;
	}

	render() {
		return (
			<div>
				<button onClick={ this.props.getData } className='btn btn-primary'>Get Users</button>
				<ul>
					{this.getNames()}
				</ul>
			</div>
		);
	}
}

Users.propTypes = {
	getData: React.PropTypes.func.isRequired,
	users: React.PropTypes.array
};

export default Users;
