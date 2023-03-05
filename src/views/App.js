import React from 'react';
import Navbar from './components/Navbar.js';

const REACT_VERSION = React.version;

function App() {
	return (
		<>
			<Navbar />
			<div className='App'>React v{REACT_VERSION}</div>
		</>
	);
}

export default App;
