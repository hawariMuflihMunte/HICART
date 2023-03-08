import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel';

import './App.scss';

function App() {
	return (
		<main className='container'>
			<Navbar />
			<Carousel />
		</main>
	);
}

export default App;
