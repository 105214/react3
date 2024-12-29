// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
     
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} / 5</p>
    </div>
  );
}

export default ProductDetail;
