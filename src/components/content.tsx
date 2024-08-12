const Content = () => {
  return (
    <section className="flex-1">
      <h3 className="tracking-wide text-dark-grayish-blue font-bold mb-6">
        SNEAKER COMPANY
      </h3>
      <h1 className="text-5xl text-very-dark-blue font-bold mb-12">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-grayish-blue mb-6 font-normal">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <article className="space-y-6 mb-10">
        <div className="flex gap-4 items-baseline">
          <h3 className="text-very-dark-blue text-3xl font-bold">$125.00</h3>
          <span className="rounded-lg bg-very-dark-blue text-custom-white font-medium text-lg py-1 px-3">
            <p>50%</p>
          </span>
        </div>
        <span className="block line-through text-dark-grayish-blue font-bold">
          $250.00
        </span>
      </article>
      <article className="flex items-center gap-12">
        <div className="flex-[0.5] flex justify-between items-center rounded-md bg-light-grayish-blue p-4">
          <img
            src="/img/icon-minus.svg"
            alt="icono estrella producto"
            width={14}
            height={14}
          />
          <span className="text-lg text-black font-medium">0</span>
          <img
            src="/img/icon-plus.svg"
            alt="icono estrella producto"
            width={14}
            height={14}
          />
        </div>
        <button className="flex-1 rounded-md flex items-center justify-center gap-4 bg-orange p-4">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#1d2025"
              fill-rule="nonzero"
            />
          </svg>
          <p className="font-medium text-lg text-very-dark-blue">
            Add to cart
          </p>
        </button>
      </article>
    </section>
  );
};

export default Content;
