import React from 'react';
import { useHistory } from 'react-router-dom';
import BoxShopping from '../../components/boxShopping';

import { connect } from 'react-redux';

import './styles.css';

function Landing({ modules }) {
	const history = useHistory();

	const comprar = () => {
		history.push('/pagamento');
	};

	return (
		<div className='landingContainer'>
			<div className='card'>
				{modules.map((item, index) => {
					return (
						<BoxShopping
							index={index}
							key={item.uniqueId}
							imageUrl={item.imageUrl}
							name={item.name}
							price={item.price}
							uniqueId={item.uniqueId}
						/>
					);
				})}
			</div>
			<div className='botaoComprar'>
				<button type='button' onClick={() => comprar()}>
					comprar
				</button>
			</div>
		</div>
	);
}

export default connect((state) => ({ modules: state.modules }))(Landing);
