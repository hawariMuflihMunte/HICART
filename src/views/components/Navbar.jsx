
import React from 'react';

import './Navbar.scss';

function Navbar() {
	return (
		<nav>
			<a href='#' className='nav-brand'>
				<img src='https://raw.githubusercontent.com/hawariMuflihMunte/HICART/docs/HICART%20ASSETS/LOGO/logo%20HICART-03.png' alt='HICART' />
			</a>
			<section className='nav-category'>
				<a href='#'>
					<i className='material-symbols-rounded'>widgets</i>
				</a>
			</section>
			<section className='nav-search'>
				<label htmlFor='navSearch'><i className='material-symbols-rounded'>search</i></label>
				<input type='text' id='navSearch' placeholder='Mau cari apa ?' />
			</section>
			<section className='nav-interactive'>
				<a href='#'>
					<i className='material-symbols-rounded'>shopping_bag</i>
				</a>
				<a href='#'>
					<i className='material-symbols-rounded'>notifications</i>
				</a>
				<a href='#'>
					<i className='material-symbols-rounded'>mail</i>
				</a>
				<a href='#'>
					<i className='material-symbols-rounded'>account_circle</i>
				</a>
			</section>
		</nav>
	);
}

export default Navbar;
