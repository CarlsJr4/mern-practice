import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './stylesheets/App.css';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

// Today's goal: Click on blog posts to view them
// Process:
// We already have the blog content saved in the app's state
// We just need to serve it as a route

// How will we implement routing?
// 1. Wrap app in Router component
// 2. Provide links - the links will live on the blog post titles
// 3. Provide a switch that renders the first component that matches the current URL 

function App() {
	const [posts, updatePosts] = useState([]);

	// Retrieve all posts upon mounting of the app
	useEffect(() => {
		// Need to customize app incase of a backend server failure
		// How will we handle these errors?
		async function getPosts() {
			const allPosts = await axios.get('http://localhost:3000/api/posts');
			updatePosts(allPosts.data);
		}
		getPosts();
	}, []);

  return (
		<Router>
			<Switch>
				<Route path="/">
				<div className="App">
					<h1>Make a post:</h1>
					<PostForm updatePosts={updatePosts} posts={posts} />
					<h1>Today's posts:</h1>
					<AllPosts data={posts} />
				</div>
				</Route>
				<Route path="/post">
					{/* Insert a blog post page here */}
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
