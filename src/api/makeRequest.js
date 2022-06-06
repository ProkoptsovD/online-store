import serverURL from './serverURL';

/**
 * @param {String} url  // server url to fetch data from
 * @param {Object} requestConfig // object with request parametrs
 * @returns {Promise} not parsed promise with data from server
 */
const makeRequest = async (queryParam) => {
	try {
		console.log(queryParam);
		const headers = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(queryParam),
		};
		return fetch(serverURL, headers);
	} catch (err) {
		console.log(err);
	}
};

export { makeRequest, serverURL };
