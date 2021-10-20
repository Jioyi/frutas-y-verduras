import * as API from '../API';
import {
	SET_CATEGORYS,
	SET_PRODUCTS,
	SET_PRODUCT_TARGET,
	SET_PRODUCTS_TO_CART,
	ADD_PRODUCT_TO_CART,
	ADD_PRODUCT_TO_CART_LIST,
	SET_PRODUCTS_TO_CART_LIST,
} from '../constants';
import store from './../store';

export const getCategorys = () => {
	return async (dispatch) => {
		try {
			const response = await API.getCategorys();
			if (response.status === 200) {
				dispatch(setCategorys(response.data.categorys));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getProductForCategory = (ID) => {
	return async (dispatch) => {
		try {
			const response = await API.getProductForCategory(ID);
			if (response.status === 200) {
				dispatch(setProducts(response.data.products));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getProductForID = (ID) => {
	return async (dispatch) => {
		try {
			const response = await API.getProductForID(ID);
			if (response.status === 200) {
				dispatch(setProductTarget(response.data.product));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const setCategorys = (array) => {
	return {
		type: SET_CATEGORYS,
		payload: array,
	};
};

export const setProducts = (array) => {
	return {
		type: SET_PRODUCTS,
		payload: array,
	};
};

export const setProductTarget = (object) => {
	return {
		type: SET_PRODUCT_TARGET,
		payload: object,
	};
};
export const addProduct = (object) => {
	return async (dispatch) => {
		if (object.quantity > 0) {
			dispatch(addProductToCart(object));
			dispatch(addProductToCartList(object.ID));
		}
	};
};

export const addProductToCart = (object) => {
	return {
		type: ADD_PRODUCT_TO_CART,
		payload: object,
	};
};

export const setProductsToCart = (object) => {
	return {
		type: SET_PRODUCTS_TO_CART,
		payload: object,
	};
};

export const addProductToCartList = (ID) => {
	return {
		type: ADD_PRODUCT_TO_CART_LIST,
		payload: ID,
	};
};

export const setProductsToCartList = (object) => {
	return {
		type: SET_PRODUCTS_TO_CART_LIST,
		payload: object,
	};
};

export const removeProductToCart = (ID) => {
	return async (dispatch) => {
		const { shoppingCart, shoppingCartList } = store.getState().global;

		let newShoppingCart = shoppingCart.filter((item) => item.ID !== ID);
		dispatch(setProductsToCart(newShoppingCart));

		let newShoppingCartList = shoppingCartList.filter((item) => item !== ID);
		dispatch(setProductsToCartList(newShoppingCartList));
	};
};
