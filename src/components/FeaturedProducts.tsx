
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  // Get products with featured flag or highest ratings
  const featuredProducts = products
    .filter(product => product.featured || product.rating >= 4.5)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated items, handpicked for exceptional quality and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <Link 
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-square bg-gray-50 relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
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
                  <span className="font-semibold text-gray-800">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="inline-block px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-md transition-colors font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
