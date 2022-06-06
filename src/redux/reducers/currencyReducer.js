import { CLOSE_CURRENCY_LIST, INIT_CURRENCY_SWITCHER, OPEN_CURRENCY_LIST, SWITCH_ACTUAL_CURRENCY } from '../types/types';

const initialState = {
	actualCurrency: {
		index: 0,
	},
	isOpened: false,
};

export const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_ACTUAL_CURRENCY:
			const { newCurrency } = action.payload;

			return {
				...state,
				actualCurrency: {
					...state.actualCurrency,
					index: +newCurrency,
				},
			};
		case OPEN_CURRENCY_LIST:
			return {
				...state,
				isOpened: true,
			};
		case CLOSE_CURRENCY_LIST:
			return {
				...state,
				isOpened: false,
			};
		default:
			return state;
	}
};
