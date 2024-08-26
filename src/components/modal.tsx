import { useState } from "react";
import { shoes } from "../constants";
import ShoeCard from "./shoe-card";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export default function Modal({ isOpen, close }: Props) {
  const [currentShoe, setCurrentShoe] = useState(shoes[0].bigShoe);

  function handleNext() {
    const currentIndex = shoes.findIndex(
      (shoe) => shoe.bigShoe === currentShoe
    );
    let nextShoe = "";
    if (currentIndex + 1 < shoes.length) {
      nextShoe = shoes[currentIndex + 1].bigShoe;
    } else {
      nextShoe = shoes[0].bigShoe;
    }
    setCurrentShoe(nextShoe);
  }

  function handlePrev() {
    const currentIndex = shoes.findIndex(
      (shoe) => shoe.bigShoe === currentShoe
    );
    let prevShoe = "";
    if (currentIndex - 1 >= 0) {
      prevShoe = shoes[currentIndex - 1].bigShoe;
    } else {
      prevShoe = shoes[shoes.length - 1].bigShoe;
    }
    setCurrentShoe(prevShoe);
  }

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-xl space-y-4 p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md focus:outline-none"
                onClick={close}
              >
                <span className="sr-only">Close</span>
                <img src="/img/icon-close.svg" alt="icono cerrar" width={20} height={20} />
              </button>
            </div>
            <section className="flex-1 flex flex-col gap-12">
              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => handlePrev()}
                  className="absolute -left-6 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 size-12 flex items-center justify-center"
                >
                  <img
                    src="/img/icon-previous.svg"
                    alt="previo icono"
                    width={14}
                    height={14}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => handleNext()}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 size-12 flex items-center justify-center"
                >
                  <img
                    src="/img/icon-next.svg"
                    alt="previo icono"
                    width={14}
                    height={14}
                  />
                </button>
                <img
                  src={currentShoe}
                  alt="producto 1"
                  height={250}
                  width={250}
                  className="max-w-full w-full hover:cursor-pointer h-auto object-contain rounded-md"
                />
              </div>
              <div className="items-center hidden lg:flex justify-between">
                {shoes.map((shoe, index) => (
                  <ShoeCard
                    currentShoe={currentShoe}
                    shoe={shoe}
                    key={`shoe-${index}`}
                    onChange={(shoe: string) => setCurrentShoe(shoe)}
                  />
                ))}
              </div>
            </section>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
