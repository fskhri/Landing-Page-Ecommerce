import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between border-b-2 py-2">
      <div>
        <p className="text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
      <p className="text-lg font-bold">${item.price}</p>
    </div>
  );
}

export default CartItem;
