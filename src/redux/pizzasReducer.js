
const SET_LOADED = 'SET_LOADED';
const SET_PIZZAS = 'SET_PIZZAS';

const initialState = {
    isLoaded: false,
    items: []
}

const pizzasReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            };
            break;
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };
            break;
    }

    return state;
}
export default pizzasReducer;