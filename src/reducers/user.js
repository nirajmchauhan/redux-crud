export default function reducer(state = { users: [] }, action) {
	switch (action.type) {
	case 'USERS_RECEIVED': {
		return { ...state, users: action.users };
	}
	default:
	}
	return state;
}
