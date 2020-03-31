import React, { useState } from 'react';

export default function PostForm() {
	return (
		<form action="">
			<label htmlFor="title">Title:</label>
			<input id="title" type="text"/>
			<label htmlFor="author">Author:</label>
			<input id="author" type="text"/>
			<label htmlFor="text">Text:</label>
			<textarea id="text" type="text"/>
			<input type="submit" value="Submit"/>
		</form>
	)
}
