'use client';

import React from 'react';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded shadow p-4 bg-white">
      {/* Product ko image display garne */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      {/* Product ko title dekhaune */}
      <h3 className="font-bold text-lg mb-2">{product.title}</h3>
      {/* Product ko category dekhaune */}
      <p className="text-gray-700 mb-2">{product.category}</p>
      {/* Product ko price dekhaune */}
      <p className="text-blue-500 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
