import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesheets/App.css';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

// Today's goal: Display posts from backend to frontend
function App() {
	const [posts, updatePosts] = useState([]);

	// Retrieve all posts upon mounting of the app
	useEffect(() => {
		async function getPosts() {
			const allPosts = await axios.get('http://localhost:3000/api/posts');
			updatePosts(allPosts.data);
		}
		getPosts();
	}, []);

  return (
    <div className="App">
			<h1>Today's posts:</h1>
			<AllPosts data={posts} />
			<h1>Make a post:</h1>
			<PostForm updatePosts={updatePosts} posts={posts} />
    </div>
  );
}

export default App;
