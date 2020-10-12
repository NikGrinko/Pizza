const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const REMOVE_CART = 'REMOVE_CART';
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
const MINUS_ITEM_CART = 'MINUS_ITEM_CART';
const PLUS_ITEM_CART = 'PLUS_ITEM_CART';

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

        case REMOVE_CART:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        case REMOVE_ITEM_CART: {
            //create newObject and variables for remove item
            const price = state.totalPrice - state.items[action.payload].totalPrice;
            const count = state.totalCount - state.items[action.payload].items.length;
            const newItems = state.items;
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: price,
                totalCount: count

            }
        }

        case MINUS_ITEM_CART: {
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            let localPrice = state.items[action.payload].totalPrice > newObjItems[0].price ? state.items[action.payload].totalPrice - newObjItems[0].price : newObjItems[0].price;

            //new items after minus action
            const items = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: localPrice
                }
            }
            const totalCount = (obj) => {
                let sum = 0;
                for (let item of Object.values(obj)) {
                    sum += item.items.length
                }
                return sum;
            }
            const totalPrice = (obj) => {
                let sum = 0;
                for (let item of Object.values(obj)) {
                    sum += item.totalPrice
                }
                return sum;
            }
            //set new global totalCounter and totalPrice
            const count = totalCount(items);
            const price = totalPrice(items);
            return {
                ...state,
                items,
                totalCount: count,
                totalPrice: price

            }
        }

        case PLUS_ITEM_CART: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];


            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: newObjItems[0].price * newObjItems.length
                }
            }

            const totalCount = (obj) => {
                let sum = 0;
                for (let item of Object.values(obj)) {
                    sum += item.items.length
                }
                return sum;
            }
            const totalPrice = (obj) => {
                let sum = 0;
                for (let item of Object.values(obj)) {
                    sum += item.totalPrice
                }
                return sum;
            }

            const count = totalCount(newItems);
            const price = totalPrice(newItems);


            return {
                ...state,
                items: newItems,
                totalCount: count,
                totalPrice: price
            }
        }
        default:
            return state;
    }

}
export default cartReducer;