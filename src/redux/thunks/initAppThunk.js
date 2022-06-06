import { productAPI } from '../../services/product-api';
import { initApp } from '../actions/actions';

export const initAppThunk = () => {
	return (dispatch) => {
		productAPI.getDataToInitApp().then(data => {
			const { categories, currencies } = data;
			dispatch(initApp({ categories, currencies }));
		})
	};
};
