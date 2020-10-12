const SET_CATEGORY = 'SET_CATEGORY';
const SET_SORT_BY = 'SET_SORT_BY';

const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc',
    },
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        case SET_SORT_BY:
            return {
                ...state,
                sortBy: {
                    type: action.payload.type,
                    order: action.payload.order
                }
            }

        default:
            return state;
    }

}
export default filtersReducer;


