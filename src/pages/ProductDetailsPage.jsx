import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext'; 
import { CartContext } from '../context/CartContext'; 

const ProductDetailsPage = () => {
  const { id } = useParams(); 
  const { products } = useContext(ProductContext); 
  const { addToCart } = useContext(CartContext); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id)); 
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>

          <div className="my-3">
            <button className="btn btn-success" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>

          <div className="my-3">
            <h5>Rating: {product.rating.rate} ({product.rating.count} reviews)</h5>
            <div className="d-flex">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`fa fa-star${index < Math.floor(product.rating.rate) ? ' checked' : ''}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
