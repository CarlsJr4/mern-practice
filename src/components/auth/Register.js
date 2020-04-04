import React, { useState } from 'react';
import useFormData from '../../hooks/useFormData';

export default function Register({handleAuth}) {
	const {formData, handleInputChange} = useFormData();

	// Maybe we can have a cleanup effect that clears the form data state after auth? 
	// On submit, we can call the handleRegister method using the form data in this component's state

	return (
		<div>
			<h3>Register</h3>
			<form onSubmit={(e) => handleAuth(e, formData, 'register')}>
				<label 
					htmlFor="username">
						Username:
				</label>
				<input 
					onChange={handleInputChange} 
					type="text"
					name="username" 
					id="username"
				/>
				<label 
					htmlFor="email">
						Email:
				</label>
				<input 
					onChange={handleInputChange} 
					type="text" 
					name="email" 
					id="register__email"
				/>
				<label 
					htmlFor="password">
						Password:
				</label>
				<input 
					onChange={handleInputChange} 
					type="password" 
					name="password" 
					id="register__password"
				/>
				<input 
					type="submit" 
					value="Login"
				/>
			</form>
		</div>
	)
}