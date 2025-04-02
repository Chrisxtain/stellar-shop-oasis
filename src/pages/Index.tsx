
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Newsletter from '@/components/Newsletter';
import Categories from '@/components/Categories';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
