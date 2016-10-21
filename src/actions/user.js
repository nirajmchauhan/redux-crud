import axios from 'axios';

export default function getUsers() {
	return (dispatch) => {
		axios.get('/api/users/')
		.then((response) => {
			dispatch({ type: 'USERS_RECEIVED', users: response.data });
		});
	};
}
