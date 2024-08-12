import { useReducer, useMemo, createContext } from "react";
import { CartActionsType, CartStateType, cartReducer, initialCartState } from "../reducers/cart"

type CartContextType = {
  state: CartStateType;
  dispatch: React.Dispatch<CartActionsType>;
  totalPrice: number
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  const totalPrice = useMemo(() => {
    return state.items.reduce((acc, item) => acc + (item.price * item.qty), 0)
  }, [state.items])

  return (
    <CartContext.Provider
      value={{
        state, dispatch, totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}