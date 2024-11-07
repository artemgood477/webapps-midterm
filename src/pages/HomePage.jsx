import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar'; 

const HomePage = () => {
  const { products, loading } = useContext(ProductContext); 

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="container mt-5">
      <SearchBar/> 

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
