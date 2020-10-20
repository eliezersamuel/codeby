import React, { useEffect, useState } from 'react';
import BoxShopPay from '../../components/boxShopPay';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { cleanProducts } from '../../store/actions';

import './styles.css';

function Pagamento({ modules, clean }) {
	const history = useHistory();

	const [precoTotal, setPrecoTotal] = useState(0);

	useEffect(() => {
		let result = modules.buyModules.map((item) => {
			if (item) {
				return item[0] * (+item[1].price / 100).toFixed(3);
			} else {
				return 0;
			}
		});
		setPrecoTotal(result.reduce((acc, curr) => acc + curr, 0));
	}, [modules.buyModules]);

	function handlerButtonPayment() {
		clean();
		history.push('/');
	}

	return (
		<div className='pagamentoContainer'>
			<h1>Meu carrinho</h1>
			<div className='containerProdutosShop'>
				{modules.buyModules.map((item) => {
					return (
						item[0] && (
							<BoxShopPay
								key={item[1].id}
								imageUrl={item[1].image}
								name={item[1].name}
								price={item[1].price * item[0]}
							/>
						)
					);
				})}
			</div>
			<div className='containerPrecoFinal'>
				<div className='total'>
					<h2>TOTAL:</h2>
					<h2>R$ {`${precoTotal.toFixed(2)}`.replace('.', ',')}</h2>
				</div>
				<div className='freteGratis'>
					{precoTotal > 10 && (
						<h3>Parabéns, sua compra tem frete grátis !</h3>
					)}
				</div>
			</div>

			<div className='containerButton'>
				<button type='button' onClick={() => handlerButtonPayment()}>
					Finalizar compra
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	modules: state
});

const mapDispatchToProps = (dispatch) => ({
	clean: () => dispatch(cleanProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagamento);
