import React from 'react';
import './stylesheets/App.css';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

// Your goal is to build a form that submits posts to the app
// Today's goal: submit form data to your backend
function App() {
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
