const SET_CATEGORY = 'SET_CATEGORY';

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
    }
    return state;
}
export default filtersReducer;


