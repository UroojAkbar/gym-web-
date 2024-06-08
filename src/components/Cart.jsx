import React, { useState } from "react";

// Example cart items
const initialCartItems = [
  { id: 1, name: "Dumbbell Set", price: 100, quantity: 2 },
  { id: 2, name: "Yoga Mat", price: 20, quantity: 2 },
  { id: 3, name: "Dumbell", price: 20, quantity: 4 },
  { id: 4, name: "Resistance Bands", price: 15, quantity: 3 },
  { id: 5, name: "Yoga Set", price: 300, quantity: 2 },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to remove item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to update quantity
  const updateQuantity = (itemId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#373737] p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Your Cart
      </h1>
      <div className="flex flex-col items-center">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-4 w-full max-w-md rounded-lg shadow-md mb-4"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                className="border-2 border-gray-200 rounded w-16 text-center mr-2"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-2xl font-bold text-white">Total: ${total}</div>
      </div>
    </div>
  );
};

export default CartPage;
