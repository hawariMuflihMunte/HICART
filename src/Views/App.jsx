import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel';
import Section from './Components/Section.jsx';

import './App.scss';

function App() {
	return (
		<main className='container'>
			<Navbar />
			<Carousel />
			<Section SectionClassName='red' />
		</main>
	);
}

export default App;
