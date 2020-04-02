import React from 'react';
import PostForm from './PostForm';
import AllPosts from './AllPosts';

// The point of this component is to hold the home route and display relevant data
export default function Home({updatePosts, posts, handlePostClick}) {
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

