import React, { useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import AllPosts from './AllPosts';

// The point of this component is to hold the home route and display relevant data
export default function Home({updatePosts, posts, handlePostClick}) {	
	useEffect(() => {
		// Need to customize app errors incase of a backend server failure
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

