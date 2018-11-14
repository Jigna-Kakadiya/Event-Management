import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navigation from './Navigation'; 


export default class App extends React.Component {

constructor() {
    super();
  }
render() {
	return (
	<div>
		<Navigation />
		<div className="container">
			<h1>My Event</h1>
		</div>
	</div>
);
}
}
