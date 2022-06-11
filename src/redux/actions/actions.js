import { handleBodyScroll } from '../../helpers/handleBodyScroll';
import {
	SWITCH_ACTUAL_CURRENCY,
	INIT_NAVBAR,
	INIT_APP,
	RENDER_CATEGORY_PAGE,
	RENDER_PRODUCT_PAGE,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
	INCREASE_ITEMS_QUANTATY,
	DECREASE_ITEMS_QUANTATY,
	OPEN_OVERLAY,
	CLOSE_OVERLAY,
	UPDATE_ACTUAL_CURRENCY_IN_CART,
	SUM_TOTAL_PRICE,
	NEXT_PICTURE,
	PREV_PICTURE,
	INIT_GALLERY,
	OPEN_CURRENCY_LIST,
	CLOSE_CURRENCY_LIST,
	CLEAR_PRODUCT_PAGE,
	ADD_NOTIFICATION,
	DELETE_NOTIFICATION,
	SHOW_ALERT,
	CLOSE_ALERT,
	SET_CART_DATA_AFTER_PAGE_RELOAD,
	CLEAR_CART_AFTER_ORDER_SUBMIT,
} from '../types/types';

export const initApp = (initialData) => {
	return {
		type: INIT_APP,
		payload: { initialData },
	};
};
export const setCartDataAfterReload = (cart) => ({
	type: SET_CART_DATA_AFTER_PAGE_RELOAD,
	payload: {
		cart,
	}
});
export const renderCategoryPage = (products) => ({
	type: RENDER_CATEGORY_PAGE,
	payload: { products },
});
export const switchActualCurrency = (newCurrency) => ({
	type: SWITCH_ACTUAL_CURRENCY,
	payload: { newCurrency },
});
export const openCurrencyList = () => ({
	type: OPEN_CURRENCY_LIST,
});
export const closeCurrencyList = () => ({
	type: CLOSE_CURRENCY_LIST,
});
export const initNavbar = (categories) => ({
	type: INIT_NAVBAR,
	payload: { categories },
});

export const addNotification = (type, message) => ({
	type: ADD_NOTIFICATION,
	payload: {
		type,
		message,
	}
});
export const deleteNotification = (toastId) => ({
	type: DELETE_NOTIFICATION,
	payload: { toastId }
});

//=================== cart actions ================//
export const addItemToCart = (item, option = null) => ({
		type: ADD_ITEM_TO_CART,
		payload: {item, option}
});
export const removeItemToCart = (itemId) => ({
	type: REMOVE_ITEM_FROM_CART,
	payload: {itemId}
});
export const increaseItemsQuantaty = (id) => ({
	type: INCREASE_ITEMS_QUANTATY,
	payload: {id},
});
export const decreaseItemsQuantaty = (id) => ({
	type: DECREASE_ITEMS_QUANTATY,
	payload: {id},
});
export const updateActualCurrencyInCart = (currency) => ({
	type: UPDATE_ACTUAL_CURRENCY_IN_CART,
	payload: {currency},
});
export const sumTotalPrice = () => ({
	type: SUM_TOTAL_PRICE,
});
export const clearCartAfterOrderSubmit = () => ({
	type: CLEAR_CART_AFTER_ORDER_SUBMIT,
})
//================== cart overlay actions =============//
export const openOverlay = () => {
	handleBodyScroll.disable();

	return {
		type: OPEN_OVERLAY,
	}
};
export const closeOverlay = () => {
	handleBodyScroll.enable();

	return {
		type: CLOSE_OVERLAY,
	}
};

//================= gallery actions ==================//
export const initGallery = (picsQuantaty) => ({
	type: INIT_GALLERY,
	payload: { picsQuantaty },
});
export const nextPicture = () => ({
	type: NEXT_PICTURE,
});
export const prevPicture = () => ({
	type: PREV_PICTURE,
});

//================= product page ===================//
export const renderProductPage = (product) => ({
	type: RENDER_PRODUCT_PAGE,
	payload: { product },
});
export const clearProductPage = () => ({
	type: CLEAR_PRODUCT_PAGE,
});

//================ alert ===========================//
export const showAlert = (message, type) => {
	handleBodyScroll.disable();
	
	return {
		type: SHOW_ALERT,
		payload: {
			message,
			type,
		}
	}
};
export const closeAlert = () => {
	handleBodyScroll.enable();

	return {
		type: CLOSE_ALERT,
	}
};