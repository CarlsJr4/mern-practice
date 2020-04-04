import React from 'react';
import useFormData from '../../hooks/useFormData';


// When this is submitted, do stuff to the app
// Should these forms have their own state here? Do we even need to lift this state up?
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