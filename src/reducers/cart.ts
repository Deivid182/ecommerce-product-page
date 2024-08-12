import { shoeItems } from "../data";
import { CartItem, ProductItem } from "../types";

export type CartActionsType = 
  { type: "add-item", payload: { item: ProductItem } } |
  { type: "increase-qty", payload: { id: number }} |
  { type: "decrease-qty", payload: { id: number }  } |
  { type: "remove-item", payload: { id: number } } |
  { type: "clear-cart" }

export type CartStateType = {
  data: ProductItem[],
  items: CartItem[],
}

export const initialCartState: CartStateType = {
  data: shoeItems,
  items: [],
}

export const cartReducer = (state: CartStateType = initialCartState, action: CartActionsType): CartStateType => {
  if(action.type === "add-item") {
    // find out if the item is already in the cart
    const foundItem = state.items.find(item => item.id === action.payload.item.id)
    let updatedCart: CartItem[] = []

    if(foundItem) {
      updatedCart = state.items.map(item => item.id === foundItem.id ? {...foundItem, qty: foundItem.qty + 1 } : item )
    } else {
      updatedCart = [...state.items, { ...action.payload.item, qty: 1}]
    }

    return { ...state, items: updatedCart }
  }

  if(action.type === "increase-qty") {
    const updatedCart = state.items.map(item => item.id === action.payload.id? {...item, qty: item.qty + 1 } : item)
    return {...state, items: updatedCart }
  }

  if(action.type === "decrease-qty") {
    const foundItem = state.items.find(item => item.id === action.payload.id)
    let updatedCart: CartItem[] = []
    if(foundItem) {
      if(foundItem.qty > 1) {
        updatedCart = state.items.map(item => item.id === foundItem.id? {...foundItem, qty: foundItem.qty - 1 } : item )
      } else {
        updatedCart = state.items.filter(item => item.id !== foundItem.id )
      }
    }
    return {...state, items: updatedCart }
  }

  if(action.type === "remove-item") {
    const updatedCart = state.items.filter(item => item.id!== action.payload.id)
    return {...state, items: updatedCart }
  }

  if(action.type === "clear-cart") {
    return {...state, items: [] }
  }

  return state
}
