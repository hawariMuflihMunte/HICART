import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel';

import './App.scss';
import Section from './Components/Section.jsx';

function App() {
	return (
		<main className='container'>
			<Navbar />
			<Carousel />
			<Section title1='Kategori' />
		</main>
	);
}

export default App;
