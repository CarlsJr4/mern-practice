import React from 'react';

export default function AllPosts({data}) {
const posts = data.map(post => 
	<div key={post._id}>
		<h3>{post.title}</h3>
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