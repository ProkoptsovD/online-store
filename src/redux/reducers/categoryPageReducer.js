import { RENDER_CATEGORY_PAGE } from '../types/types';

const initialState = {};

export const categoryPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case RENDER_CATEGORY_PAGE:
			const { name, products } = action.payload.products;
			return {
				...state,
				[name] : products,
			};
		default:
			return state;
	}
};
