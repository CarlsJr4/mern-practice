import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import axios from 'axios';
import './stylesheets/App.css';
import Home from './components/Home';
import Post from './components/Post';
import Auth from './components/auth/Auth';

// Current bugs we need to fix
// Fix handling redirects after logging out
// Prevent the user from accessing login while authenticated

// The point of this component is to hold state and routes
function App() {
	const [isAuth, setAuth] = useState(false);
	const [posts, updatePosts] = useState([]); // Keep track of all posts in the all
	const [currentPost, updateCurrentPost] = useState({}); // Keep track of which post to render when accessing a post 
	const token = localStorage.getItem('jwt');
	
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
			const {token, user} = session.data
			localStorage.setItem('jwt', token);
			// We pull properties out of the user so we don't store certain info in localstorage
			const userProperties = {
				username: user.username
			}
			localStorage.setItem('user', JSON.stringify(userProperties));
			setAuth(true); // To allow the login page to redirect the user to the blog
		}
		catch (ex) {
			console.log(ex);
		}
	}

  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{(isAuth || token) ? // We use || here because isAuth becomes false upon refresh. It also helps us redirect the user.
						<Redirect to="/blog"/> : 
						<Auth handleAuth={handleAuth} />
					}
				</Route>
				<PrivateRoute path="/blog" token={token}>
					<Home
						posts={posts}
						updatePosts={updatePosts}
						handlePostClick={handlePostClick}
						setAuth={setAuth}
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
