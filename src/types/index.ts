export type Shoe = {
  thumbnail: string
  bigShoe: string
}

export type ProductItem = {
  id: number,
  name: string
  price: number
  shoe: Shoe
}

export type CartItem = ProductItem & { qty: number }