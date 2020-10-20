import { createStore } from 'redux';
import data from '../assets/api/data.json';

const INITIAL_STATE = {
	buyModules: Array(data.items.length).fill(0),
	modules: [...data.items]
};

function reducer(state = INITIAL_STATE, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_PRODUCT':
			state.buyModules[action.index] = [
				action.quantidade,
				action.produto
			];
			break;
		case 'REMOVE_PRODUCT':
			state.buyModules[action.index] = [
				action.quantidade,
				action.produto
			];
			break;
		case 'CLEAN_PRODUCTS':
			state.buyModules = Array(data.items.length).fill(0);
			break;

		default:
			state = {
				...state
			};
			break;
	}
	console.log(state);
	return state;
}

const store = createStore(reducer);

export default store;
