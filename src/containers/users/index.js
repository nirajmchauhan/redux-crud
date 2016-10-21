import { connect } from 'react-redux';
import getUsers from '../../actions/user';
import Users from '../../components/users';

const mapDispatchToProps = dispatch => ({
	getData: () => {
		dispatch(getUsers());
	}
});

const mapStateToProps = state => ({
	users: state.user.users
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
