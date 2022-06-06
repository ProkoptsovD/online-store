import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { currencyReducer } from './reducers/currencyReducer';
import { categoryPageReducer } from './reducers/categoryPageReducer';
import { cartReducer } from './reducers/cartReducer';
import { overlayReducer } from './reducers/overlayReducer';
import { galleryReducer } from './reducers/galleryReducer';
import { productPageReducer } from './reducers/productPageReducer';
import { toasterReducer } from './reducers/toasterReducer';
import { alertReducer } from './reducers/alertReducer';

export const rootReducer = combineReducers({
	initial: appReducer,
	currency: currencyReducer,
	category: categoryPageReducer,
	cart: cartReducer,
	overlay: overlayReducer,
	gallery: galleryReducer,
	productPage: productPageReducer,
	toast: toasterReducer,
	alert: alertReducer,
});
