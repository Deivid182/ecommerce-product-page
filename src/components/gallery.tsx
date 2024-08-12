import { useState } from "react";
import { shoes } from "../constants";
import ShoeCard from "./shoe-card";

const Gallery = () => {

  const [currentShoe, setCurrentShoe] = useState(shoes[0].bigShoe);

  function handleNext() {
    const currentIndex = shoes.findIndex(shoe => shoe.bigShoe === currentShoe);
    let nextShoe = "";
    if(currentIndex + 1 < shoes.length) {
      nextShoe = shoes[currentIndex + 1].bigShoe;
    } else {
      nextShoe = shoes[0].bigShoe;
    }
    setCurrentShoe(nextShoe);
  }

  function handlePrev() {
    const currentIndex = shoes.findIndex(shoe => shoe.bigShoe === currentShoe);
    let prevShoe = "";
    if (currentIndex - 1 >= 0) {
      prevShoe = shoes[currentIndex - 1].bigShoe;
    } else {
      prevShoe = shoes[shoes.length - 1].bigShoe;
    }
    setCurrentShoe(prevShoe);
  }


  return (
    <section className="flex-1 flex flex-col gap-12">
      <div className="relative z-10">
        <button 
          type="button"
          onClick={() => handlePrev()}
          className="lg:hidden absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 size-12 flex items-center justify-center">
          <img src="/img/icon-previous.svg" alt="previo icono" width={14} height={14} />
        </button>
        <button
          type="button"
          onClick={() => handleNext()}
          className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 size-12 flex items-center justify-center">
          <img src="/img/icon-next.svg" alt="previo icono" width={14} height={14} />
        </button>
        <img
          src={currentShoe}
          alt="producto 1"
          height={100}
          width={100}
          className="max-w-full w-full h-auto object-contain rounded-md"
        />
      </div>
      <div className="items-center hidden lg:flex justify-between">
        {
          shoes.map((shoe, index) => (
            <ShoeCard
              currentShoe={currentShoe}
              shoe={shoe}
              key={`shoe-${index}`}
              onChange={(shoe: string) => setCurrentShoe(shoe)}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Gallery;
