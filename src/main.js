import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './stores';

import App from './components/app';
import Users from './containers/users/index';
import UserCreate from './components/users/new';

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path='/' component={ App }>
				<IndexRoute component={ Users } />
				<Route path='/users' component={ Users } />
				<Route path='/users' component={ Users } />
				<Route path='/users/new' component={ UserCreate } />
			</Route>
		</Router>
	</Provider>
, app);
