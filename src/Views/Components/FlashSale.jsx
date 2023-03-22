import React from 'react';

import './FlashSale.scss';

function FlashSale() {
	return (
		<section className='flash-sale'>
			<div className='flash-sale-content'>
				<p className='promo-kilat'>Promo Kilat</p>
			</div>
			<div className='content-card'>
				{/* card-1 */}
				<div className='card-flash-sale'>
					<img className='' src='' alt=''></img>
					<p>Rp.20.000</p>
					<p>Rp.200.000</p>
					<p>Progress Bar</p>
					<p>Tersedia</p>
				</div>
			</div>
		</section>
	);
}

export default FlashSale;
