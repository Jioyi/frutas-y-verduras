import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
//actions
import { getCategorys } from './actions';
//views
import Home from './views/home';
import Cart from './views/cart';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategorys());
	}, [dispatch]);

	return (
		<Switch>
			<Route exact path="/cart" component={Cart} />
			<Route exact path="/:ID?" component={Home} />
		</Switch>
	);
};

export default App;
