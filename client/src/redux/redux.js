import axios from 'axios';
import { API_URL, BASE_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'items';
const createActionName = name => `app/${reducerName}/${name}`;

// SELECTORS
export const getItems = ({ items }) => items.data;
export const getRequest = ({ items }) => items.request;
export const getSingleItem = ({ items }) => items.singleItem;

export const getPages = ({ items }) => Math.ceil(items.amount / items.itemsPerPage);
export const getPresentPage = ({ items }) => items.presentPage;

export const getItemsSort = ({ items }) => { 

    const sortedItems = [...items.data].sort((a, b) => {

        if (a[items.key] > b[items.key]) return items.direction === 'asc' ? 1 : -1;
        if (a[items.key] < b[items.key]) return items.direction === 'asc' ? -1 : 1;
        return 0;

    });

    return sortedItems;
};

export const getItemsCount = ({ items }) => items.amount;
export const getCart = ({ items }) => items.cart;
export const getTotalPrice = ({ items }) => items.totalPrice;
export const getDiscountStatus = ({ items }) => items.discountStatus;

//ACTIONS
export const LOAD_ITEMS = createActionName('LOAD_ITEMS');
export const LOAD_SINGLE_ITEM = createActionName('LOAD_SINGLE_ITEM');
export const LOAD_ITEMS_PAGE = createActionName('LOAD_ITEMS_PAGE');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

export const SORT_ITEMS = createActionName('SORT_ITEMS');
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const DELETE_FROM_CART = createActionName('DELETE_FROM_CART');
export const ADD_ITEM_QUANTITY = createActionName('ADD_ITEM_QUANTITY');
export const MINUS_ITEM_QUANTITY = createActionName('MINUS_ITEM_QUANTITY');
export const CALCULATE_PRICE = createActionName('CALCULATE_PRICE');
export const ADD_DISCOUNT_CODE = createActionName('ADD_DISCOUNT_CODE');

export const loadItems = payload => ({ payload, type: LOAD_ITEMS});
export const loadSingleItem = payload => ({ payload, type: LOAD_SINGLE_ITEM });
export const loadItemsByPage = payload => ({ payload, type: LOAD_ITEMS_PAGE });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

export const sortItems = payload => ({ payload, type: SORT_ITEMS });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART });
export const addItemQuantity = id => ({ id, type: ADD_ITEM_QUANTITY });
export const minusItemQuantity = id => ({ id, type: MINUS_ITEM_QUANTITY });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
export const addDiscountCode = () => ({ type: ADD_DISCOUNT_CODE });


//INITIAL STATE
const initialState = {
    data: [],
    singleItem: [],
    request: {
        pending: false,
        error: null,
        success: null,
    },
    amount: 0,
    itemsPerPage: 4,
    itemsPage: 1,
    cart: [],
    key: '',
    direction: '',
    totalPrice: 0,
    discount: 1,
    discountStatus: false,
};

//REDUCER
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {

        case LOAD_ITEMS:

            return { ...statePart, data: action.payload };

        case LOAD_SINGLE_ITEM:

            return { ...statePart, singleItem: action.payload };

        case LOAD_ITEMS_PAGE:

            return {
                ...statePart,
                itemsPerPage: action.payload.itemsPerPage,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.items],
            };

        case START_REQUEST:

            return { ...statePart, request: { pending: true, error: null, success: null }};
        
        case END_REQUEST:

            return { ...statePart, request: {pending: false, error: null, success: true }};
        
        case ERROR_REQUEST:

            return { ...statePart, request: { pending: false, error: action.error, success: false }};
        
        case RESET_REQUEST:

            return { ...statePart, request: { pending: false, error: null, success: null }};    
        
        case SORT_ITEMS:

            return {
                ...statePart,
                key: action.payload.key,
                direction: action.payload.direction,
            };

        case ADD_TO_CART:

            const addedItem = action.payload;
            addedItem.quantity += 1;
            
            return {
                ...statePart,
                cart: statePart.cart.concat(addedItem)
            };

        case DELETE_FROM_CART:
            
            const deleteItemCart = statePart.cart.filter(item => item.id !== action.payload);

            return { ...statePart, cart: deleteItemCart};

        case ADD_ITEM_QUANTITY:

            const plusItem = statePart.cart.find(item => item.id === action.id);
            plusItem.quantity += 1;
            const plusItemCart = statePart.cart.map(item => item.id === action.id ? plusItem : item);
            
            return {
                ...statePart,
                cart: plusItemCart,
            };

        case MINUS_ITEM_QUANTITY:

            const minusItem = statePart.cart.find(item => item.id === action.id);
            minusItem.quantity -= 1;
            const minusItemCart = statePart.cart.map(item => item.id === action.id ? minusItem : item);

            return {
                ...statePart,
                cart: minusItemCart,
            }

        case ADD_DISCOUNT_CODE:

            return {
                ...statePart,
                discount: 0.9,
                discountStatus: true,
            }

        case CALCULATE_PRICE:

            let roundedPrice;

            if(statePart.cart.length !== 0) {
                let itemsTotalPrice = statePart.cart.map(cartItem => cartItem.item ? cartItem.price * cartItem.quantity : cartItem.price * cartItem.quantity);
                itemsTotalPrice = itemsTotalPrice.reduce((previousPrice, newPrice) => previousPrice + newPrice);
                const totalPriceWithDiscount = statePart.discountStatus ? itemsTotalPrice * statePart.discount : itemsTotalPrice;
                roundedPrice = parseFloat(totalPriceWithDiscount.toFixed(2));

            } else {
                roundedPrice = 0;
            }

            return {
                ...statePart,
                totalPrice: roundedPrice,
            }

        default:
            return statePart;
    }
};

//THUNKS
export const loadItemsRequest = () => {
    return async dispatch => {

        dispatch(startRequest());
        try {

            let res = await axios.get(`${BASE_URL}${API_URL}/items`);
            dispatch(loadItems(res.data));  
            dispatch(endRequest());

		} catch (e) {
            dispatch(errorRequest(e.message));
		}
	};
};

export const loadSingleItemRequest = (id) => {
    return async dispatch => {
        
        dispatch(startRequest());

        try {
            let res = await axios.get(`${BASE_URL}${API_URL}/items/${id}`);
            dispatch(loadSingleItem(res.data));
            dispatch(endRequest());
        } catch(e) {
            dispatch(errorRequest(e.message));
        };
    }
};

export const loadItemsByPageRequest = (page, itemsPerPage) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            const startAt = (page - 1) * itemsPerPage;
            const limit = itemsPerPage;

            let res = await axios.get(`${BASE_URL}${API_URL}/items/range/${startAt}/${limit}`);

            const payload = {
                items: res.data.items,
                amount: res.data.amount,
                itemsPerPage,
                presentPage: page,
            };

            dispatch(loadItemsByPage(payload));
            dispatch(endRequest());

        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    }
}