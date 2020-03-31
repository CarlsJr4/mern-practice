import React from 'react';
import './stylesheets/App.css';
import PostForm from './components/PostForm';

// Your goal is to build a form that submits posts to the app
function App() {
  return (
    <div className="App">
			<h1>Make a post:</h1>
			<PostForm />
    </div>
  );
}

export default App;
