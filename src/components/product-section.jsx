import React, { useState } from 'react';
import ListPic from '../assets/vivo.jpeg';

function Product() {
  const [showMore, setShowMore] = useState(false);

  // Define your product data here
  const products = [
    { name: 'Vivo', id: 1 },
    { name: 'Oppo', id: 2 },
    { name: 'Samsung', id: 3 },
    { name: 'Rog', id: 4 },
    { name: 'Iphone 12', id: 5 },
    { name: 'Samsung Z flip', id: 6 },
    { name: 'Rog', id: 7 },
  ];

  // Adjust the number of products to show based on the showMore state
  const visibleProducts = showMore ? products : products.slice(0, 3);

  return (
    <div className="my-8 p-2">
      <div className="flex flex-wrap justify-center gap-2">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <img src={ListPic} alt="list-img" />
            <p className="flex justify-center p-2">{product.name}</p>
          </div>
        ))}
      </div>

      {!showMore && (
        <div className="text-center my-4">
          <button
            onClick={() => setShowMore(true)}
            className="py-2 px-3 rounded bg-blue-400 text-white"
          >
            Read More
          </button>
        </div>
      )}

      {/* Add your "Best seller Product" section here */}
    </div>
  );
}

export default Product;
