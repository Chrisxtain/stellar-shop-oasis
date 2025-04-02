
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface ProductFiltersProps {
  category: string;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const ProductFilters = ({ category, priceRange, setPriceRange, sortBy, setSortBy }: ProductFiltersProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categories = [
    { label: 'All Products', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Home & Living', value: 'home' },
    { label: 'Beauty', value: 'beauty' },
  ];

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Customer Rating', value: 'rating' },
    { label: 'Newest', value: 'newest' },
  ];

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('category');
    } else {
      params.set('category', value);
    }
    navigate(`/products?${params.toString()}`);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newPriceRange = [...priceRange];
    newPriceRange[index] = newValue;
    setPriceRange(newPriceRange);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat.value}>
              <button
                className={`text-left w-full py-1 ${
                  cat.value === category ? 'text-teal-600 font-medium' : 'text-gray-600'
                }`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-lg mb-3">Price Range</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">${priceRange[0]}</span>
          <span className="text-sm text-gray-500">${priceRange[1]}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min-price" className="text-sm text-gray-600 block mb-1">Min</label>
            <input
              type="number"
              id="min-price"
              min="0"
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="text-sm text-gray-600 block mb-1">Max</label>
            <input
              type="number"
              id="max-price"
              min={priceRange[0]}
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-lg mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
