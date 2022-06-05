import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartCons";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
