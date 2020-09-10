export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      const itemInCart = state.cart.find((item) => item.id === action.item.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      const index = state.cart.findIndex((cart) => cart.id === action.id);

      if (index >= 0) {
        // item found in cart
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) as it is not in your cart`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case "INCREASE_QUANTITY":
      const increaseItem = state.cart.find((item) => item.id === action.id);
      increaseItem.quantity += 1;
      return {
        ...state,
        cart: state.cart,
      };

    case "DECREASE_QUANTITY":
      const decreaseItem = state.cart.find((item) => item.id === action.id);
      decreaseItem.quantity -= 1;
      return {
        ...state,
        cart: state.cart,
      };

    default:
      return state;
  }
}

export default reducer;
