import { initCurrencySwitcher } from '../actions/actions';
import { makeRequest, serverURL } from '../../api/makeRequest';
import { getCurrencies } from '../../api/query';

export const fetchCurrencies = () => {
	return (dispatch) => {
		makeRequest(serverURL, getCurrencies)
			.then((res) => res.json())
			.then((data) => {
				const { currencies } = data.data;
				dispatch(initCurrencySwitcher(currencies));
			})
			.catch(console.log);
	};
};
