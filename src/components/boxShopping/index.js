import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { addProduct, removeProduct } from '../../store/actions';

import './styles.css';

function BoxShopping({ props, add, remove }) {
	const [state, setState] = useState(0);

	const handleState = useCallback((value) => {
		if (state >= 0 && value > state) {
			add(
				props.index,
				{
					id: props.uniqueId,
					name: props.name,
					image: props.imageUrl,
					price: props.price
				},
				+state + 1
			);
		} else if (state >= 0 && value < state) {
			remove(
				props.index,
				{
					id: props.uniqueId,
					name: props.name,
					image: props.imageUrl,
					price: props.price
				},
				+state - 1
			);
		} else if (state > 0 && +value === 0) {
			remove(
				props.index,
				{
					id: props.uniqueId,
					name: props.name,
					image: props.imageUrl,
					price: props.price
				},
				+state - 1
			);
		}

		setState(() => value);
	});

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

				<div className='controle'>
					<label htmlFor={props.uniqueId}>Quantidade:</label>
					<input
						type='number'
						min={0}
						max={99}
						step={1}
						id={props.uniqueId}
						value={state}
						onChange={(e) => handleState(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	modules: state.modules,
	props
});

const mapDispatchToProps = (dispatch) => ({
	add: (index, produto, quantidade) =>
		dispatch(addProduct(index, produto, quantidade)),
	remove: (index, produto, quantidade) =>
		dispatch(removeProduct(index, produto, quantidade))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxShopping);
