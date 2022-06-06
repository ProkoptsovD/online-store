import { renderCategoryPage } from '../actions/actions';
import { productAPI } from '../../services/product-api';

export const setProductsToPageThunk = (categoryName) => {
	return (dispatch) => {
		productAPI.getProductsByCategoryName(categoryName).then((products) => {
				dispatch(renderCategoryPage(products));
			})
			.catch(console.log);
	};
};
