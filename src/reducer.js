export const initialState = {
  cart: [
    {
      id: "123123",
      title: "Apple iPhone 11 (64GB) - White",
      price: 67300,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX522_.jpg",
    },
    {
      id: "1231234",
      title: "Apple iPhone 11 (64GB) - White",
      price: 67300,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX522_.jpg",
    },
  ],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
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

    default:
      return state;
  }
}

export default reducer;
