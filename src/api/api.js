import axios from 'axios';

export const getPizzas = (category, sortBy) => {
    return axios
        .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)

}
