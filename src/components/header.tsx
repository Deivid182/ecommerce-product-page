import { useState } from "react";
import MenuDrawer from "./menu-drawer";
import { navLinks } from "../constants";
import { useCart } from "../hooks/use-cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { dispatch, state, totalPrice, noEmpty } = useCart();

  return (
    <>
      <MenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <header className="padding-x header z-20 w-full">
        <nav className="max-container py-8 flex justify-between items-center lg:border-b border-b-grayish-blue">
          <div className="flex gap-4 lg:gap-16 items-center">
            <img
              onClick={() => setIsOpen(true)}
              className="block cursor-pointer lg:hidden size-6 lg:size-10"
              src="/img/icon-menu.svg"
              alt="menu logo"
              width={40}
              height={40}
            />
            <img
              className="w-24 lg:w-36"
              src="/img/logo.svg"
              alt="sneakers logo"
              width={150}
              height={40}
            />
            <div className="gap-8 items-center hidden lg:flex">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="font-normal text-dark-grayish-blue"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8 relative">
            <img
              onClick={() => setShow(!show)}
              className="cursor-pointer"
              src="/img/icon-cart.svg"
              alt="carrito icon"
              width={20}
              height={18}
            />
            {show && (
              <div className="absolute right-2 top-16 px-8 py-3 rounded sm:rounded-lg">
                <div className="relative z-20 overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Number of items
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {noEmpty ? (
                        state.items.map((item) => (
                          <tr
                            key={item.id}
                            className="bg-white border-b hover:bg-gray-50"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {item.name}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {item.qty}
                            </th>
                            <td className="px-6 py-4">
                              {new Intl.NumberFormat("en", {
                                style: "currency",
                                currency: "USD",
                              }).format(item.price)}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                type="button"
                                className="w-full cursor-pointer flex justify-center"
                                onClick={() =>
                                  dispatch({
                                    type: "remove-item",
                                    payload: { id: item.id },
                                  })
                                }
                              >
                                <img
                                  src="/img/icon-minus.svg"
                                  alt="icono estrella producto"
                                  width={14}
                                  height={14}
                                />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="bg-white border-b">
                          <td
                            colSpan={3}
                            className="px-3 py-4 text-center text-gray-500 font-medium"
                          >
                            Cart Empty.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <p className="z-20 bg-white flex justify-end text-gray-500 p-2">
                    Total:
                    <span className="ml-1 font-black">
                      {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                      }).format(totalPrice)}
                    </span>
                  </p>
                </div>
              </div>
            )}
            <img
              className="size-6 lg:size-10"
              src="/img/image-avatar.png"
              alt="avatar imagen"
              width={40}
              height={40}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
