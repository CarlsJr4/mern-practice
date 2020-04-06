import React from 'react';
import useFormData from '../../hooks/useFormData';

// We need to figure out how to reroute using history instead of state
export default function Login({handleAuth}) {
	const {formData, handleInputChange} = useFormData();
	
	return (
		<div>
			<h3>Sign in</h3>
			<form onSubmit={(e) => handleAuth(e, formData, 'login')}>
				<label 
					htmlFor="email">
						Email:
				</label>
				<input 
					onChange={handleInputChange} 
					type="text" 
					name="email" 
					id="login__email"
				/>
				<label 
					htmlFor="password">
						Password:
				</label>
				<input 
					onChange={handleInputChange} 
					type="password" 
					name="password" 
					id="login__password"
				/>
				<input 
					type="submit" 
					value="Login"
				/>
			</form>
		</div>
	)
}