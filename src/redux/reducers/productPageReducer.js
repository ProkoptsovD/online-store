import { CLEAR_PRODUCT_PAGE, RENDER_PRODUCT_PAGE } from '../types/types';

const initialState = {
    product: null,
}

export const productPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_PRODUCT_PAGE:
            return {
                ...state,
                product: action.payload.product,
            }
        case CLEAR_PRODUCT_PAGE:
            return {
                ...state,
                product: null,
            }
        default:
            return state;
    }
}