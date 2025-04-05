import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <ProductForm selectedProduct={selectedProduct} clearEdit={() => setSelectedProduct(null)} />
      <ProductList onEdit={(product) => setSelectedProduct(product)} />
    </>
  );
};

export default ProductPage;
