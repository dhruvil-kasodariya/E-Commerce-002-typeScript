import { CART_ACTION_TYPE } from "./cart.type";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    // case CART_ACTION_TYPE.SET_CART_COUNT:
    //   return {
    //     ...state,
    //     cartItems: payload,
    //   };
    // case CART_ACTION_TYPE.SET_CART_TOTAL:
    //   return {
    //     ...state,
    //     cartItems: payload,
    //   };
    default:
      return state;
  }
};
