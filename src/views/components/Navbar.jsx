
import React from 'react';

import './Navbar.scss';

function Navbar() {
	return (
		<nav>
			<a href='#' className='nav-brand'>
				<img src='https://raw.githubusercontent.com/hawariMuflihMunte/HICART/docs/HICART%20ASSETS/LOGO/logo%20HICART-03.png' alt='HICART' />
			</a>
			<input className='nav-search' type='text' placeholder='Mau cari apa ?' />
		</nav>
	);
}

export default Navbar;
