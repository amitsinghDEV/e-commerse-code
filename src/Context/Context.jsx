import { createContext, useReducer } from "react";
export const cartContext = createContext();
export const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter(
          (items) => action.payload.id === items.id
        );
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

        break;
      case "INCREASE":
        const tempstate1 = state.map((items) => {
          if (items.id === action.payload.id) {
            return { ...items, quantity: items.quantity + 1 };
          } else {
            return items;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((items) => {
          if (items.id === action.payload.id) {
            return { ...items, quantity: items.quantity - 1 };
          } else {
            return items;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (items) => items.id !== action.payload.id
        );

        return tempstate3;

      default:
        return state;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return <cartContext.Provider value={info}>{children}</cartContext.Provider>;
};
