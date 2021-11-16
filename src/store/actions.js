/**
 * Action:
 *  An action is a arrow function that returns an object
 * the object should contain the type (of action), may contain payload (data)
 */

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const demoAction = () => {
  return {
    type: "DEMO_ACTION",
  };
};
