
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Products That Elevate Your Lifestyle
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Shop the latest trends with our curated collection of high-quality products.
            From tech essentials to home decor, we've got everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block text-center"
            >
              Shop Now
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero;
