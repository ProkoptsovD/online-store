import { renderProductPage } from '../actions/actions';
import { productAPI } from '../../services/product-api';

export const getProductByIdThunk = (id) => {
	return (dispatch) => {
		productAPI.getProductById(id).then(product =>
				dispatch(renderProductPage(product)))
			.catch(console.log);
	};
};
