import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Update history if needed

// The isAuth prop is required. How can we pass this to the component by default?
const PrivateRoute = ({children, ...rest}) => {
	return (
		<Route {...rest}>
			{
				rest.token ? children : <Redirect to="/"/>
			}
		</Route>
	)
}

export default PrivateRoute;