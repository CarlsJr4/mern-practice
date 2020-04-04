import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import './stylesheets/App.css';
import Home from './components/Home';
import Post from './components/Post';
import Auth from './components/auth/Auth';

// The point of this component is to hold state and routes
function App() {
	const [isAuth, setAuth] = useState(false);
	const [posts, updatePosts] = useState([]);
	const [currentPost, updateCurrentPost] = useState({});

		// Function is separated here to prevent a "cannot update component from inside a component" error
		function handlePostClick(post) {
			updateCurrentPost(post);
		}

	// If unsuccessful, we need to handle this error somehow
	// Probably need to figure out a way to handle the back button so that it doesn't sign you out
	// How can we handle the client trying to access resources without authenticating? Use auth middleware
	// We could store errors in the state and render them in the client
	// The app needs a way to determine which post we are looking at

	// Next task: We need to implement clientside error handling
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

	// As the app grows, how will we handle redirects?

  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{isAuth ? 
						<Redirect to="/blog"/> : 
						<Auth 
							isAuth={isAuth} 
							handleAuth={handleAuth}
						/>}
				</Route>
				<Route path="/blog">
					{isAuth ?
					<Home
						setAuth={setAuth}
						posts={posts}
						updatePosts={updatePosts}
						handlePostClick={handlePostClick}
					/> :
					<Redirect to="/" />
					}
				</Route>
				<Route path="/post">
					<Post data={currentPost}/>
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
