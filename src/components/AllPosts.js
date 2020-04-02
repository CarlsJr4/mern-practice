import React from 'react';
import { Link } from 'react-router-dom';

export default function AllPosts({data}) {
	const posts = data.map(post => 
		<div key={post._id}>
			<Link to="/post">
				<h3>{post.title}</h3>
			</Link>
			<p>By: {post.author}</p>
			<p>{post.body}</p>
		</div>
	);

	return (
		<div>
			{posts}
		</div>
	)
}