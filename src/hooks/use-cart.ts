import { useContext } from "react";
import { CartContext } from "../context/cart-provider";

export const useCart = () => {
  return useContext(CartContext)
}