import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({getPosts}) {
	const [formData, setFormData] = useState({});

	function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		axios.post('http://localhost:3000/api/posts', formData)
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err) 
			});
			// Call a form handler here to update the app's posts
			getPosts();
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
