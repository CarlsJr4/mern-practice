const { useState } = require('react');

// The point of this hook is to reuse logic that handles form state
export default function useFormData() {
	const [formData, setFormData] = useState({});

	function handleInputChange(e) {
		const target = e.target; 
		const {name, value} = target 
		setFormData({
			...formData,
			[name]: value
		})
	}

	return {
		formData,
		setFormData,
		handleInputChange,
	};
}