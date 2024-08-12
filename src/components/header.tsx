
const Header = () => {
  return (
    <header className="padding-x header w-full">
      <nav className="max-container py-8 flex justify-between items-center border-b border-b-grayish-blue">
       <div className="flex gap-16 items-center">
        <img src="/img/logo.svg" alt="sneakers logo" width={150} height={40}  />
        <div className="flex gap-8 items-center">
          <a className="font-normal text-dark-grayish-blue" href="#">
           Collections
          </a>
          <a className="font-normal text-dark-grayish-blue" href="#">
           Men
          </a>
          <a className="font-normal text-dark-grayish-blue" href="#">
           Woman
          </a>
          <a className="font-normal text-dark-grayish-blue" href="#">
           About
          </a>
          <a className="font-normal text-dark-grayish-blue" href="#">
           Contact
          </a>
        </div>
       </div>
       <div className="flex items-center gap-8">
        <img src="/img/icon-cart.svg" alt="carrito icon" width={20} height={18} />
        <img src="/img/image-avatar.png" alt="avatar imagen" width={40} height={40} />
       </div>
      </nav>
    </header>
  )
}

export default Header