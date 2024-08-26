import { useMemo } from "react";
import type { Shoe } from "../types";

type Props = {
  shoe: Shoe;
  onChange: (shoe: string) => void;
  currentShoe: string;
};

const ShoeCard: React.FC<Props> = ({ shoe, onChange, currentShoe }) => {
  function handleClick() {
    if (shoe.bigShoe !== currentShoe) {
      onChange(shoe.bigShoe);
    }
  }

  const isCurrent = useMemo(
    () => shoe.bigShoe === currentShoe,
    [shoe, currentShoe]
  );

  return (
    <div className="relative overflow-hidden">
      {isCurrent && 
        <div
         className="absolute inset-0 w-full h-full rounded-xl backdrop-brightness-125 bg-white/30 border-[3px] border-orange"
        >
        </div>
      }
      <img
        src={shoe.thumbnail}
        onClick={handleClick}
        alt={`Producto miniatura`}
        height={100}
        width={100}
        className={`cursor-pointer object-cover rounded-xl`}
      />
    </div>
  );
};

export default ShoeCard;
