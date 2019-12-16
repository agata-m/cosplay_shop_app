import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import reducers
import items from './redux';

//combine reducers
const rootReducer = combineReducers({
    items,
});

//create store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;