import { initNavbar } from '../actions/actions';
import { makeRequest } from '../../api/makeRequest';
import { getAllCategories } from '../../api/query';

export const fetchAllCategories = () => {
	return (dispatch) => {
		makeRequest(getAllCategories)
			.then((res) => res.json())
			.then((parsedResponse) => {
				const { categories } = parsedResponse.data;
				dispatch(initNavbar(categories));
			})
			.catch(console.log);
	};
};
