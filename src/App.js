import React from 'react';

import './app.css';
import './lazy4.css';
import Nav from './nav';
import Todo from './todo';

export default function App(){
	return (
		<div className="container">
			<Nav />
			<Todo />
		</div>
	)
}
