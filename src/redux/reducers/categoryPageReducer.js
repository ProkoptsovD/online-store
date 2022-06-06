import { INIT_CURRENT_CATEGORY, RENDER_CATEGORY_PAGE } from '../types/types';

const initialState = {
	products: [],
	currentPage: '',
};

export const categoryPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_CURRENT_CATEGORY:
			return {
				...state,
				currentPage: action.payload.currentPage,
			};
		case RENDER_CATEGORY_PAGE:
			return {
				...state,
				currentPage: action.payload.products.name,
				products: action.payload.products.products,
			};
		default:
			return state;
	}
};
