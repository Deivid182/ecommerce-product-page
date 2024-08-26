import { useReducer, useMemo, createContext } from "react";
import { CartActionsType, CartStateType, cartReducer, initialCartState } from "../reducers/cart"

type CartContextType = {
  state: CartStateType;
  dispatch: React.Dispatch<CartActionsType>;
  totalPrice: number
  noEmpty: boolean
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: React.ReactNode}) => {

  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  const totalPrice = useMemo(() => {
    return state.items.reduce((acc, item) => acc + (item.price * item.qty), 0)
  }, [state.items])


  const noEmpty = useMemo(() => !!state.items.length, [state.items.length])

  return (
    <CartContext.Provider
      value={{
        state, dispatch, totalPrice, noEmpty
      }}
    >
      {children}
    </CartContext.Provider>
  )
}