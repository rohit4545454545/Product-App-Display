"use client";

import React, { useEffect, useState } from "react";
import { Product } from "./types";

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Products store garne
  const [categories, setCategories] = useState<string[]>([]); // Categories list
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Selected category
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [showCategories, setShowCategories] = useState(false); // Category list dekhaune ya hide garne

  // Products ra categories fetch garne
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();

      setProducts(data);

      // Unique categories extract garne
      const uniqueCategories = Array.from(
        new Set(data.map((product) => product.category))
      );
      setCategories(uniqueCategories);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Component load hune bela fetchProducts call garne
  }, []);

  // Loading display garne
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop by Category</h1>

      {/* Category Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowCategories(!showCategories)} // Button click gare category dekhaune
          className="w-full text-xl font-semibold text-left p-4 border rounded-lg bg-white shadow-lg"
        >
          Category
        </button>

        {/* Categories list */}
        {showCategories && (
          <div className="mt-4">
            {categories.map((category) => (
              <div key={category} className="mb-4">
                <label className="inline-flex items-center text-lg space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category} // Selected category
                    onChange={() => setSelectedCategory(category)} // Change category
                    className="h-5 w-5 text-blue-500 border-gray-300 rounded-full"
                  />
                  <span>{category}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Products display */}
      {selectedCategory && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Products in {selectedCategory}:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((product) => product.category === selectedCategory) // Filter products by category
              .map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-blue-500 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
