import {
	SET_CATEGORYS,
	ADD_PRODUCT,
	SET_PRODUCTS,
	SET_PRODUCT_TARGET,
	ADD_PRODUCT_TO_CART,
	ADD_PRODUCT_TO_CART_LIST,
	SET_PRODUCTS_TO_CART,
	SET_PRODUCTS_TO_CART_LIST,
} from '../constants';

const initialState = {
	categorys: [],
	shoppingCart: [],
	shoppingCartList: [],
	products: [],
	productTarget: null,
};

const global = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CATEGORYS:
			return {
				...state,
				categorys: payload,
			};
		case ADD_PRODUCT:
			return {
				...state,
				shoppingCart: [...state.shoppingCart, payload],
			};
		case SET_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case SET_PRODUCT_TARGET:
			return {
				...state,
				productTarget: payload,
			};

		case SET_PRODUCTS_TO_CART:
			return {
				...state,
				shoppingCart: payload,
			};
		case ADD_PRODUCT_TO_CART:
			return {
				...state,
				shoppingCart: [...state.shoppingCart, payload],
			};
		case ADD_PRODUCT_TO_CART_LIST:
			return {
				...state,
				shoppingCartList: [...state.shoppingCartList, payload],
			};
		case SET_PRODUCTS_TO_CART_LIST:
			return {
				...state,
				shoppingCartList: payload,
			};
		default:
			return state;
	}
};

export default global;
