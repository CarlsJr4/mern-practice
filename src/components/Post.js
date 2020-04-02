import React from 'react';

export default function Post({data}) {
	return (
		<div className="App">
			<h1>{data.title}</h1>
			<h3>{data.author}</h3>
			<p>{data.body}</p>
		</div>
	)
}