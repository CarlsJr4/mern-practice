import React, { useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import AllPosts from './AllPosts';

// The point of this component is to hold the home route and display relevant data
export default function Home({updatePosts, posts, handlePostClick}) {	
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	// Retrieve data upon render
	useEffect(() => {
		// TODO: Customize clientside app errors
		async function getPosts() {
			const allPosts = await axios.get('http://localhost:3000/api/posts', {
				headers: {'x-access-token': localStorage.getItem('jwt')}
			});
			updatePosts(allPosts.data);
		}
		getPosts();
	}, [updatePosts]);

	return (
		<div className="App">
			<h1>You are logged in as: {userInfo.username}</h1>
			<h1>Make a post:</h1>
			<PostForm 
				updatePosts={updatePosts} 
				posts={posts} />
			<h1>Today's posts:</h1>
			<AllPosts 
				data={posts} 
				handlePostClick={handlePostClick} />
		</div>
	)
}

