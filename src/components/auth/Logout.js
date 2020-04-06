import React from 'react';
export default function Logout({setAuth}) {

	function handleLogout() {
		localStorage.removeItem('jwt');
		localStorage.removeItem('user');
		setAuth(false);
	}

	return (
		<button onClick={handleLogout}>Logout</button>
	)
}