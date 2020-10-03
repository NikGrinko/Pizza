import { getPizzas } from '../../api/api';


const SET_LOADED = 'SET_LOADED';
const SET_PIZZAS = 'SET_PIZZAS';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch({
        type: SET_LOADED,
        payload: false
    });
    getPizzas(category, sortBy).then((response) => {
        dispatch(setPizzas(response.data))
    })
}

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items,
});