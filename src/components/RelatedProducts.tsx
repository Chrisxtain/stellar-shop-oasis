
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

const RelatedProducts = ({ currentProductId, category }: RelatedProductsProps) => {
  // Get products in the same category, excluding current product
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-semibold mb-8">You Might Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
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
                <span className="font-semibold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
