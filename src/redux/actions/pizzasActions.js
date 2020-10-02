import axios from 'axios';


const SET_LOADED = 'SET_LOADED';
const SET_PIZZAS = 'SET_PIZZAS';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch({
        type: SET_LOADED,
        payload: false
    });
    axios
        .get('http://localhost:3001/pizzas')
        .then(({ data }) => {
            dispatch(setPizzas(data))
        })
}

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items,
});