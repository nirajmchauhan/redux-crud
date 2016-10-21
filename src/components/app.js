import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<nav className='navbar navbar-default'>
					<div className='container-fluid'>
						<div className='navbar-header'>
							<a className='navbar-brand'>React Redux CRUD</a>
						</div>
						<div className='collapse navbar-collapse'>
							<ul className='nav navbar-nav'>
								<li>
									<Link to='/'>Users</Link>
								</li>
								<li>
									<Link to='/users/new'>Create</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className='container'>
					<div className='row'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
