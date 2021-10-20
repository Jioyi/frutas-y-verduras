import axios from 'axios';
const SERVER_API_URL = 'http://localhost:3001';

const API = axios.create({
	baseURL: SERVER_API_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

/************** CATEGORY ROUTES ******/
export const getCategorys = () => API.get('/category');

/************** PRODUCT ROUTES ******/
export const getProductForCategory = (CategoryID) => API.get(`/product/${CategoryID}`);
export const getProductForID = (ID) => API.get(`/product/forID/${ID}`);