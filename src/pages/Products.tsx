
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { useSearchParams } from 'react-router-dom';
import ProductFilters from '@/components/ProductFilters';

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-8">Our Products</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <ProductFilters 
              category={category} 
              priceRange={priceRange} 
              setPriceRange={setPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="md:w-3/4">
            <ProductGrid 
              category={category} 
              priceRange={priceRange}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
