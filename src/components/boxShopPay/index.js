import React from 'react';

import './styles.css';

function BoxShopPay(props) {
	return (
		<div className='cardWrapper'>
			<div className='cardBox'>
				<img src={props.imageUrl} alt={props.name} />
			</div>
			<div className='description'>
				<h3>{props.name}</h3>
				<p>
					R${' '}
					{(props.price / 100)
						.toFixed(2)
						.toString()
						.replace('.', ',')}
				</p>
			</div>
		</div>
	);
}

export default BoxShopPay;
