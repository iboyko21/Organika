/**
 * Reducer:
 * An arrow function that receives the state and the action
 * must return a state / new state
 *
 */

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      var copy = [...state];

      /**
       *  if the product (action.payload) exist inside the copy (compare by id)
       *  then just update the quantity of the object that exist in copy
       */
      let found = false;
      // make loop to travel array copy
      for (let i = 0; i < copy.length; i++) {
        let prod = copy[i];
        if (prod.id === action.payload.id) {
          // prod.quantity = prod.quantity + action.payload.quantity; -- same thing
          prod.quantity += action.payload.quantity;
          found = true;
        }
      }
      // if not found push the product to copy
      if (!found) {
        copy.push(action.payload);
      }

      return copy;

    case "REMOVE_FROM_CART":
      // return []; empty array which removes everything
      return state.filter((prod) => prod.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
