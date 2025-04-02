
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';

interface ProductGridProps {
  category: string;
  priceRange: number[];
  sortBy: string;
}

const ProductGrid = ({ category, priceRange, sortBy }: ProductGridProps) => {
  // Filter products by category and price range
  let filteredProducts = [...products];
  
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
  }
  
  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );
  
  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    default: // featured or any other value
      filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your filters or browse all products</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">{filteredProducts.length} products found</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <Link 
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
          >
            <div className="aspect-square bg-gray-50 relative overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      size={14}
                      className={star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews?.length || 0})
                </span>
              </div>
              <div className="flex items-center justify-between">
                {product.originalPrice ? (
                  <div>
                    <span className="font-semibold text-gray-800">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="font-semibold text-gray-800">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
