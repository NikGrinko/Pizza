const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
const REMOVE_CART = 'REMOVE_CART';
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
const MINUS_ITEM_CART = 'MINUS_ITEM_CART';
const PLUS_ITEM_CART = 'PLUS_ITEM_CART';
export const addPizzaToCart = (pizzaObj) => (
    {
        type: ADD_PIZZA_CART,
        payload: pizzaObj
    }
)
export const removeCart = () => (
    {
        type: REMOVE_CART
    }
)
export const removeItemCart = (index) => (
    {
        type: REMOVE_ITEM_CART,
        payload: index
    }
)
export const minusItemCart = (index) => (
    {
        type: MINUS_ITEM_CART,
        payload: index
    }
)
export const plusItemCart = (index) => (
    {
        type: PLUS_ITEM_CART,
        payload: index
    }
)