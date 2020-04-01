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
		console.log(posts);
	}

	useEffect(() => {
		getPosts()
	}, [posts.length])

  return (
    <div className="App">
			<h1>Today's posts:</h1>
			<AllPosts />
			<h1>Make a post:</h1>
			<PostForm />
    </div>
  );
}

export default App;
