import React from 'react';

export default function Register({handleAuth}) {
	return (
		<div>
			<h3>Register</h3>
			<form onSubmit={(e) => handleAuth(e)}>
				<label htmlFor="username">Username:</label>
				<input type="text" name="username" id="username"/>
				<label htmlFor="email">Email:</label>
				<input type="text" name="email" id="register__email"/>
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" id="register__password"/>
				<input type="submit" value="Login"/>
			</form>
		</div>
	)
}