
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      description: 'Latest gadgets and tech',
      slug: 'electronics'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'Stylish apparel and accessories',
      slug: 'fashion'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      description: 'Furniture and decor',
      slug: 'home'
    },
    {
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      description: 'Cosmetics and self-care',
      slug: 'beauty'
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our wide range of products by category to find exactly what you're looking for.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link 
            to={`/products?category=${category.slug}`}
            key={index}
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity z-10"></div>
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
              <span className="mt-4 px-4 py-2 border border-white rounded-md text-sm font-medium opacity-90 group-hover:bg-white group-hover:text-gray-900 transition-colors">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
