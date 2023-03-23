import React from 'react';
import './FlashSale.scss';

import ImageFlashSale1 from '../../Assets/Images/Section/FlashSale.jpg';

function FlashSale() {
	return (
		<section className='flash-sale'>
			<div className='flash-sale-inner'>
				<div className='flash-time'>
					<p className='promo-kilat'>Promo Kilat</p>
					<div className='time'>
						<div className='countdown'></div>
					</div>
				</div>
				<div className='flash-sale-content'>
					{/* card-1 */}
					<div className='content-card'>
						<div className='card-flash-sale-1'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.100.000<span className='percent'>50%</span></div>
							<div className='discount'>Rp.200.000</div>
							<div className='progress-bar progress-bar-50'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
					{/* card-2 */}
					<div className='content-card'>
						<div className='card-flash-sale-2'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.131.679<span className='percent'>67%</span></div>
							<div className='discount'>Rp.399.000</div>
							<div className='progress-bar progress-bar-77'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
					{/* card-3 */}
					<div className='content-card'>
						<div className='card-flash-sale-3'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.146.250<span className='percent'>25%</span></div>
							<div className='discount'>Rp.195.000</div>
							<div className='progress-bar progress-bar-10'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
					{/* card-4 */}
					<div className='content-card'>
						<div className='card-flash-sale-4'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<dix className='price'>Rp.2.760<span className='percent'>77%</span></dix>
							<div className='discount'>Rp.12.000</div>
							<div className='progress-bar progress-bar-96'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
					{/* card-5 */}
					<div className='content-card'>
						<div className='card-flash-sale-5'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.36.000<span className='percent'>40%</span></div>
							<div className='discount'>Rp.60.000</div>
							<div className='progress-bar progress-bar-20'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
					{/* card-6 */}
					<div className='content-card'>
						<div className='card-flash-sale-6'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.1.000<span className='percent'>99%</span></div>
							<div className='discount'>Rp.10.999.999</div>
							<div className='progress-bar progress-bar-100'>
							</div>
							<p className='status'>Habis</p>
						</div>
					</div>
					{/* card-7 */}
					<div className='content-card'>
						<div className='card-flash-sale-7'>
							<img className='image-flash-sale' src={ImageFlashSale1} alt='Image flash sale' />
							<div className='price'>Rp.1.200<span className='percent'>80%</span></div>
							<div className='discount'>Rp.6.000</div>
							<div className='progress-bar progress-bar-89'>
							</div>
							<p className='status'>Tersedia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const countdown = document.querySelector('.countdown');
const targetDate = new Date('2023-03-24');

function updateCountdown() {
	const now = new Date();
	const diff = targetDate - now;

	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	countdown.textContent = `${hours} : ${minutes} : ${seconds}`;

	if (diff < 0) {
		clearInterval(intervalId);
		countdown.textContent = 'Waktu Habis!';
	}
}

updateCountdown();
const intervalId = setInterval(updateCountdown, 1000);

export default FlashSale;
