import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const SEARCH_NAME = 'SEARCH_NAME';
export const CLEAN = 'CLEAN';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ORDERBYAZ = 'ORDERBYAZ';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const GET_PRODUCT_RATING = 'GET_PRODUCT_RATING';
export const PRICE_FILTER = 'PRICE_FILTER';
export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const GET_FAVORITES_GMAIL = 'GET_FAVORITES_GMAIL';
export const ADD_FAVORITE_GMAIL = 'ADD_FAVORITE_GMAIL';
export const REMOVE_FAVORITE_GMAIL = 'REMOVE_FAVORITE_GMAIL';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const CREATE_USER = 'CREATE_USER';
// ------- CART ACTIONS ----------------
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ONE_FROM_CART = 'DELETE_ONE_FROM_CART';
export const DELETE_ALL_FROM_CART = ' DELETE_ALL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const PAYMENT_STRIPE = 'PAYMENT_STRIPE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_AUTH0 = 'LOGIN_AUTH0';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const DECREMENT_STOCK = 'DECREMENT_STOCK';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL';

export const getUserByEmail = (payload) => {
	return async function (dispatch) {
		const response = await axios.post(
			'http://localhost:3001/user/email',
			payload
		);
		return dispatch({
			type: GET_USER_BY_EMAIL,
			payload: response.data,
		});
	};
};

export const getAllProducts = () => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/product');
		return dispatch({
			type: GET_ALL_PRODUCTS,
			payload: response.data.products,
		});
	};
};

export const getCategories = () => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/category');
		return dispatch({
			type: GET_CATEGORIES,
			payload: response.data.categories,
		});
	};
};

export const getProductDetail = (id) => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/product/' + id);
		return dispatch({
			type: GET_PRODUCT_DETAIL,
			payload: response.data,
		});
	};
};

// GET PRODUCT BY PRICE MIN AND MAX

// export const priceFilter = (price) => {
//   return async function (dispatch) {
//     const response = await axios.get("http://localhost:3001/product/price/" + price);
//     return dispatch({
//       type: PRICE_FILTER,
//       payload: response.data.products,
//     });
//   };
// };

/* export const priceFilter = (price) => {
  return {
    type: PRICE_FILTER,
    payload: price,
  };
}; */

// GET PRODUCT BY RATING

export const getProductRating = (rating) => {
	return {
		type: GET_PRODUCT_RATING,
		payload: rating,
	};
};

// GET PRODUCT BY PRICE
export const getPrice = (price) => {
	return {
		type: PRICE_FILTER,
		payload: price,
	};
};

export const searchName = (name) => {
	return {
		type: SEARCH_NAME,
		payload: name,
	};
};
export const clean = (payload) => {
	return {
		type: CLEAN,
		payload,
	};
};

export const ClearDetail = () => {
	return {
		type: 'CLEAR_DETAIL',
	};
};

export const createProduct = (payload) => {
	return async function (dispatch) {
		const response = await axios.post('http://localhost:3001/product', payload);
		return response;
	};
};

export const updateProduct = (payload) => {
	let id = payload.id;
	return async function (dispatch) {
		const response = await axios.put(
			`http://localhost:3001/product/${id}`,
			payload
		);
		return dispatch({
			type: UPDATE_PRODUCT,
			payload: response.data,
		});
	};
};

export const deleteProduct = (id) => {
	return async function (dispatch) {
		const response = await axios.delete('http://localhost:3001/product/' + id);
		return dispatch({
			type: DELETE_PRODUCT,
			payload: response.data,
		});
	};
};

export const orderaz = (payload) => {
	return {
		type: ORDERBYAZ,
		payload: payload,
	};
};

export const filterCategory = (payload) => {
	return {
		type: FILTER_CATEGORY,
		payload: payload,
	};
};

// ------- favoritos users db -----------
export const getFavorites = (userEmail) => {
	return async function (dispatch) {
		const response = await axios.get(
			`http://localhost:3001/favorites/?userEmail=${userEmail}`
		);
		return dispatch({
			type: GET_FAVORITES,
			payload: response.data,
		});
	};
};

export const addFavorite = (userEmail, productId) => {
	return async function (dispatch) {
		const response = await axios.post(
			`http://localhost:3001/favorites/?userEmail=${userEmail}&productId=${productId}`
		);
		return dispatch({
			type: ADD_FAVORITE,
			payload: response.data,
		});
	};
};

export const removeFavorite = (userEmail, productId) => {
	return async function (dispatch) {
		const response = await axios.delete(
			`http://localhost:3001/favorites/?userEmail=${userEmail}&productId=${productId}`
		);
		return dispatch({
			type: REMOVE_FAVORITE,
			payload: response.data,
		});
	};
};

// ------- favoritos users gmail -------

export const getFavoritesGmail = (userEmail) => {
	return async function (dispatch) {
		const response = await axios.get(
			`http://localhost:3001/gmailfavs?userEmail=${userEmail}`
		);
		return dispatch({
			type: GET_FAVORITES_GMAIL,
			payload: response.data,
		});
	};
};

export const addFavoriteGmail = (userEmail, productId) => {
	return async function (dispatch) {
		const response = await axios.post(
			`http://localhost:3001/gmailfavs?userEmail=${userEmail}&productId=${productId}`
		);
		return dispatch({
			type: ADD_FAVORITE_GMAIL,
			payload: response.data,
		});
	};
};

export const removeFavoriteGmail = (userEmail, productId) => {
	return async function (dispatch) {
		const response = await axios.delete(
			`http://localhost:3001/gmailfavs?userEmail=${userEmail}&productId=${productId}`
		);
		return dispatch({
			type: REMOVE_FAVORITE_GMAIL,
			payload: response.data,
		});
	};
};
// ---------------------------
export const getAllUsers = () => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/user/');
		return dispatch({
			type: GET_ALL_USERS,
			payload: response.data,
		});
	};
};

export const getUserById = (id) => {
	return async function (dispatch) {
		const response = await axios.get(`http://localhost:3001/user/${id}`);
		return dispatch({
			type: GET_USER_BY_ID,
			payload: response.data,
		});
	};
};
export function createUser(payload) {
	return async function (dispatch) {
		const info = await axios.post('http://localhost:3001/user', payload);
		dispatch({
			type: CREATE_USER,
			payload: info.data,
		});
	};
}

export const checkout = (payload) => {
	console.log(payload, 23);
	return async function (dispatch) {
		const response = await axios.post('http://localhost:3001/stripe', payload);
		return dispatch({
			type: PAYMENT_STRIPE,
			payload: response.data,
		});
	};
};

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		payload: id,
	};
};

export const deleteOneFromCart = (id) => {
	return {
		type: DELETE_ONE_FROM_CART,
		payload: id,
	};
};

export const deleteAllFromCart = (id) => {
	return {
		type: DELETE_ALL_FROM_CART,
		payload: id,
	};
};

export function increaseQuantity(id) {
	return {
		type: INCREASE_QUANTITY,
		payload: id,
	};
}

export const clearCart = (id) => {
	return {
		type: CLEAR_CART,
		payload: id,
	};
};

export const loginUser = (payload) => {
	return async function (dispatch) {
		dispatch({ type: LOGIN_REQUEST });

		try {
			const response = await axios.post(
				'http://localhost:3001/login/login',
				payload
			);

			window.localStorage.setItem(
				'loggedUser',
				JSON.stringify({ email: payload.email, password: payload.password })
			);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: response,
			});
		} catch (error) {
			dispatch({
				type: LOGIN_FAILURE,
				error: error,
			});
		}
	};
};

export function logged(payload) {
	return {
		type: LOGIN_AUTH0,
		payload,
	};
}

export const logoutUser = () => {
	return (dispatch) => {
		window.localStorage.clear();
		dispatch({ type: LOGOUT });
	};
};

export const userProfile = () => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/login/profile');
		dispatch({
			type: GET_USER_PROFILE,
			payload: response.data.token,
		});
	};
};

export const decrementStock = (productId) => {
	return {
		type: DECREMENT_STOCK,
		productId,
	};
};

export const createCategories = (payload) => {
	console.log(payload);
	return async function (dispatch) {
		const response = await axios.post('http://localhost:3001/category', {
			name: payload.name,
		});
		return response;
	};
};

export const updateCategory = (payload) => {
	let id = payload.id;
	return async function (dispatch) {
		const response = await axios.put(
			`http://localhost:3001/category/${id}`,
			payload
		);
		dispatch({
			type: UPDATE_CATEGORY,
			payload: response.data,
		});
	};
};

export const deleteCategory = (id) => {
	return async function (dispatch) {
		const response = await axios.delete('http://localhost:3001/category/' + id);
		dispatch({
			type: DELETE_CATEGORY,
			payload: response.data,
		});
	};
};

export const updateUser = (id, updatedUser) => {
	return async function (dispatch) {
		try {
			const response = await axios.put(
				`http://localhost:3001/user/${id}`,
				updatedUser
			);
			dispatch({
				type: UPDATE_USER,
				payload: response.data,
			});
			dispatch(getAllUsers());
			return Promise.resolve();
		} catch (error) {
			return Promise.reject(error);
		}
	};
};

// DELETE USER
export const deleteUser = (id) => {
	return async function (dispatch) {
		const response = await axios.delete(`http://localhost:3001/user/${id}`);
		return dispatch({
			type: DELETE_USER,
			payload: response.data,
		});
	};
};

export const addGmailuser = (payload) => {
	return async function (dispatch) {
		const response = await axios.post(
			'http://localhost:3001/gmailuser',
			payload
		);
		return response;
	};
};
