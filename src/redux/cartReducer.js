const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
//we calculate the price of each pizza
const getLocalTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
//counting price in a new object
const totalPrice = (state) => {
    let sum = 0;
    for (let item of Object.values(state)) {
        sum += item.totalPrice
    }
    return sum;
}
const totalCount = (state) => {
    let sum = 0;
    for (let item of Object.values(state)) {
        sum += item.items.length;
    }
    return sum;
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART: {

            //checking whether there is already a pizza id
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            //creating a new object   
            const newItem = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getLocalTotalPrice(currentPizzaItems)
                }
            }
            //get the total price
            const price = totalPrice(newItem)
            //get the total count
            const count = totalCount(newItem)
            return {
                ...state,
                items: newItem,
                totalPrice: price,
                totalCount: count
            }
        }
            break;
    }
    return state;
}
export default cartReducer;