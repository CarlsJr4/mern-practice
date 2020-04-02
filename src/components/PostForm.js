import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({updatePosts, posts}) {
	const [formData, setFormData] = useState({});

	// What if we did manual client-side validation using Joi?
	// What if we separated clientside and serverside errors?

	async function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		try {
			const newPost = await axios.post('http://localhost:3000/api/posts', formData);
			updatePosts([...posts, newPost.data])
		} 
		catch (ex) {
			console.log(ex);
		}
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
				required
				maxLength="100"
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
				required
				maxLength="25"
			/>
			<label 
				htmlFor="text">
					Text:
			</label>
			<textarea
				id="text"
				name="body" 
				type="text" 
				rows="10"
				onChange={handleInputChange}
				required
			/>
			<input 
				type="submit" 
				value="Submit"
			/>
		</form>
	)
}
