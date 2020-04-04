import React from 'react';

// When this is submitted, do stuff to the app
export default function Login({handleAuth}) {
	return (
		<div>
			<h3>Sign in</h3>
			<form onSubmit={(e) => handleAuth(e)}>
				<label htmlFor="email">Email:</label>
				<input type="text" name="email" id="login__email"/>
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" id="login__password"/>
				<input type="submit" value="Login"/>
			</form>
		</div>
	)
}