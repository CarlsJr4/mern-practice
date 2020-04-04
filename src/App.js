import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import './stylesheets/App.css';
import Home from './components/Home';
import Post from './components/Post';
import Auth from './components/auth/Auth';

// New goal: Submit auth data to the backend (register user)

// The point of this component is to hold state and routes
function App() {
	const [posts, updatePosts] = useState([]);
	const [currentPost, updateCurrentPost] = useState({});
	const [isAuth, setAuth] = useState(false);

	// Retrieve all posts upon mounting of the app
	useEffect(() => {
		// Need to customize app errors incase of a backend server failure
		async function getPosts() {
			const allPosts = await axios.get('http://localhost:3000/api/posts');
			updatePosts(allPosts.data);
			localStorage.removeItem('jwt');
		}
		getPosts();
		return function cleanup() {
			setAuth(false);
		}
	}, []);

	// Function is separated here to prevent a "cannot update component from inside a component" error
	function handlePostClick(post) {
		updateCurrentPost(post);
	}

	// If unsuccessful, we need to handle this error somehow
	// We probably need to have separate handlers for register and login
	// Probably need to figure out a way to handle the back button so that it doesn't sign you out
	// How can we handle the client trying to access resources without authenticating? Use auth middleware

	// We need to implement clientside error handling
	async function handleAuth(e, userInfo, route) {
		e.preventDefault();
		e.target.reset();
		try {
			const session = await axios.post(`http://localhost:3000/api/users/${route}`, userInfo);
			const token = session.data.token;
			// This should be cleared clientside when the user logs out or exits the page
			localStorage.setItem('jwt', token);
			setAuth(true);
		}
		catch (ex) {
			setAuth(false);
			console.log(ex);
		}
	}

  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{/* Need to redirect the user to the main app after logging in */}
					{isAuth ? 
						<Redirect to="/blog"/> : 
						<Auth 
							isAuth={isAuth} 
							handleAuth={handleAuth}
						/>}
				</Route>
				<Route path="/blog">
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
