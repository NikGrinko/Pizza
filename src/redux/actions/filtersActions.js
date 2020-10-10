const SET_CATEGORY = 'SET_CATEGORY';
const SET_SORT_BY = 'SET_SORT_BY';

export const setCategory = (index) => ({
    type: SET_CATEGORY,
    payload: index
});

export const setSortBy = ({ type, order }) => ({
    type: SET_SORT_BY,
    payload: { type, order }
})