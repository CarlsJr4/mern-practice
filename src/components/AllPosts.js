import React from 'react';

export default function AllPosts({data}) {
const posts = data.map(post => 
	<div>
		<h3>{post.title}</h3>
		<p>By: {post.author}</p>
	</div>
);

	return (
		<div>
			{posts}
		</div>
	)
}