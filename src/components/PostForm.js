import React from 'react';
import axios from 'axios';
import useFormData from '../hooks/useFormData';

export default function PostForm({updatePosts, posts}) {
	const {formData, setFormData, handleInputChange} = useFormData();
	// What if we did manual client-side validation using Joi?

	// Maybe we can add this to our custom hook when we figure out how to make it reusable
	async function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		try {
			// This is the reusable part
			const newPost = await axios.post('http://localhost:3000/api/posts', formData, {
				headers: {'x-access-token': localStorage.getItem('jwt')}
			});
			updatePosts([...posts, newPost.data])
		} 
		catch (ex) {
			console.log(ex);
		}
		setFormData({});
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
