import { useState } from "react"
import MenuDrawer from "./menu-drawer"
import { navLinks } from "../constants"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <header className="padding-x header z-20 w-full">
        <nav className="max-container py-8 flex justify-between items-center lg:border-b border-b-grayish-blue">
        <div className="flex gap-4 lg:gap-16 items-center">
          <img onClick={() => setIsOpen(true)} className="block cursor-pointer lg:hidden size-6 lg:size-10" src="/img/icon-menu.svg" alt="menu logo" width={40} height={40}  />
          <img className="w-24 lg:w-36" src="/img/logo.svg" alt="sneakers logo" width={150} height={40}  />
          <div className="gap-8 items-center hidden lg:flex">
            {navLinks.map((link, index) => (
              <a key={index} className="font-normal text-dark-grayish-blue" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img className="cursor-pointer" src="/img/icon-cart.svg" alt="carrito icon" width={20} height={18} />
          <img className="size-6 lg:size-10" src="/img/image-avatar.png" alt="avatar imagen" width={40} height={40} />
        </div>
        </nav>
      </header>
    </>
  )
}

export default Header