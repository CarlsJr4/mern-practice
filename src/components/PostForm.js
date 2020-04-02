import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({updatePosts, posts}) {
	const [formData, setFormData] = useState({});

	function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		// Update the database using the PostForm state as a body
		axios.post('http://localhost:3000/api/posts', formData)
			// Update the app state using the response received from the database
			.then((res) => updatePosts([...posts, res.data]))
			.catch((err) => {
				console.log(err) 
			});
		// Reset the form state
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
