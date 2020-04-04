import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function Auth({handleAuth, isAuth}) {
	return (
		<div className="App">
			<h1>Welcome to the blog!</h1>
			<Login handleAuth={handleAuth} />
			<Register handleAuth={handleAuth} />
		</div>
	)
}