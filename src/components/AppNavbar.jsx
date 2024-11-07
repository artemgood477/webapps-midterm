import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

const AppNavbar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Very Fake Store
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cartItemCount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
