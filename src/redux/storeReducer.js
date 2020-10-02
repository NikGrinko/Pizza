import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cartReducer from './cartReducer';
import filtersReducer from './filtersReducer';
import pizzasReducer from './pizzasReducer';


let reducers = combineReducers({
    cart: cartReducer,
    filters: filtersReducer,
    pizzas: pizzasReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(
    applyMiddleware(thunkMiddleware)));



window.__store__ = store;


export default store;