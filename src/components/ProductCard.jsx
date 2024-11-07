import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img 
          src={product.image} 
          alt={product.title} 
          className="card-img-top" 
          style={{ 
            height: '250px', 
            objectFit: 'contain', 
            width: '100%'
          }} 
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text" style={{ height: '100px', overflow: 'hidden' }}>
            {product.description}
          </p>
          <p className="card-text"><strong>Price: </strong>${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
