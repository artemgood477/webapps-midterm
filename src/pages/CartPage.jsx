import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext); 

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
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
                      <p>Quantity: 
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, +e.target.value)}
                          min="1"
                          style={{ width: '50px' }}
                        />
                      </p>
                    </div>
                    <div>
                      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${calculateTotal()}</h3>
          {cart.length > 0 && (
            <Link to="/checkout">
              <button className="btn btn-primary mt-3">Proceed to Checkout</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
