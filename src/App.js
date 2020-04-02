import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './stylesheets/App.css';
import Home from './components/Home';
import Post from './components/Post';

// The point of this component is to hold state and routes

// Warning: You are starting to use props drilling
// This is OK for now, since your app is small
function App() {
	const [posts, updatePosts] = useState([]);
	const [currentPost, updateCurrentPost] = useState({});

	// Retrieve all posts upon mounting of the app
	useEffect(() => {
		// Need to customize app errors incase of a backend server failure
		async function getPosts() {
			const allPosts = await axios.get('http://localhost:3000/api/posts');
			updatePosts(allPosts.data);
		}
		getPosts();
	}, []);

	// Function is separated here to prevent a "cannot update component from inside a component" error
	function handlePostClick(post) {
		updateCurrentPost(post);
	}

  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home 
						posts={posts} 
						updatePosts={updatePosts} 
						handlePostClick={handlePostClick}/>
				</Route>
				<Route path="/post">
					<Post data={currentPost}/>
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
