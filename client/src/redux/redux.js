import axios from 'axios';
import { API_URL, BASE_URL } from '../config';

// SELECTORS
export const getItems = ({ items }) => items.data;
export const getRequest = ({ items }) => items.request;
export const getSingleItem = ({ items }) => items.singleItem;
export const getPages = ({ items }) => Math.ceil(items.amount / items.itemsPerPage);
export const presentPage = ({ items }) => items.presentPage;

// ACTION NAME CREATOR
const reducerName = 'items';
const createActionName = name => `app/${reducerName}/${name}`;

//ACTIONS
export const LOAD_ITEMS = createActionName('LOAD_ITEMS');
export const LOAD_SINGLE_ITEM = createActionName('LOAD_SINGLE_ITEM');
export const LOAD_ITEMS_PAGE = createActionName('LOAD_ITEMS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

export const loadItems = payload => ({ payload, type: LOAD_ITEMS});
export const loadSingleItem = payload => ({ payload, type: LOAD_SINGLE_ITEM });
export const loadItemsByPage = payload => ({ payload, type: LOAD_ITEMS_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

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

export const loadItemsByPageRequest = (page) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            const itemsPerPage = 10;
            const startAt = (page - 1) * itemsPerPage;
            const limit = itemsPerPage;

            let res = await axios.get(`${BASE_URL}${API_URL}/items/range/${startAt}/${limit}`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));

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
    itemsPerPage: 2,
    presentPage: 1,
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
        default:
            return statePart;
    }
};