// Cart.jsx

import React, { useState } from 'react';
import CartItem from './cartitem'; // Import your CartItem component
// ... (other imports)

function Cart({ cartItems }) {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    // Assuming you have a logic to add an item to the cart
    // Update the cart count when an item is added
    setCartCount(cartCount + 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-xl font-bold">${calculateTotal()}</p>
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 rounded mt-4"
            onClick={handleAddToCart}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
