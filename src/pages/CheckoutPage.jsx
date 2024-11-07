// src/pages/CheckoutPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext); 

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding.</p>
      ) : (
        <div>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h5>{item.title}</h5>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${calculateTotal()}</h3>
          {/* Simulate the checkout button */}
          <button className="btn btn-success mt-3">Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
