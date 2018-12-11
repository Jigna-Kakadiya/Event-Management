import React from 'react';
import Navigation from './Navigation';
import Main from './Main';
import '../css/bootstrap.min.css' 
import '../css/App.css';

const App = () => (
  <div className="container">
    <Navigation />
	<Main />
  </div>
)

export default App
