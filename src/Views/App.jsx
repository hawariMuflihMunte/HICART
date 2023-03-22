import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import FlashSale from './Components/FlashSale.jsx';

import './App.scss';

function App() {
	return (
		<main className='container'>
			<Navbar />
			<Carousel />
			<FlashSale />
		</main>
	);
}

export default App;
