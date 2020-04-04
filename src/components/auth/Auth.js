import React, { useEffect } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth({handleAuth}) {
	// Clear JWT when this page loads so that nonauthenticated users cannot access it
	useEffect(() => {
		localStorage.removeItem('jwt');
	})

	return (
		<div className="App">
			<h1>Welcome to the blog!</h1>
			<Login handleAuth={handleAuth} />
			<Register handleAuth={handleAuth} />
		</div>
	)
}