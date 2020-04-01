import React, { useState } from 'react';

export default function PostForm() {
	const [formData, setFormData] = useState({});

	function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		setFormData({});
	}

	function handleInputChange(e) {
		const target = e.target; // Input being updated
		const {name, value} = target // Extract the name and value of your target
		setFormData({
			...formData,
			[name]: value
		})
	}

	return (
		<form 
			action="/api/posts" 
			method="post"
			onSubmit={handleSubmit}
		>
			<label 
				htmlFor="title">
					Title:
			</label>
			<input 
				id="title" 
				name="title" 
				type="text" 
				onChange={handleInputChange}
			/>
			<label 
				htmlFor="author">
					Author:
			</label>
			<input 
				id="author"
				name="author" 
				type="text" 
			  onChange={handleInputChange}
			/>
			<label 
				htmlFor="text">
					Text:
			</label>
			<textarea
				id="text"
				name="body" 
				type="text" 
				onChange={handleInputChange}
			/>
			<input 
				type="submit" 
				value="Submit"
			/>
		</form>
	)
}
