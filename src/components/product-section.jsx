import React, { useState } from 'react';
import ListPic from '../assets/vivo.jpeg';

function Product() {
  const [showMoreAll, setShowMoreAll] = useState(false);
  const [showMoreBestSeller, setShowMoreBestSeller] = useState(false);

  const products = [
    { name: 'Vivo', id: 1 },
    { name: 'Oppo', id: 2 },
    { name: 'Samsung', id: 3 },
    { name: 'Rog', id: 4 },
    { name: 'Iphone 12', id: 5 },
    { name: 'Samsung Z flip', id: 6 },
    { name: 'Rog', id: 7 },
  ];

  const bestSellerProducts = [
    { name: 'Rog', id: 4 },
    { name: 'Iphone 12', id: 5 },
    { name: 'Samsung Z flip', id: 6 },
    { name: 'Rog', id: 7 },
  ];

  const renderProductSection = (sectionProducts, sectionTitle, showMore, setShowMore) => (
    <div className="my-8">
      <h2 className="text-2xl mb-4">{sectionTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sectionProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={ListPic}
              alt="list-img"
              className="w-full h-32 object-contain mb-2"
            />
            <p className="text-center">{product.name}</p>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="text-center my-4">
          <button
            onClick={() => setShowMore(true)}
            className="py-2 px-3 rounded bg-blue-400 text-white"
          >
            Read More {sectionTitle}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="my-8 p-2">
      {renderProductSection(products.slice(0, 3), 'All Products', showMoreAll, setShowMoreAll)}
      {renderProductSection(
        bestSellerProducts.slice(0, 3),
        'Best Seller Products',
        showMoreBestSeller,
        setShowMoreBestSeller
      )}
    </div>
  );
}

export default Product;
