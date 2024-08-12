import { shoes } from "../constants";

const Gallery = () => {
  return (
    <section className="flex-1 flex flex-col gap-12">
        <img
          src="/img/image-product-1.jpg"
          alt="producto 1"
          height={100}
          width={100}
          className="max-w-full w-full h-auto object-contain rounded-md"
        />
      <div className="flex items-center justify-between">
        {
          shoes.map((shoe, index) => (
            <img
              key={`shoe-${index}`}
              src={shoe.thumbnail}
              alt={`Producto miniatura ${index}`}
              height={100}
              width={100}
              className="max-w-full h-auto object-contain rounded-md"
            />
          ))
        }
      </div>
    </section>
  );
};

export default Gallery;
