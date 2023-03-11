/* eslint-disable react/prop-types */
// Assignees: @hawariMuflihMunte
import React from 'react';

import './Section.scss';

function Section({
	title1,
	title2 = '',
}) {
	if (title2 !== '') {
		return (
			<section className='item-category'>
				<div className='item-container'>
					<h3 className='item-title'>{title1}</h3>
					<div className='item-display'>
						<img src='https://i.pinimg.com/564x/fe/db/be/fedbbe73caf0d294c846aee8a8e6540a.jpg' alt='Gadget & Smartphone' loading='lazy' />
						<img src='https://whatsnewindonesia.com/sites/default/files/styles/1280x800/public/2022-10/Furniture-stores-bali-760x500.jpg?itok=CGIf7-dO' alt='Furnitures' loading='lazy'/>
						<img src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/21/914b0e5b-a111-4614-90c1-d3ae063d5ae0.png' alt='Style & Fashion' loading='lazy' />
					</div>
				</div>
				<div className='item-container'>
					<h3 className='item-title'>{title2}</h3>
					<div className='item-display'>
						<img src='https://i.pinimg.com/564x/fe/db/be/fedbbe73caf0d294c846aee8a8e6540a.jpg' alt='Gadget & Smartphone' loading='lazy' />
						<img src='https://whatsnewindonesia.com/sites/default/files/styles/1280x800/public/2022-10/Furniture-stores-bali-760x500.jpg?itok=CGIf7-dO' alt='Furnitures' loading='lazy'/>
						<img src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/21/914b0e5b-a111-4614-90c1-d3ae063d5ae0.png' alt='Style & Fashion' loading='lazy' />
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className='item-category'>
			<div className='item-container'>
				<h3>{title1}</h3>
				<div className='item-display'>
					<img src='https://i.pinimg.com/564x/fe/db/be/fedbbe73caf0d294c846aee8a8e6540a.jpg' alt='Gadget & Smartphone' loading='lazy' />
					<img src='https://whatsnewindonesia.com/sites/default/files/styles/1280x800/public/2022-10/Furniture-stores-bali-760x500.jpg?itok=CGIf7-dO' alt='Furnitures' loading='lazy'/>
					<img src='https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/21/914b0e5b-a111-4614-90c1-d3ae063d5ae0.png' alt='Style & Fashion' loading='lazy' />
				</div>
			</div>
		</section>
	);
}

export default Section;
