import { useMemo } from "react"
import type { Shoe } from "../types"

type Props = {
  shoe: Shoe
  onChange: (shoe: string) => void
  currentShoe: string
}

const ShoeCard: React.FC<Props> = ({ shoe, onChange, currentShoe }) => {

  function handleClick() {
    if(shoe.bigShoe !== currentShoe){
      onChange(shoe.bigShoe);
    }
  }

  const isCurrent = useMemo(() => shoe.bigShoe === currentShoe, [shoe, currentShoe])

  return (
    <img
      src={shoe.thumbnail}
      onClick={handleClick}
      alt={`Producto miniatura`}
      height={100}
      width={100}
      className={`cursor-pointer object-contain rounded-md ${isCurrent? `opacity-50 border-[3px] border-orange` : ``}`}
    />
  )
}

export default ShoeCard