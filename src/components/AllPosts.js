import React from 'react';
import { Link } from 'react-router-dom';

export default function AllPosts({data, handlePostClick}) {
	
	const posts = data.map(post => 
		<div key={post._id}>
			<Link to="/post">
				<h3 onClick={() => handlePostClick(post)}>{post.title}</h3>
			</Link>
			<p>By: {post.author.username}</p>
		</div>
	);

	return (
		<div>
			{posts}
		</div>
	)
}