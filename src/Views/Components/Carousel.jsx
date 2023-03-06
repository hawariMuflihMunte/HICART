<<<<<<< HEAD
import React from 'react';

import './Carousel.scss';

import Caro1 from '../../Assets/Images/Carousel/carousel-01.png';
import Caro2 from '../../Assets/Images/Carousel/carousel-02.png';
import Caro3 from '../../Assets/Images/Carousel/carousel-03.png';

function Carousel() {
	return (
		<section className='carousel'>
			<div className='carousel-inner'>
				<input type='radio' name='radio-btn' id='radio1' />
				<input type='radio' name='radio-btn' id='radio2' />
				<input type='radio' name='radio-btn' id='radio3' />

				<div className='carousel-item first'>
					<a href='#promo1'>
						<img src={Caro1} alt='Carousel-1' />
					</a>
				</div>
				<div className='carousel-item'>
					<a href='#promo2'>
						<img src={Caro3} alt='Carousel-2' />
					</a>
				</div>
				<div className='carousel-item'>
					<a href='#promo3'>
						<img src={Caro2} alt='Carousel-3' />
					</a>
				</div>
				<div className='navigation-auto'>
					<div className='navi-btn1'></div>
					<div className='navi-btn2'></div>
					<div className='navi-btn3'></div>
				</div>
			</div>
			<div className='navigation-manual'>
				<label htmlFor='radio1' className='manual-btn'></label>
				<label htmlFor='radio2' className='manual-btn'></label>
				{/* issue radio3 */}
				<label htmlFor='radio3' className='manual-btn'></label>
			</div>
		</section>
	);
}

export default Carousel;
=======
import React from 'react';

import './Carousel.scss';

// Assignees:
// @iqbaalma

function Carousel() {
	return (
		<section className='carousel'>

		</section>
	);
}

export default Carousel;
>>>>>>> f2bb00dfd149128e004fbad32718d588aaf6ead5
