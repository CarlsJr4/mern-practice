import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import axios from 'axios';
import './stylesheets/App.css';
import Home from './components/Home';
import Post from './components/Post';
import Auth from './components/auth/Auth';

// The point of this component is to hold state and routes
function App() {
	const token = localStorage.getItem('jwt');
	const [posts, updatePosts] = useState([]); // Keep track of all posts in the all
	const [currentPost, updateCurrentPost] = useState({}); // Keep track of which post to render when accessing a post 

		// Function is separated here to prevent a "cannot update component from inside a component" error
		function handlePostClick(post) {
			updateCurrentPost(post);
		}

	// We could store errors in the state and render them in the client
	async function handleAuth(e, userInfo, route) {
		e.preventDefault();
		e.target.reset();
		try {
			const session = await axios.post(`http://localhost:3000/api/users/${route}`, userInfo);
			const token = session.data.token;
			// This should be cleared clientside when the user logs out or exits the page
			localStorage.setItem('jwt', token);
		}
		catch (ex) {
			console.log(ex);
		}
	}

	// Maybe instead of setting auth in the state, we check if the browser has a JWT

  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{token ? 
						<Redirect to="/blog"/> : 
						<Auth />
					}
				</Route>
				<PrivateRoute path="/blog" token={token}>
					<Home
						posts={posts}
						updatePosts={updatePosts}
						handlePostClick={handlePostClick}
					/> 
				</PrivateRoute>
				<PrivateRoute path="/post" token={token}>
					<Post data={currentPost}/>
				</PrivateRoute>
			</Switch>
		</Router>
  );
}

export default App;
