import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
import Login from './containers/login'
import Register from './containers/register'
import './config'
import {store} from './store/createStore'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path='/login' component={Login} ></Route>
				<Route path='/register' component={Register} ></Route>
			</div>
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
