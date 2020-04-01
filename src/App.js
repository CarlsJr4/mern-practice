import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesheets/App.css';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

// Today's goal: Display posts from backend to frontend
function App() {
	const [posts, updatePosts] = useState([]);

	async function getPosts() {
		const allPosts = await axios.get('http://localhost:3000/api/posts');
		updatePosts(allPosts.data);
	}

	// We can display the posts upon render, but what about when we want to update the list?
	useEffect(() => {
		getPosts()
	}, []);

  return (
    <div className="App">
			<h1>Today's posts:</h1>
			<AllPosts data={posts} />
			<h1>Make a post:</h1>
			<PostForm getPosts={getPosts} />
    </div>
  );
}

export default App;
